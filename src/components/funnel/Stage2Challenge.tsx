'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BTM_CHALLENGES } from '@/data/challenges';
import { ChallengeOption } from '@/data/types';
import { getImage } from '@/data/images';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Sparkles,
  BarChart3,
  Code2,
  Cpu,
  TrendingUp,
  Cloud,
  Scale
} from 'lucide-react';

interface Stage2ChallengeProps {
  selectedChallenges: string[];
  onToggleChallenge: (id: string) => void;
  onExploreDetails: (challenge: ChallengeOption) => void;
  onContinue: () => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 className="h-6 w-6" />,
  Code2: <Code2 className="h-6 w-6" />,
  Cpu: <Cpu className="h-6 w-6" />,
  TrendingUp: <TrendingUp className="h-6 w-6" />,
  Cloud: <Cloud className="h-6 w-6" />,
  Scale: <Scale className="h-6 w-6" />,
  Sparkles: <Sparkles className="h-6 w-6" />
};

const IMAGE_KEY_MAP: Record<string, string> = {
  'data-analytics': 'dataAnalytics',
  'tech-applications': 'technologyConsulting',
  'ai-automation': 'aiAutomation',
  'financial-analytics': 'quantAnalytics',
  'cloud-infra': 'cloudInfrastructure',
  'advisory-valuation': 'valuationAdvisory',
  'something-else': 'advisory'
};

