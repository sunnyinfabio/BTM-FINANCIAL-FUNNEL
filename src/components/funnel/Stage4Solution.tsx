'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { RecommendationResult, Capability, CaseStudy } from '@/data/types';
import { getImage } from '@/data/images';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { BtmImageFrame } from '@/components/ui/BtmImageFrame';
import { SolutionDetailsDrawer } from '@/components/modals/SolutionDetailsDrawer';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  Info,
  Layers,
  Sparkles
} from 'lucide-react';

interface Stage4SolutionProps {
  recommendation: RecommendationResult;
  onExploreCapability: (capability: Capability) => void;
  onViewRelatedWork: (capability: Capability) => void;
  onOpenCaseStudy: (caseStudy: CaseStudy) => void;
  onProceedToConnect: () => void;
  onAdjustSelections: () => void;
}

const IMAGE_KEY_MAP: Record<string, string> = {
  'data-analytics': 'dataAnalytics',
  'application-services': 'applicationServices',
  'technology-consulting': 'technologyConsulting',
  'ai-ml': 'aiAutomation',
  'quant-analytics': 'quantAnalytics',
  'fixed-income-equity-analytics': 'financialAnalytics',
  'cloud-computing': 'cloudInfrastructure',
  'valuation-advisory-services': 'valuationAdvisory',
  'structured-finance': 'structuredFinance',
  'specialized-support-team': 'advisory'
};

