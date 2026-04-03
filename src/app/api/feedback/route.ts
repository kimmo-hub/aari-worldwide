import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { officialId, policyAreaId, rating, email, comment } = body;

  // Validate required fields
  if (!officialId || !policyAreaId || !rating || !email) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Validate rating range
  if (typeof rating !== "number" || rating < 1 || rating > 5) {
    return NextResponse.json(
      { error: "Rating must be between 1 and 5" },
      { status: 400 }
    );
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 }
    );
  }

  // Hash the email for privacy
  const emailHash = crypto
    .createHash("sha256")
    .update(email.toLowerCase().trim())
    .digest("hex");

  // If Supabase is not configured, return success for MVP demo
  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json({
      success: true,
      message: "Feedback recorded (demo mode — Supabase not configured)",
    });
  }

  const { error } = await supabase.from("feedback_ratings").insert({
    official_id: officialId,
    policy_area_id: policyAreaId,
    rating,
    comment: comment || null,
    email_hash: emailHash,
    verified: false,
  });

  if (error) {
    console.error("Feedback insert error:", error);
    return NextResponse.json(
      { error: "Failed to save feedback" },
      { status: 500 }
    );
  }

  // In production, send verification email here
  return NextResponse.json({
    success: true,
    message: "Feedback submitted. Please check your email for verification.",
  });
}