export function Stage2Challenge({
  selectedChallenges,
  onToggleChallenge,
  onExploreDetails,
  onContinue
}: Stage2ChallengeProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = BTM_CHALLENGES.length;
  const current = BTM_CHALLENGES[activeIndex];
  const hasSelection = selectedChallenges.length > 0;
  const isSelected = selectedChallenges.includes(current.id);

  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  const prevChallenge = BTM_CHALLENGES[prevIndex];
  const nextChallenge = BTM_CHALLENGES[nextIndex];

  const currentImage = getImage(IMAGE_KEY_MAP[current.id] || 'dataAnalytics');
  const currentIcon = ICON_MAP[current.iconName] || <Sparkles className="h-6 w-6" />;

  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % total);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-28 sm:pb-16 scroll-mt-24">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Badge variant="emerald" size="sm" className="font-mono">
            02 / 05 • Focus
          </Badge>
          <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
            Capability Explorer
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#062039] uppercase">
          What Are You Looking to Improve?
        </h2>

        {/* Signature BTM Bar Separator */}
        <div className="btm-separator btm-separator-center" />

        <p className="text-sm sm:text-base text-slate-600 font-normal max-w-xl mx-auto">
          Explore BTM’s core solution disciplines. Select one or more focus areas to personalize your solution path.
        </p>

        {/* Multi-Select Status & Navigation Pills */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {BTM_CHALLENGES.map((item, idx) => {
            const active = idx === activeIndex;
            const chosen = selectedChallenges.includes(item.id);

            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  'px-3 py-1 rounded-[4px] text-xs font-mono font-bold transition-all cursor-pointer select-none flex items-center gap-1.5 border',
                  active
                    ? 'bg-[#062039] text-white border-[#062039] shadow-xs'
                    : chosen
                    ? 'bg-emerald-50 text-[#009345] border-emerald-300'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                )}
              >
                <span>0{idx + 1}</span>
                <span className="hidden md:inline">{item.title.split(' ')[0]}</span>
                {chosen && <Check className="h-3 w-3 text-[#009345] stroke-[3]" />}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* 50% IMAGE + 50% CONTENT ACTIVE PANEL WITH PEEKING SIDES       */}
      {/* ============================================================ */}
      <div className="relative max-w-6xl mx-auto flex items-center justify-center gap-4 sm:gap-6">
        {/* Left Arrow / Peeking Previous Panel */}
        <div
          onClick={handlePrev}
          className="hidden xl:flex flex-col items-center justify-center w-28 shrink-0 cursor-pointer group opacity-60 hover:opacity-100 transition-opacity select-none"
          title={`Previous: ${prevChallenge.title}`}
        >
          <div className="h-10 w-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 shadow-2xs group-hover:border-[#009345] group-hover:text-[#009345] transition-colors mb-2">
            <ArrowLeft className="h-5 w-5" />
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 group-hover:text-[#062039] text-center line-clamp-1">
            0{prevIndex + 1} {prevChallenge.title.split(' ')[0]}
          </span>
        </div>

        {/* Center Main Active Capability Panel (50% Content + 50% Image) */}
        <div className="w-full max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                'group relative overflow-hidden rounded-2xl border bg-white shadow-xl transition-all duration-300 text-left',
                isSelected
                  ? 'border-[#009345] ring-2 ring-[#009345] shadow-2xl shadow-emerald-950/15'
                  : 'border-slate-200/90 hover:border-[#009345] hover:shadow-2xl'
              )}
            >
              {/* Top Accent Strip */}
              <div
                className={cn(
                  'h-[4px] w-full transition-all duration-300',
                  isSelected ? 'bg-[#009345]' : 'bg-transparent group-hover:bg-[#009345]'
                )}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                {/* 50% Content Brief (6 Cols) */}
                <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6 order-2 lg:order-1">
                  <div className="space-y-4">
                    {/* Index + Tag */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-3xl font-black text-[#009345]">
                          0{activeIndex + 1}
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 border border-slate-200 text-[#062039]">
                          {currentIcon}
                        </div>
                      </div>

                      <Badge variant="navy" size="sm" className="font-mono text-[10px] uppercase">
                        {current.tag}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#062039] uppercase leading-tight">
                      {current.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                      {current.shortDescription}
                    </p>

                    {/* Meaning / Context */}
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed pt-2 border-t border-slate-100">
                      {current.meaning}
                    </p>
                  </div>

                  {/* Panel Action Triggers */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onToggleChallenge(current.id)}
                      className={cn(
                        'inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer select-none border',
                        isSelected
                          ? 'bg-[#009345] text-white border-[#009345] shadow-xs'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-[#009345] hover:text-[#009345]'
                      )}
                    >
                      <Check className={cn('h-4 w-4 stroke-[3]', isSelected ? 'opacity-100' : 'opacity-40')} />
                      <span>{isSelected ? 'SELECTED FOCUS ✓' : 'SELECT THIS FOCUS'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onExploreDetails(current)}
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#009345] hover:text-[#007a38] p-2 transition-all cursor-pointer group-hover:translate-x-1"
                    >
                      <span>EXPLORE DETAILS</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                {/* 50% Cinematic Visual Banner (6 Cols) */}
                <div className="lg:col-span-6 relative min-h-[260px] lg:min-h-[380px] bg-[#062039] overflow-hidden order-1 lg:order-2">
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover filter contrast-120 brightness-95 scale-100 group-hover:scale-106 transition-transform duration-700 ease-out"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062039]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#062039]/50 lg:to-transparent" />

                  {/* Subtle Grain Texture */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay"
                    style={{
                      backgroundImage: `radial-gradient(rgba(255,255,255,0.2) 1px, transparent 0)`,
                      backgroundSize: '16px 16px'
                    }}
                  />

                  {/* Floating Monospace Tag */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-[3px] text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 border border-white/10">
                      DISCIPLINE 0{activeIndex + 1}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow / Peeking Next Panel */}
        <div
          onClick={handleNext}
          className="hidden xl:flex flex-col items-center justify-center w-28 shrink-0 cursor-pointer group opacity-60 hover:opacity-100 transition-opacity select-none"
          title={`Next: ${nextChallenge.title}`}
        >
          <div className="h-10 w-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 shadow-2xs group-hover:border-[#009345] group-hover:text-[#009345] transition-colors mb-2">
            <ArrowRight className="h-5 w-5" />
          </div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 group-hover:text-[#062039] text-center line-clamp-1">
            0{nextIndex + 1} {nextChallenge.title.split(' ')[0]}
          </span>
        </div>
      </div>

      {/* Mobile Arrow Controls */}
      <div className="xl:hidden flex items-center justify-center gap-4 mt-6">
        <button
          type="button"
          onClick={handlePrev}
          className="h-10 w-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 shadow-xs active:bg-slate-100"
          aria-label="Previous capability"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <span className="font-mono text-xs font-bold text-slate-500">
          0{activeIndex + 1} / 0{total}
        </span>
        <button
          type="button"
          onClick={handleNext}
          className="h-10 w-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 shadow-xs active:bg-slate-100"
          aria-label="Next capability"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Compact Mobile & Desktop Fixed Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/98 backdrop-blur-md border-t border-slate-200/90 shadow-2xl px-4 py-3 sm:py-3.5 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="max-w-2xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-700 min-w-0 truncate">
            {hasSelection ? (
              <div className="flex items-center gap-1.5 font-semibold text-slate-900 truncate">
                <CheckCircle2 className="h-4 w-4 text-[#009345] shrink-0" />
                <span className="truncate">
                  <strong className="text-[#009345] font-mono">{selectedChallenges.length}</strong> focus {selectedChallenges.length === 1 ? 'area' : 'areas'} selected
                </span>
              </div>
            ) : (
              <span className="text-slate-500 text-[11px] sm:text-xs truncate font-mono">
                Select a focus area to proceed
              </span>
            )}
          </div>

          <Button
            variant="emerald"
            size="md"
            disabled={!hasSelection}
            onClick={onContinue}
            rightIcon={<ArrowRight className="h-4 w-4 shrink-0" />}
            className="shrink-0 whitespace-nowrap text-xs sm:text-sm px-6 font-bold shadow-xs"
          >
            Continue to Context →
          </Button>
        </div>
      </div>
    </div>
  );
}
