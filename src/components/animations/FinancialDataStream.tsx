'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getImage } from '@/data/images';

export function FinancialDataStream() {
  const heroImage = getImage('heroFinancialAnalytics');

  return (
    <div className="relative w-full max-w-xl lg:max-w-2xl mx-auto select-none">
      {/* Subtle Elevation Shadow */}
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#062039]/12 via-[#009345]/8 to-transparent blur-xl pointer-events-none" />

      {/* Main High-End Visual Frame (Pure Financial & Technology Visualization) */}
      <div className="relative rounded-xl border border-slate-200/90 bg-[#062039] overflow-hidden shadow-2xl">
        {/* High-Resolution Cinematic Financial Analytics Visualization */}
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover filter contrast-105 brightness-95 transition-transform duration-700 hover:scale-102"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
            priority
          />
          {/* Subtle Institutional Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#062039]/80 via-transparent to-[#062039]/20" />

          {/* Clean Understated Caption Bar */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
            <span className="text-[11px] font-mono tracking-wider text-white/90 uppercase font-semibold drop-shadow-sm">
              Financial Intelligence & Quantitative Modeling
            </span>
            <span className="text-[10px] font-mono tracking-widest text-emerald-400 bg-[#062039]/80 border border-emerald-500/30 px-2 py-0.5 rounded-[2px] backdrop-blur-xs">
              BTM.ANALYTICS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
