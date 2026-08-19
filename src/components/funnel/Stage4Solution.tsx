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
  BookOpen
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
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center space-y-10"
    >
      {/* Clean, Focused Header */}
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Badge variant="emerald" size="sm">
            Stage 04 • Personalized Solution
          </Badge>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#062039]">
          Your BTM solution path
        </h2>

        {/* Signature BTM Bar Separator */}
        <div className="btm-separator btm-separator-center" />

        <p className="text-base sm:text-lg text-slate-600 font-normal">
          Based on your selections, these capabilities may be most relevant to your requirements.
        </p>
      </div>

      {/* Top 3 Premium Recommendation Cards (Large Image, Concise Text) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
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

      {/* "Explore why these fit →" Action Link (Opens Deep-Dive Drawer) */}
      <div className="flex items-center justify-center pt-2">
        <button
          type="button"
          onClick={() => setIsWhyDrawerOpen(true)}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#009345] bg-slate-100/90 hover:bg-slate-200/80 px-4 py-2.5 rounded-[4px] border border-slate-200/90 transition-colors shadow-2xs cursor-pointer"
        >
          <Info className="h-3.5 w-3.5 text-[#009345]" />
          <span>Explore why these fit →</span>
        </button>
      </div>

      {/* ============================================================ */}
      {/* 2-COLUMN HERO CASE STUDY PROOF CARD (RELEVANT BTM WORK)      */}
      {/* ============================================================ */}
      {featuredCaseStudy && featuredImage && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="max-w-4xl mx-auto text-left pt-4"
        >
          <div
            onClick={() => onOpenCaseStudy(featuredCaseStudy)}
            className="group relative overflow-hidden rounded-[10px] border border-slate-200/90 bg-white shadow-md hover:border-slate-300 hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              {/* Left Side: Large Visual Banner (5 Cols) with BtmImageFrame */}
              <div className="md:col-span-5 relative min-h-[220px] md:min-h-[260px] bg-[#062039] overflow-hidden">
                <BtmImageFrame
                  src={featuredImage.src}
                  alt={featuredImage.alt}
                  aspectRatio="auto"
                  tag="Precedent"
                  withGrain={true}
                  withVignette={true}
                  className="h-full w-full rounded-none border-0"
                />
              </div>

              {/* Right Side: Structured Content (7 Cols) */}
              <div className="md:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-[2px] text-[#009345] block">
                    REPRESENTATIVE SOLUTION EXAMPLE
                  </span>

                  <h3 className="mt-1.5 text-lg sm:text-xl font-extrabold text-[#062039] leading-snug group-hover:text-[#009345] transition-colors">
                    {featuredCaseStudy.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {featuredCaseStudy.challengeSummary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-[3px]">
                    {featuredCaseStudy.category}
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#009345] group-hover:underline">
                    <span>Explore case study</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Floating Bottom Sticky Action Bar */}
      <div className="sticky bottom-6 mt-12 z-30 flex items-center justify-between rounded-[6px] border border-slate-200 bg-white/98 backdrop-blur-sm p-4 shadow-lg max-w-2xl mx-auto">
        <div className="flex flex-col text-left pl-1">
          <span className="text-xs font-bold text-[#062039]">Ready to discuss this solution path?</span>
          <span className="text-[11px] text-slate-500">Connect with the BTM Financial team</span>
        </div>

        <Button
          variant="emerald"
          size="md"
          onClick={onProceedToConnect}
          rightIcon={<ArrowRight className="h-4 w-4" />}
          className="shrink-0"
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
