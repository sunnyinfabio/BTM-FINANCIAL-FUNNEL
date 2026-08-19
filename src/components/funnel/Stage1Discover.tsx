'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FinancialDataStream } from '@/components/animations/FinancialDataStream';
import { ArrowRight, Compass } from 'lucide-react';

interface Stage1DiscoverProps {
  onStart: () => void;
  onExploreCapabilities: () => void;
}

export function Stage1Discover({ onStart, onExploreCapabilities }: Stage1DiscoverProps) {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-10 lg:py-16">
      {/* Restrained Background Grid */}
      <div className="absolute inset-0 bg-financial-grid opacity-60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Side: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Subtle 01 / 05 Progress Indicator */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#009345] bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-[3px]">
                01 <span className="text-slate-400 font-normal">/</span> 05
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#737373]">
                Solution Discovery Diagnostic
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#062039] leading-[1.12]">
                Turn Complex Challenges Into <span className="text-[#009345]">Smarter Solutions.</span>
              </h1>
              {/* Signature BTM Bar Separator */}
              <div className="btm-separator" />
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#231f20] leading-relaxed max-w-lg font-normal">
              Tell us what you're trying to solve. We'll help you discover the BTM Financial capabilities most relevant to your business.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button
                variant="emerald"
                size="lg"
                onClick={onStart}
                rightIcon={<ArrowRight className="h-4 w-4" />}
                className="shadow-xs"
              >
                Find My Solution
              </Button>

              <button
                type="button"
                onClick={onExploreCapabilities}
                className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[1px] text-slate-700 hover:text-[#009345] py-3 px-4 rounded-[4px] border border-slate-300 bg-white hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
              >
                <Compass className="h-4 w-4 text-[#009345]" />
                <span>Explore BTM capabilities</span>
              </button>
            </div>

            {/* Subtle Trust-Oriented Line */}
            <div className="pt-4 border-t border-slate-200/80">
              <p className="text-xs font-mono font-semibold uppercase tracking-[2px] text-[#737373]">
                Advisory • Analytics • Technology • AI
              </p>
            </div>
          </motion.div>

          {/* Right Side: Sophisticated Financial / Data Visualization Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-6 flex justify-center"
          >
            <FinancialDataStream />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
