'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RecommendationResult, Capability, CaseStudy } from '@/data/types';
import { CapabilityCard } from '@/components/cards/CapabilityCard';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { getImage } from '@/data/images';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Info,
  CheckCircle2,
  Layers,
  Building2,
  Check
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
  const { recommendedCapabilities, relevantCaseStudies, matchedInsights } =
    recommendation;

  const featuredCaseStudy = relevantCaseStudies[0];
  const featuredImage = featuredCaseStudy ? getImage(featuredCaseStudy.imageKey) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
    >
      {/* Header Section (The WOW Reveal) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Badge variant="emerald" size="sm">
            Stage 04 • Calibrated
          </Badge>
          <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
            Diagnostic Fit
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#062039]">
          Your BTM solution path
        </h2>

        {/* Signature BTM Bar Separator */}
        <div className="btm-separator btm-separator-center" />

        <p className="text-base sm:text-lg font-medium text-[#231f20] leading-relaxed">
          Based on your selections, these capabilities appear relevant to your requirements.
        </p>

        {/* Disclaimer / Guidance Pill */}
        <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100/90 border border-slate-200 px-3 py-1 rounded-[3px]">
          <Info className="h-3.5 w-3.5 text-[#009345] shrink-0" />
          <span>Potentially relevant capabilities • Explore how BTM could help deliver these solutions</span>
        </div>
      </motion.div>

      {/* Synthesis Insight Correlation Ribbon */}
      {matchedInsights.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8 rounded-[8px] border border-slate-200 bg-white p-5 shadow-2xs"
        >
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#009345] mb-3">
            <CheckCircle2 className="h-4 w-4 text-[#009345]" />
            Diagnostic Correlation Insights
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {matchedInsights.map((insight, idx) => (
              <div key={idx} className="bg-slate-50 p-3.5 rounded-[6px] border border-slate-100">
                <div className="text-xs font-bold text-[#062039]">{insight.title}</div>
                <div className="text-xs text-slate-600 mt-1 leading-relaxed">{insight.detail}</div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Top 2-3 Recommendations Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
          <h3 className="text-lg font-bold tracking-tight text-[#062039] flex items-center gap-2">
            <Layers className="h-4.5 w-4.5 text-[#009345]" />
            Recommended BTM Capabilities ({recommendedCapabilities.length})
          </h3>
          <button
            type="button"
            onClick={onAdjustSelections}
            className="text-xs font-bold text-[#009345] hover:underline"
          >
            Adjust Selections
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {recommendedCapabilities.map((capability, idx) => (
            <CapabilityCard
              key={capability.id}
              capability={capability}
              index={idx}
              onExplore={onExploreCapability}
              onViewRelatedWork={onViewRelatedWork}
            />
          ))}
        </motion.div>
      </div>

      {/* One Featured Relevant Case Study Spotlight */}
      {featuredCaseStudy && featuredImage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-12 space-y-4"
        >
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-[#062039] flex items-center gap-2">
                <BookOpen className="h-4.5 w-4.5 text-[#009345]" />
                Featured Architectural Precedent
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Real-world project example representing similar institutional requirements.
              </p>
            </div>
          </div>

          <div
            onClick={() => onOpenCaseStudy(featuredCaseStudy)}
            className="group relative overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-2xs hover:border-slate-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Case Study Visual Banner */}
              <div className="lg:col-span-5 relative h-56 lg:h-auto min-h-[220px] bg-[#062039] overflow-hidden">
                <Image
                  src={featuredImage.src}
                  alt={featuredImage.alt}
                  fill
                  className="object-cover opacity-75 group-hover:scale-103 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#062039] via-[#062039]/40 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="bg-black/50 backdrop-blur-sm border border-white/20 text-white text-[10px] font-mono uppercase px-2 py-0.5 rounded-[2px]">
                    Representative Illustrative Precedent
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-semibold text-slate-200 flex items-center gap-1">
                    <Building2 className="h-3.5 w-3.5" />
                    {featuredCaseStudy.industry}
                  </span>
                  <h4 className="mt-1 text-lg font-extrabold text-white leading-snug">
                    {featuredCaseStudy.title}
                  </h4>
                </div>
              </div>

              {/* Right Case Study Structured Brief */}
              <div className="lg:col-span-7 p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Badge variant="navy" size="sm">
                      {featuredCaseStudy.category}
                    </Badge>
                    <span className="text-xs font-semibold text-slate-600">
                      {featuredCaseStudy.subtitle}
                    </span>
                  </div>

                  {/* Challenge Summary */}
                  <div className="mt-3 rounded-[4px] bg-slate-50 border border-slate-100 p-3">
                    <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#737373] block mb-1">
                      Business Challenge
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-normal">
                      {featuredCaseStudy.challengeSummary}
                    </p>
                  </div>

                  {/* Delivered Capabilities */}
                  <div className="mt-3.5">
                    <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#062039] block mb-1.5">
                      Key Capabilities Delivered
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {featuredCaseStudy.deliveredCapabilities.slice(0, 2).map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#009345] shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Tech Stack & Trigger */}
                <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-1 flex-wrap">
                    {featuredCaseStudy.technologiesUsed.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded-[2px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-bold text-[#009345] group-hover:underline flex items-center gap-1 shrink-0">
                    Explore full case study <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Bottom Sticky Action Bar */}
      <div className="sticky bottom-6 mt-12 z-30 flex items-center justify-between rounded-[6px] border border-slate-200 bg-white/98 backdrop-blur-sm p-4 shadow-lg max-w-2xl mx-auto">
        <div className="flex flex-col pl-1">
          <span className="text-xs font-bold text-[#062039]">Ready to discuss this solution path?</span>
          <span className="text-[11px] text-slate-500">Connect directly with BTM's advisory & engineering leadership</span>
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
    </motion.div>
  );
}
