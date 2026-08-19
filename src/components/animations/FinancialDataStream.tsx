'use client';

import React from 'react';
import { getImage } from '@/data/images';
import { BtmImageFrame } from '@/components/ui/BtmImageFrame';

export function FinancialDataStream() {
  const heroImage = getImage('heroFinancialAnalytics');

  return (
    <div className="relative w-full max-w-xl lg:max-w-2xl mx-auto select-none">
      {/* Soft Ambient Elevation Glow */}
      <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#062039]/15 via-[#009345]/10 to-transparent blur-xl pointer-events-none" />

      {/* Pure High-End Visual Artwork with Unified BTM Tone Grade */}
      <BtmImageFrame
        src={heroImage.src}
        alt={heroImage.alt}
        aspectRatio="16/10"
        priority={true}
        withGrain={true}
        withVignette={true}
        className="shadow-2xl rounded-xl border-slate-200/90"
      />
    </div>
  );
}
