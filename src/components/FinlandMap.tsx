"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/config";

interface RegionData {
  region_fi: string;
  region_en: string;
  municipalities: { fi: string; en: string }[];
}

// Auto-generated from varmais/maakunnat GeoJSON (CC-BY)
// Douglas-Peucker simplified, Mercator projection, viewBox 0 0 400 700
const REGION_PATHS: Record<string, string> = {
  "Lappi": "M172,350 L159,355 L159,320 L143,292 L143,282 L154,259 L140,236 L147,219 L135,215 L140,206 L138,191 L144,184 L132,170 L128,171 L128,163 L118,154 L94,147 L59,118 L55,108 L48,106 L53,102 L63,108 L61,97 L70,88 L81,91 L98,114 L104,131 L109,129 L128,137 L144,131 L150,122 L182,142 L192,122 L203,119 L209,109 L206,92 L215,67 L212,63 L230,42 L247,44 L265,32 L276,31 L276,37 L287,49 L312,60 L318,76 L303,95 L306,107 L290,117 L302,120 L290,143 L297,167 L318,175 L328,194 L339,202 L336,213 L309,251 L325,284 L298,280 L293,290 L300,295 L296,303 L300,311 L288,314 L293,321 L270,322 L266,314 L259,315 L241,330 L220,328 L220,322 L196,328 L172,350Z",
  "Pohjanmaa": "M85,532 L81,543 L56,549 L36,480 L52,462 L89,449 L101,431 L115,435 L121,445 L138,445 L146,451 L136,454 L145,468 L135,461 L126,469 L115,469 L110,475 L113,484 L102,501 L85,497 L86,506 L80,511 L79,521 L85,532Z",
  "Pirkanmaa": "M123,594 L121,587 L111,582 L115,573 L110,569 L118,554 L108,544 L116,541 L118,530 L149,517 L156,529 L164,535 L171,534 L176,543 L170,549 L178,555 L184,574 L180,573 L182,581 L171,582 L146,595 L149,601 L123,594Z",
  "Etelä-Pohjanmaa": "M81,543 L85,532 L79,521 L80,511 L86,506 L85,497 L102,501 L113,484 L110,475 L115,469 L121,471 L135,461 L165,483 L163,490 L168,496 L164,497 L172,508 L167,518 L160,518 L154,525 L149,517 L143,522 L133,521 L123,529 L111,527 L92,545 L81,543Z",
  "Keski-Suomi": "M208,561 L200,562 L198,572 L184,574 L178,555 L170,549 L176,543 L171,534 L164,535 L154,525 L160,518 L167,518 L172,508 L162,485 L170,480 L178,482 L178,469 L192,454 L212,464 L221,463 L220,481 L226,487 L217,495 L226,503 L229,501 L234,511 L230,515 L237,520 L236,528 L222,538 L228,546 L225,551 L231,565 L225,566 L211,555 L208,561Z",
  "Etelä-Karjala": "M264,579 L285,578 L290,571 L301,573 L302,569 L316,568 L325,559 L343,552 L315,584 L277,615 L253,603 L250,597 L252,589 L258,587 L249,578 L264,579Z",
  "Keski-Pohjanmaa": "M157,428 L161,439 L186,463 L178,469 L178,482 L159,481 L136,454 L146,451 L138,445 L121,445 L115,435 L101,431 L116,421 L138,426 L146,433 L153,426 L157,428Z",
  "Pohjois-Savo": "M248,518 L235,520 L230,515 L234,511 L229,501 L226,503 L217,495 L226,487 L220,481 L218,469 L224,456 L223,441 L242,430 L263,434 L285,451 L288,446 L294,450 L300,467 L296,478 L310,490 L307,494 L311,498 L306,502 L301,498 L296,503 L299,506 L284,521 L297,532 L295,536 L272,529 L259,517 L248,518Z",
  "Etelä-Savo": "M230,582 L224,569 L232,560 L222,538 L236,528 L237,520 L259,517 L272,529 L295,536 L297,532 L284,521 L297,508 L317,523 L329,554 L316,568 L302,569 L301,573 L290,571 L285,578 L251,577 L248,580 L257,589 L247,590 L230,582Z",
  "Pohjois-Karjala": "M343,552 L325,559 L328,546 L317,523 L297,508 L301,498 L306,502 L311,498 L307,494 L310,490 L296,478 L300,467 L294,450 L288,446 L292,439 L329,439 L332,449 L338,446 L353,463 L367,469 L387,494 L376,517 L343,552Z",
  "Uusimaa": "M236,641 L216,651 L113,669 L117,648 L122,650 L132,640 L142,640 L151,616 L171,621 L173,615 L188,616 L191,606 L203,615 L225,611 L232,620 L229,624 L236,641Z",
  "Kainuu": "M285,451 L263,434 L239,429 L239,416 L224,404 L241,393 L243,387 L257,384 L256,367 L274,367 L277,359 L296,355 L297,349 L314,341 L331,342 L326,357 L335,360 L335,366 L327,369 L326,377 L330,385 L342,387 L339,403 L341,410 L353,417 L354,431 L346,442 L332,449 L329,439 L292,439 L285,451Z",
  "Kymenlaakso": "M226,616 L217,593 L231,583 L252,589 L253,603 L277,615 L261,638 L236,641 L229,624 L232,620 L226,616Z",
  "Päijät-Häme": "M191,606 L188,607 L185,596 L193,588 L182,581 L180,573 L198,572 L200,562 L208,561 L211,555 L223,563 L225,578 L231,583 L217,593 L222,613 L203,615 L191,606Z",
  "Kanta-Häme": "M188,616 L173,615 L171,621 L163,621 L139,611 L132,613 L127,604 L131,604 L131,597 L145,597 L149,601 L146,595 L171,582 L182,581 L193,588 L185,596 L188,616Z",
  "Varsinais-Suomi": "M149,621 L142,640 L132,640 L122,650 L117,648 L113,669 L105,674 L67,675 L72,656 L62,643 L65,620 L61,613 L42,604 L55,591 L85,596 L97,605 L117,598 L118,593 L132,600 L127,604 L128,610 L151,616 L149,621Z",
  "Pohjois-Pohjanmaa": "M189,456 L186,463 L153,426 L146,433 L138,426 L116,421 L122,419 L127,403 L149,393 L159,355 L172,350 L196,328 L220,322 L220,328 L241,330 L266,314 L270,322 L293,321 L288,314 L300,311 L296,307 L300,295 L293,290 L298,280 L325,284 L336,303 L343,332 L330,334 L334,338 L331,342 L314,341 L297,349 L296,355 L277,359 L274,367 L256,367 L257,384 L243,387 L241,393 L224,404 L239,416 L242,430 L223,441 L221,463 L189,456Z",
  "Satakunta": "M88,597 L55,591 L59,563 L56,549 L81,543 L92,545 L111,527 L119,535 L108,544 L118,554 L110,569 L115,575 L110,577 L112,585 L119,585 L123,594 L97,605 L88,597Z",
  "Ahvenanmaa": "M64,636 L62,643 L72,656 L67,675 L54,673 L42,677 L29,670 L3,640 L7,618 L32,612 L42,604 L61,613 L66,624 L64,636Z",
};

