'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { FinancialDataStream } from '@/components/animations/FinancialDataStream';
import { ArrowRight, Compass } from 'lucide-react';

interface Stage1DiscoverProps {
  onStart: () => void;
  onExploreCapabilities: () => void;
}

export function Stage1Discover({ onStart, onExploreCapabilities }: Stage1DiscoverProps) {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 lg:py-20 overflow-hidden">
      {/* Dynamic Ambient Background Depth (Navy & Emerald Depth) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-[#062039]/6 via-[#009345]/8 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-financial-grid opacity-60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side: Massive Editorial Typography & Magnetic CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-7 text-left"
          >
            {/* Subtle 01 / 05 Progress Indicator */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#009345] bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-[3px]">
                01 <span className="text-slate-400 font-normal">/</span> 05
              </span>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[2.5px] text-[#737373]">
                Discovery
              </span>
            </div>

            {/* Massive Editorial Headline (72–88px desktop, 42–52px mobile) */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[76px] xl:text-[84px] font-black tracking-tight text-[#062039] leading-[1.02] uppercase">
                Turn Complex Challenges{' '}
                <span className="text-[#009345] block">Into Smarter Solutions.</span>
              </h1>
              {/* Signature BTM Bar Separator */}
              <div className="btm-separator mt-5" />
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-[#231f20] leading-relaxed font-normal max-w-xl">
              Tell us what you're trying to solve. We'll help you discover the BTM Financial capabilities most relevant to your business.
            </p>

            {/* Magnetic CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="emerald"
                size="lg"
                onClick={onStart}
                rightIcon={<ArrowRight className="h-4 w-4" />}
                className="shadow-md font-bold text-sm sm:text-base px-7 py-4 group"
              >
                EXPLORE YOUR SOLUTION →
              </Button>

              <button
                type="button"
                onClick={onExploreCapabilities}
                className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-[1.5px] text-slate-700 hover:text-[#009345] py-4 px-6 rounded-[6px] border border-slate-300 bg-white hover:bg-slate-50 transition-all shadow-2xs hover:shadow-md cursor-pointer"
              >
                <Compass className="h-4 w-4 text-[#009345]" />
                <span>EXPLORE BTM CAPABILITIES</span>
              </button>
            </div>

            {/* Institutional Foundation Line */}
            <div className="pt-5 border-t border-slate-200/80">
              <p className="text-xs font-mono font-semibold uppercase tracking-[2.5px] text-[#737373]">
                Advisory • Analytics • Technology • AI
              </p>
            </div>
          </motion.div>

          {/* Right Side: Interactive 3D Parallax Financial Intelligence Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center"
          >
            <FinancialDataStream />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
