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
  Building2,
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
  const { recommendedCapabilities, relevantCaseStudies } = recommendation;

  // The Primary Featured Case Study for the Hero Card
  const featuredCaseStudy = relevantCaseStudies[0];
  const featuredImage = featuredCaseStudy ? getImage(featuredCaseStudy.imageKey) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center space-y-10"
    >
      {/* Clean Header */}
      <div className="max-w-2xl mx-auto">
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

      {/* The 3 Clean Solution Pillars */}
      <div className="space-y-3.5 max-w-3xl mx-auto text-left">
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
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-[#062039] text-white font-mono font-bold text-sm shadow-xs group-hover:bg-[#009345] transition-colors">
                  0{idx + 1}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-extrabold text-[#062039] group-hover:text-[#009345] transition-colors tracking-tight">
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
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={() => setIsWhyDrawerOpen(true)}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#009345] bg-slate-100/90 hover:bg-slate-200/80 px-4 py-2 rounded-[4px] border border-slate-200/90 transition-colors shadow-2xs cursor-pointer"
        >
          <Info className="h-3.5 w-3.5 text-[#009345]" />
          <span>Explore why this path was recommended →</span>
        </button>
      </div>

      {/* ============================================================ */}
      {/* HERO CASE STUDY CARD (RELEVANT BTM WORK)                     */}
      {/* ============================================================ */}
      {featuredCaseStudy && featuredImage && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="max-w-3xl mx-auto text-left"
        >
          <div
            onClick={() => onOpenCaseStudy(featuredCaseStudy)}
            className="group relative overflow-hidden rounded-[10px] border border-slate-200/90 bg-white shadow-md hover:border-slate-300 hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            {/* Header Tag Bar */}
            <div className="px-6 pt-5 pb-3 flex items-center justify-between border-b border-slate-100">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[2px] text-[#009345] flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5 text-[#009345]" />
                RELEVANT BTM WORK
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Representative Precedent
              </span>
            </div>

            {/* Large Case Study Image */}
            <div className="relative h-60 sm:h-72 w-full bg-[#062039] overflow-hidden">
              <Image
                src={featuredImage.src}
                alt={featuredImage.alt}
                fill
                className="object-cover opacity-80 group-hover:scale-103 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 750px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062039] via-[#062039]/30 to-transparent" />

              {/* Title & Category Overlay inside banner */}
              <div className="absolute bottom-5 left-6 right-6">
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider block">
                  {featuredCaseStudy.category} • {featuredCaseStudy.industry}
                </span>
                <h3 className="mt-1 text-xl sm:text-2xl font-extrabold text-white leading-tight">
                  {featuredCaseStudy.title}
                </h3>
              </div>
            </div>

            {/* Case Study Summary & Explore Link */}
            <div className="p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-lg">
                  {featuredCaseStudy.challengeSummary}
                </p>
                <div className="mt-2 flex items-center gap-1.5 flex-wrap">
                  {featuredCaseStudy.deliveredCapabilities.slice(0, 2).map((cap, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded-[2px]"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0">
                <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#009345] group-hover:underline">
                  <span>Explore case study</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

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