const REGION_CENTERS: Record<string, [number, number]> = {
  "Lappi": [194, 182],
  "Pohjanmaa": [98, 482],
  "Pirkanmaa": [141, 563],
  "Etelä-Pohjanmaa": [126, 504],
  "Keski-Suomi": [199, 517],
  "Etelä-Karjala": [284, 584],
  "Keski-Pohjanmaa": [147, 451],
  "Pohjois-Savo": [264, 493],
  "Etelä-Savo": [266, 547],
  "Pohjois-Karjala": [327, 499],
  "Uusimaa": [177, 630],
  "Kainuu": [298, 399],
  "Kymenlaakso": [243, 610],
  "Päijät-Häme": [206, 590],
  "Kanta-Häme": [162, 603],
  "Varsinais-Suomi": [107, 622],
  "Pohjois-Pohjanmaa": [235, 375],
  "Satakunta": [100, 570],
  "Ahvenanmaa": [41, 640],
};

export default function FinlandMap({
  regions,
  officialCounts,
  onRegionClick,
  selectedRegion,
}: {
  regions: RegionData[];
  officialCounts: Record<string, number>;
  onRegionClick?: (region: string) => void;
  selectedRegion?: string | null;
}) {
  const locale = useLocale() as Locale;
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

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
    if (selectedRegion === region.region_fi) return "#1d4ed8"; // blue-700
    const { total, withData } = getRegionStats(region);
    const ratio = withData / total;
    if (ratio === 0) return "#f1f5f9"; // slate-100
    if (ratio < 0.1) return "#dbeafe"; // blue-100
    if (ratio < 0.25) return "#bfdbfe"; // blue-200
    if (ratio < 0.5) return "#93c5fd"; // blue-300
    if (ratio < 0.75) return "#60a5fa"; // blue-400
    return "#3b82f6"; // blue-500
  }

  const regionName = (r: RegionData) => locale === "fi" ? r.region_fi : r.region_en;

  return (
    <div className="relative">
      <svg viewBox="-10 20 410 680" className="w-full max-w-sm mx-auto" role="img" aria-label="Finland regions map">
        {regions.map((region) => {
          const path = REGION_PATHS[region.region_fi];
          if (!path) return null;
          const center = REGION_CENTERS[region.region_fi];
          const stats = getRegionStats(region);
          const isHovered = hoveredRegion === region.region_fi;
          const isSelected = selectedRegion === region.region_fi;

          return (
            <g key={region.region_fi}>
              <path
                d={path}
                fill={getFillColor(region)}
                stroke={isSelected ? "#1e3a8a" : isHovered ? "#475569" : "#94a3b8"}
                strokeWidth={isSelected ? 2 : isHovered ? 1.5 : 0.75}
                className="cursor-pointer transition-colors duration-150"
                onMouseEnter={() => setHoveredRegion(region.region_fi)}
                onMouseLeave={() => setHoveredRegion(null)}
                onClick={() => onRegionClick?.(region.region_fi)}
              />
              {center && (
                <text
                  x={center[0]}
                  y={center[1]}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="pointer-events-none select-none"
                  fontSize={region.region_fi === "Lappi" || region.region_fi === "Pohjois-Pohjanmaa" ? 10 : 7}
                  fontWeight={isHovered || isSelected ? 700 : 500}
                  fill={isSelected ? "#fff" : stats.withData > 0 ? "#1e3a5f" : "#94a3b8"}
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
          <div className="absolute top-2 right-2 rounded-lg border border-border bg-white/95 backdrop-blur-sm px-3 py-2 shadow-md text-xs max-w-[180px]">
            <p className="font-semibold text-civic-900 text-sm">{regionName(region)}</p>
            <div className="mt-1 space-y-0.5 text-muted">
              <p>{stats.total} {locale === "fi" ? "kuntaa" : "municipalities"}</p>
              <p>
                <span className="font-medium text-civic-700">{stats.withData}</span>
                {" "}{locale === "fi" ? "tiedoilla" : "with data"}
              </p>
              {stats.totalOfficials > 0 && (
                <p>
                  <span className="font-medium text-civic-700">{stats.totalOfficials}</span>
                  {" "}{locale === "fi" ? "viranhaltijaa" : "officials"}
                </p>
              )}
            </div>
          </div>
        );
      })()}

      {/* Legend */}
      <div className="flex items-center justify-center gap-2 mt-3 text-[9px] text-muted">
        <span className="flex items-center gap-1"><span className="inline-block w-2.5 h-2.5 rounded-sm bg-slate-100 border border-slate-300"></span>0%</span>
        <span className="flex items-center gap-1"><span className="inline-block w-2.5 h-2.5 rounded-sm bg-blue-200"></span>&lt;25%</span>
        <span className="flex items-center gap-1"><span className="inline-block w-2.5 h-2.5 rounded-sm bg-blue-400"></span>&lt;75%</span>
        <span className="flex items-center gap-1"><span className="inline-block w-2.5 h-2.5 rounded-sm bg-blue-500"></span>100%</span>
      </div>
    </div>
  );
}
