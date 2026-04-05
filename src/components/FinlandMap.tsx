"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/config";

interface RegionData {
  region_fi: string;
  region_en: string;
  municipalities: { fi: string; en: string }[];
}

// Simplified Finland region map — SVG path data for each maakunta
// Coordinates are approximate, designed for a 400x600 viewBox
const REGION_PATHS: Record<string, string> = {
  "Uusimaa": "M185,520 L220,510 L250,515 L260,530 L240,540 L210,545 L185,535Z",
  "Varsinais-Suomi": "M140,510 L185,520 L185,535 L170,545 L140,540 L120,530 L125,515Z",
  "Satakunta": "M110,470 L140,475 L140,510 L125,515 L100,510 L95,490Z",
  "Kanta-Häme": "M175,490 L205,495 L210,515 L185,520 L170,510 L170,495Z",
  "Pirkanmaa": "M140,455 L175,450 L185,470 L185,490 L175,490 L170,495 L170,510 L140,510 L140,475Z",
  "Päijät-Häme": "M205,470 L230,465 L240,480 L240,510 L220,510 L210,515 L205,495Z",
  "Kymenlaakso": "M250,490 L280,485 L290,500 L270,515 L260,530 L250,515 L240,510Z",
  "Etelä-Karjala": "M280,460 L310,455 L320,475 L300,490 L280,485 L270,475Z",
  "Etelä-Savo": "M240,420 L275,415 L285,440 L280,460 L270,475 L250,470 L240,450Z",
  "Pohjois-Savo": "M225,360 L260,355 L275,380 L275,415 L240,420 L230,400 L225,375Z",
  "Pohjois-Karjala": "M275,340 L310,330 L325,360 L320,400 L310,420 L310,455 L280,460 L275,415 L275,380Z",
  "Keski-Suomi": "M175,400 L210,395 L225,375 L230,400 L240,420 L240,450 L230,465 L205,470 L205,455 L185,450 L175,430Z",
  "Etelä-Pohjanmaa": "M100,420 L140,415 L150,440 L140,455 L120,455 L100,445Z",
  "Pohjanmaa": "M70,400 L100,395 L110,420 L100,420 L100,445 L80,440 L65,420Z",
  "Keski-Pohjanmaa": "M80,370 L110,365 L120,385 L110,400 L100,395 L85,390Z",
  "Pohjois-Pohjanmaa": "M110,280 L170,270 L195,300 L200,340 L210,360 L210,395 L175,400 L175,430 L140,415 L120,385 L110,365 L105,330Z",
  "Kainuu": "M210,280 L260,270 L275,310 L275,340 L260,355 L225,360 L210,360 L200,340 L195,300Z",
  "Lappi": "M80,60 L200,40 L280,70 L300,140 L280,220 L260,270 L210,280 L170,270 L110,280 L95,240 L70,180 L65,120Z",
  "Ahvenanmaa": "M70,540 L95,530 L100,545 L90,555 L70,555Z",
};

// Center points for labels
const REGION_CENTERS: Record<string, [number, number]> = {
  "Uusimaa": [220, 528],
  "Varsinais-Suomi": [148, 528],
  "Satakunta": [115, 492],
  "Kanta-Häme": [188, 505],
  "Pirkanmaa": [160, 478],
  "Päijät-Häme": [225, 490],
  "Kymenlaakso": [265, 505],
  "Etelä-Karjala": [298, 472],
  "Etelä-Savo": [260, 442],
  "Pohjois-Savo": [248, 385],
  "Pohjois-Karjala": [298, 385],
  "Keski-Suomi": [210, 430],
  "Etelä-Pohjanmaa": [125, 435],
  "Pohjanmaa": [82, 418],
  "Keski-Pohjanmaa": [98, 380],
  "Pohjois-Pohjanmaa": [160, 330],
  "Kainuu": [245, 315],
  "Lappi": [175, 165],
  "Ahvenanmaa": [83, 545],
};