export function Stage4Solution({
  recommendation,
  onExploreCapability,
  onViewRelatedWork,
  onOpenCaseStudy,
  onProceedToConnect,
  onAdjustSelections
}: Stage4SolutionProps) {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [isWhyDrawerOpen, setIsWhyDrawerOpen] = useState(false);
  const { recommendedCapabilities, relevantCaseStudies } = recommendation;

  const topThree = recommendedCapabilities.slice(0, 3);
  const activeCapability = topThree[hoveredIndex] || topThree[0];
  const activeImage = getImage(IMAGE_KEY_MAP[activeCapability?.id] || 'dataAnalytics');

  // Featured Case Study (Blockchain & AI Enabled Lending Platform)
  const featuredCaseStudy = relevantCaseStudies[0];
  const featuredImage = featuredCaseStudy ? getImage(featuredCaseStudy.imageKey) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center space-y-14"
    >
      {/* Clean, Focused Header */}
      <div className="max-w-3xl mx-auto space-y-3">
        <div className="flex items-center justify-center gap-2">
          <Badge variant="emerald" size="sm" className="font-mono uppercase tracking-wider">
            04 / 05 • Solution Path
          </Badge>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#062039] uppercase">
          Your BTM Solution Path
        </h2>

        {/* Signature BTM Bar Separator */}
        <div className="btm-separator btm-separator-center" />

        <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto">
          Based on your selections, these capabilities may be most relevant to your requirements.
        </p>
      </div>

      {/* ============================================================ */}
      {/* VERTICAL EDITORIAL SOLUTION LIST + DYNAMIC CINEMATIC IMAGE   */}
      {/* ============================================================ */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
        {/* Left 55% Vertical Editorial Solution List */}
        <div className="lg:col-span-7 divide-y divide-slate-200 border-y border-slate-200">
          {topThree.map((cap, idx) => {
            const isHovered = idx === hoveredIndex;

            return (
              <div
                key={cap.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onClick={() => onExploreCapability(cap)}
                className={cn(
                  'group relative py-7 sm:py-9 transition-all duration-300 cursor-pointer select-none',
                  isHovered ? 'pl-4' : 'hover:pl-2'
                )}
              >
                {/* Active Indicator on Left */}
                <div
                  className={cn(
                    'absolute left-0 top-6 bottom-6 w-[3px] transition-all duration-300',
                    isHovered ? 'bg-[#009345]' : 'bg-transparent'
                  )}
                />

                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl sm:text-3xl font-black text-[#009345]">
                        0{idx + 1}
                      </span>
                      <Badge variant="navy" size="sm" className="font-mono text-[10px] uppercase">
                        {cap.category}
                      </Badge>
                    </div>

                    <h3 className="text-xl sm:text-3xl font-black tracking-tight text-[#062039] uppercase group-hover:text-[#009345] transition-colors leading-tight">
                      {cap.name}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {cap.shortDescription}
                    </p>
                  </div>

                  <div className="hidden sm:flex items-center pt-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#009345] group-hover:translate-x-1.5 transition-transform inline-flex items-center gap-1">
                      <span>EXPLORE</span>
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right 45% Dynamic Image Showcase (Morphs on Hover) */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 w-full rounded-2xl overflow-hidden bg-[#062039] shadow-2xl border border-slate-200">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCapability?.id || 'default'}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover filter contrast-115 brightness-95"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#062039]/90 via-[#062039]/30 to-transparent" />

                {/* Subtle Grain Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay"
                  style={{
                    backgroundImage: `radial-gradient(rgba(255,255,255,0.2) 1px, transparent 0)`,
                    backgroundSize: '16px 16px'
                  }}
                />

                {/* Caption Card inside Banner */}
                <div className="absolute bottom-6 left-6 right-6 text-left text-white z-20">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[2px] text-emerald-400 block mb-1">
                    BTM SOLUTION FOCUS 0{hoveredIndex + 1}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black uppercase leading-tight drop-shadow-xs">
                    {activeCapability?.name}
                  </h4>
                  <p className="text-xs text-slate-300 font-normal mt-1 line-clamp-2">
                    {activeCapability?.tagline}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* "EXPLORE WHY THESE FIT →" Trigger (Opens Deep-Dive Drawer) */}
      <div className="flex items-center justify-center pt-2">
        <button
          type="button"
          onClick={() => setIsWhyDrawerOpen(true)}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-slate-700 hover:text-[#009345] bg-slate-100/90 hover:bg-slate-200/80 px-6 py-3.5 rounded-lg border border-slate-200/90 transition-all shadow-2xs hover:shadow-sm cursor-pointer"
        >
          <Info className="h-4 w-4 text-[#009345]" />
          <span>EXPLORE WHY THESE FIT →</span>
        </button>
      </div>

      {/* ============================================================ */}
      {/* REAL BTM CASE STUDY PROOF SECTION (RELEVANT BTM WORK)        */}
      {/* ============================================================ */}
      {featuredCaseStudy && featuredImage && (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-5xl mx-auto text-left pt-6"
        >
          <div
            onClick={() => onOpenCaseStudy(featuredCaseStudy)}
            className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xl hover:border-[#009345] hover:shadow-2xl transition-all duration-350 cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Side: Large Visual Banner (5 Cols) with BtmImageFrame */}
              <div className="lg:col-span-5 relative min-h-[240px] lg:min-h-[320px] bg-[#062039] overflow-hidden">
                <BtmImageFrame
                  src={featuredImage.src}
                  alt={featuredImage.alt}
                  aspectRatio="auto"
                  tag="Verified Case Study"
                  withGrain={true}
                  withVignette={true}
                  className="h-full w-full rounded-none border-0"
                />

                {/* Animated Lending Flow Diagram Overlay */}
                <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center p-4">
                  <svg className="w-full h-full" viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="20" y1="80" x2="260" y2="80" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
                    
                    {/* Node 1: Borrower */}
                    <circle cx="35" cy="80" r="14" fill="#062039" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                    <text x="35" y="83" fill="#cbd5e1" fontSize="6.5" fontFamily="monospace" textAnchor="middle">BORROW</text>

                    {/* Node 2: Platform */}
                    <circle cx="95" cy="80" r="14" fill="#062039" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                    <text x="95" y="83" fill="#cbd5e1" fontSize="6.5" fontFamily="monospace" textAnchor="middle">PLATFORM</text>

                    {/* Node 3: AI / Smart Model */}
                    <circle cx="160" cy="80" r="16" fill="#009345" stroke="#30ad6b" strokeWidth="2" />
                    <text x="160" y="83" fill="#fff" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">AI / DATA</text>

                    {/* Node 4: Stakeholders */}
                    <circle cx="235" cy="80" r="14" fill="#062039" stroke="#38bdf8" strokeWidth="1.5" />
                    <text x="235" y="83" fill="#38bdf8" fontSize="6.5" fontFamily="monospace" textAnchor="middle">STAKEHOLD</text>

                    <text x="20" y="25" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold">TRUST-LESS LENDING FLOW</text>
                  </svg>
                </div>
              </div>

              {/* Right Side: Structured Content (7 Cols) */}
              <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between space-y-5">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-[2.5px] text-[#009345] block">
                    RELEVANT BTM WORK
                  </span>

                  <h3 className="mt-2 text-xl sm:text-3xl font-black text-[#062039] uppercase leading-tight group-hover:text-[#009345] transition-colors">
                    Blockchain & AI Enabled Lending Platform
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    "Create a trust-less lending platform designed to support the lending process with transparency and fairness across stakeholders."
                  </p>

                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {['Application Services', 'Artificial Intelligence', 'Blockchain', 'Data & Analytics'].map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono font-medium text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-[2px] border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-slate-500">
                    Industry: Financial Technology & Lending
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#009345] group-hover:underline">
                    <span>EXPLORE CASE STUDY</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Floating Bottom Sticky Action Bar */}
      <div className="sticky bottom-6 mt-12 z-30 flex items-center justify-between rounded-xl border border-slate-200 bg-white/98 backdrop-blur-md p-4 sm:p-5 shadow-2xl max-w-2xl mx-auto">
        <div className="flex flex-col text-left pl-1">
          <span className="text-xs sm:text-sm font-bold text-[#062039]">Ready to discuss this solution path?</span>
          <span className="text-[11px] text-slate-500 font-mono">Connect with the BTM Financial team</span>
        </div>

        <Button
          variant="emerald"
          size="md"
          onClick={onProceedToConnect}
          rightIcon={<ArrowRight className="h-4 w-4" />}
          className="shrink-0 font-bold px-6"
        >
          Discuss Solution Path
        </Button>
      </div>

      {/* Deep-Dive Drawer with all diagnostic details */}
      <SolutionDetailsDrawer
        isOpen={isWhyDrawerOpen}
        onClose={() => setIsWhyDrawerOpen(false)}
        recommendation={recommendation}
        onOpenCaseStudy={onOpenCaseStudy}
        onProceedToConnect={onProceedToConnect}
      />
    </motion.div>
  );
}
