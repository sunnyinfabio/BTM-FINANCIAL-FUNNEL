'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RecommendationResult, Capability, CaseStudy } from '@/data/types';
import { getImage } from '@/data/images';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { BtmImageFrame } from '@/components/ui/BtmImageFrame';
import { CapabilityCard } from '@/components/cards/CapabilityCard';
import { SolutionDetailsDrawer } from '@/components/modals/SolutionDetailsDrawer';
import {
  ArrowRight,
  Info,
  BookOpen,
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

export function Stage4Solution({
  recommendation,
  onExploreCapability,
  onViewRelatedWork,
  onOpenCaseStudy,
  onProceedToConnect,
  onAdjustSelections
}: Stage4SolutionProps) {
  const [isWhyDrawerOpen, setIsWhyDrawerOpen] = useState(false);
  const { recommendedCapabilities, relevantCaseStudies } = recommendation;

  // The Primary Featured Case Study for the 2-Column Hero Proof Card
  const featuredCaseStudy = relevantCaseStudies[0];
  const featuredImage = featuredCaseStudy ? getImage(featuredCaseStudy.imageKey) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center space-y-12"
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

      {/* Top 3 Sequential Large Horizontal Editorial Recommendation Panels */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {recommendedCapabilities.slice(0, 3).map((capability, idx) => (
          <CapabilityCard
            key={capability.id}
            capability={capability}
            index={idx}
            onExplore={onExploreCapability}
            onViewRelatedWork={onViewRelatedWork}
          />
        ))}
      </div>

      {/* "EXPLORE WHY THESE FIT →" Action Link (Opens Deep-Dive Drawer) */}
      <div className="flex items-center justify-center pt-2">
        <button
          type="button"
          onClick={() => setIsWhyDrawerOpen(true)}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-slate-700 hover:text-[#009345] bg-slate-100/90 hover:bg-slate-200/80 px-6 py-3 rounded-lg border border-slate-200/90 transition-all shadow-2xs hover:shadow-sm cursor-pointer"
        >
          <Info className="h-4 w-4 text-[#009345]" />
          <span>EXPLORE WHY THESE FIT →</span>
        </button>
      </div>

      {/* ============================================================ */}
      {/* 2-COLUMN HERO CASE STUDY PROOF SECTION (RELEVANT BTM WORK)   */}
      {/* ============================================================ */}
      {featuredCaseStudy && featuredImage && (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-4xl mx-auto text-left pt-4"
        >
          <div
            onClick={() => onOpenCaseStudy(featuredCaseStudy)}
            className="group relative overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-lg hover:border-[#009345] hover:shadow-2xl transition-all duration-350 cursor-pointer"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              {/* Left Side: Large Visual Banner (5 Cols) with BtmImageFrame */}
              <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px] bg-[#062039] overflow-hidden">
                <BtmImageFrame
                  src={featuredImage.src}
                  alt={featuredImage.alt}
                  aspectRatio="auto"
                  tag="Case Precedent"
                  withGrain={true}
                  withVignette={true}
                  className="h-full w-full rounded-none border-0"
                />
              </div>

              {/* Right Side: Structured Content (7 Cols) */}
              <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-[2.5px] text-[#009345] block">
                    RELEVANT BTM WORK
                  </span>

                  <h3 className="mt-1.5 text-lg sm:text-2xl font-black text-[#062039] uppercase leading-snug group-hover:text-[#009345] transition-colors">
                    {featuredCaseStudy.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {featuredCaseStudy.challengeSummary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-[3px]">
                    {featuredCaseStudy.category}
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-[#009345] group-hover:underline">
                    <span>EXPLORE CASE STUDY</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform" />
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
          className="shrink-0 font-bold px-5"
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