export default function FinlandMap({
  regions,
  officialCounts,
  onRegionClick,
}: {
  regions: RegionData[];
  officialCounts: Record<string, number>; // municipality name -> count of officials
  onRegionClick?: (region: string) => void;
}) {
  const locale = useLocale() as Locale;
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  // Calculate coverage per region
  function getRegionStats(region: RegionData) {
    let withData = 0;
    let totalOfficials = 0;
    for (const m of region.municipalities) {
      const count = officialCounts[m.fi] || 0;
      if (count > 0) withData++;
      totalOfficials += count;
    }
    return { total: region.municipalities.length, withData, totalOfficials };
  }

  function getFillColor(region: RegionData): string {
    const { total, withData } = getRegionStats(region);
    const ratio = withData / total;
    if (ratio === 0) return "#e5e7eb"; // gray-200
    if (ratio < 0.25) return "#dbeafe"; // blue-100
    if (ratio < 0.5) return "#93c5fd"; // blue-300
    if (ratio < 0.75) return "#3b82f6"; // blue-500
    return "#1e40af"; // blue-800
  }

  const regionName = (r: RegionData) => locale === "fi" ? r.region_fi : r.region_en;

  return (
    <div className="relative">
      <svg viewBox="40 20 310 560" className="w-full max-w-md mx-auto" role="img" aria-label="Finland map">
        {regions.map((region) => {
          const path = REGION_PATHS[region.region_fi];
          if (!path) return null;
          const center = REGION_CENTERS[region.region_fi];
          const stats = getRegionStats(region);
          const isHovered = hoveredRegion === region.region_fi;

          return (
            <g key={region.region_fi}>
              <path
                d={path}
                fill={getFillColor(region)}
                stroke="#fff"
                strokeWidth={isHovered ? 2.5 : 1.5}
                className="cursor-pointer transition-all duration-150"
                opacity={isHovered ? 1 : 0.85}
                onMouseEnter={() => setHoveredRegion(region.region_fi)}
                onMouseLeave={() => setHoveredRegion(null)}
                onClick={() => onRegionClick?.(region.region_fi)}
              />
              {center && (
                <text
                  x={center[0]}
                  y={center[1]}
                  textAnchor="middle"
                  className="pointer-events-none select-none"
                  fontSize={region.region_fi === "Lappi" ? 11 : 7}
                  fontWeight={isHovered ? 700 : 500}
                  fill={stats.withData > 0 ? "#1e3a5f" : "#6b7280"}
                >
                  {stats.withData}/{stats.total}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Hover tooltip */}
      {hoveredRegion && (() => {
        const region = regions.find(r => r.region_fi === hoveredRegion);
        if (!region) return null;
        const stats = getRegionStats(region);
        return (
          <div className="absolute top-2 right-2 rounded-lg border border-border bg-white px-4 py-3 shadow-lg text-sm max-w-[200px]">
            <p className="font-semibold text-civic-900">{regionName(region)}</p>
            <p className="text-muted text-xs mt-1">
              {stats.total} {locale === "fi" ? "kuntaa" : "municipalities"}
            </p>
            <p className="text-xs mt-0.5">
              <span className="font-medium text-civic-700">{stats.withData}</span>
              <span className="text-muted"> {locale === "fi" ? "tiedoilla" : "with data"}</span>
            </p>
            <p className="text-xs mt-0.5">
              <span className="font-medium text-civic-700">{stats.totalOfficials}</span>
              <span className="text-muted"> {locale === "fi" ? "viranhaltijaa" : "officials"}</span>
            </p>
          </div>
        );
      })()}

      {/* Legend */}
      <div className="flex items-center justify-center gap-3 mt-4 text-[10px] text-muted">
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-sm bg-gray-200"></span> 0%</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-sm bg-blue-100"></span> &lt;25%</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-sm bg-blue-300"></span> &lt;50%</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-sm bg-blue-500"></span> &lt;75%</span>
        <span className="flex items-center gap-1"><span className="inline-block w-3 h-3 rounded-sm bg-blue-800"></span> 100%</span>
      </div>
    </div>
  );
}
