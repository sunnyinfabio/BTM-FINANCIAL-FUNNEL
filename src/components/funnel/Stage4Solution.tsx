'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RecommendationResult, Capability, CaseStudy } from '@/data/types';
import { getImage } from '@/data/images';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SolutionDetailsDrawer } from '@/components/modals/SolutionDetailsDrawer';
import {
  Sparkles,
  ArrowRight,
  Info,
  CheckCircle2,
  Layers,
  ChevronRight
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
  const [isWhyDrawerOpen, setIsWhyDrawerOpen] = useState(false);
  const { recommendedCapabilities } = recommendation;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center"
    >
      {/* Clean Header */}
      <div className="max-w-2xl mx-auto mb-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Badge variant="emerald" size="sm">
            Stage 04 • Calibrated
          </Badge>
          <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
            Optimal Fit
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#062039]">
          Your BTM solution path
        </h2>

        {/* Signature BTM Bar Separator */}
        <div className="btm-separator btm-separator-center" />

        <p className="text-base sm:text-lg text-slate-600 font-normal">
          Based on your selections, these 3 capabilities represent your tailored solution path.
        </p>
      </div>

      {/* The 3 Clean Solution Pillars (Dramatically Cleaner) */}
      <div className="space-y-4 max-w-3xl mx-auto text-left">
        {recommendedCapabilities.slice(0, 3).map((capability, idx) => {
          const imageAsset = getImage(IMAGE_KEY_MAP[capability.id] || 'dataAnalytics');

          return (
            <div
              key={capability.id}
              onClick={() => onExploreCapability(capability)}
              className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-[8px] border border-slate-200/90 bg-white p-5 sm:p-6 shadow-2xs hover:border-[#009345] hover:shadow-xl transition-all duration-200 cursor-pointer overflow-hidden"
            >
              {/* Subtle Ambient Editorial Watermark in Background */}
              <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-300 overflow-hidden">
                <Image
                  src={imageAsset.src}
                  alt=""
                  fill
                  className="object-cover filter grayscale"
                  sizes="300px"
                />
              </div>

              {/* Left Side: Number + Title + Short Explanation */}
              <div className="relative z-10 flex items-start sm:items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] bg-[#062039] text-white font-mono font-bold text-sm shadow-xs group-hover:bg-[#009345] transition-colors">
                  0{idx + 1}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-extrabold text-[#062039] group-hover:text-[#009345] transition-colors tracking-tight">
                      {capability.name}
                    </h3>
                    <Badge variant="gray" size="sm">
                      {capability.category}
                    </Badge>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xl">
                    {capability.shortDescription}
                  </p>
                </div>
              </div>

              {/* Right Side: Clean Explore Trigger */}
              <div className="relative z-10 mt-3 sm:mt-0 flex items-center justify-end w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 shrink-0 sm:ml-4">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#009345] group-hover:translate-x-0.5 transition-transform">
                  <span>Explore</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Explore Why Button / Link (Opens Deep-Dive Drawer) */}
      <div className="mt-6 flex items-center justify-center">
        <button
          type="button"
          onClick={() => setIsWhyDrawerOpen(true)}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#009345] bg-slate-100/90 hover:bg-slate-200/80 px-4 py-2 rounded-[4px] border border-slate-200/90 transition-colors shadow-2xs cursor-pointer"
        >
          <Info className="h-3.5 w-3.5 text-[#009345]" />
          <span>Explore why this path was recommended →</span>
        </button>
      </div>

      {/* Floating Bottom Sticky Action Bar */}
      <div className="sticky bottom-6 mt-12 z-30 flex items-center justify-between rounded-[6px] border border-slate-200 bg-white/98 backdrop-blur-sm p-4 shadow-lg max-w-2xl mx-auto">
        <div className="flex flex-col text-left pl-1">
          <span className="text-xs font-bold text-[#062039]">Ready to discuss this solution path?</span>
          <span className="text-[11px] text-slate-500">Connect with BTM's advisory & engineering leadership</span>
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
