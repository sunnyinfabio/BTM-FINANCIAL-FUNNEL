'use client';

import React from 'react';
import Image from 'next/image';
import { getImage } from '@/data/images';

export function FinancialDataStream() {
  const heroImage = getImage('heroFinancialAnalytics');

  return (
    <div className="relative w-full max-w-xl lg:max-w-2xl mx-auto select-none">
      {/* Soft Ambient Elevation Glow */}
      <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#062039]/15 via-[#009345]/10 to-transparent blur-xl pointer-events-none" />

      {/* Pure High-End Visual Artwork (Zero Dashboard Clutter / No Labels) */}
      <div className="relative rounded-xl border border-slate-200/90 bg-[#062039] overflow-hidden shadow-2xl">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover filter contrast-105 brightness-95 transition-transform duration-700 hover:scale-102"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
            priority
          />
          {/* Subtle Clean Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#062039]/50 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
