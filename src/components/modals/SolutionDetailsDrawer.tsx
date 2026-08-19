'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { RecommendationResult, Capability, CaseStudy } from '@/data/types';
import { getImage } from '@/data/images';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  X,
  CheckCircle2,
  Layers,
  Building2,
  BookOpen,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Activity,
  Code
} from 'lucide-react';

interface SolutionDetailsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  recommendation: RecommendationResult;
  onOpenCaseStudy: (caseStudy: CaseStudy) => void;
  onProceedToConnect: () => void;
}

export function SolutionDetailsDrawer({
  isOpen,
  onClose,
  recommendation,
  onOpenCaseStudy,
  onProceedToConnect
}: SolutionDetailsDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const { recommendedCapabilities, relevantCaseStudies, matchedInsights } =
    recommendation;

  const featuredCaseStudy = relevantCaseStudies[0];
  const featuredImage = featuredCaseStudy ? getImage(featuredCaseStudy.imageKey) : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#062039]/60 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 flex max-w-full pl-6 sm:pl-16">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="w-screen max-w-xl bg-white shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              {/* Drawer Header */}
              <div className="border-b border-slate-200 bg-slate-50 px-6 py-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge variant="emerald" size="sm">
                      Diagnostic Breakdown
                    </Badge>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                      BTM Recommendation
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full bg-slate-200/80 p-1.5 text-slate-600 hover:bg-slate-300 hover:text-slate-900 transition-colors"
                    aria-label="Close drawer"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <h3 className="mt-2.5 text-2xl font-extrabold tracking-tight text-[#062039]">
                  Why this solution path?
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 font-normal">
                  Detailed alignment between your diagnostic profile, domain precedents, and delivered architectures.
                </p>
              </div>

              {/* Drawer Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                {/* 1. Diagnostic Correlation Insights */}
                {matchedInsights.length > 0 && (
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#009345] flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#009345]" />
                      Alignment Insights
                    </h4>
                    <div className="mt-2.5 space-y-2.5">
                      {matchedInsights.map((insight, idx) => (
                        <div
                          key={idx}
                          className="rounded-[6px] bg-slate-50 border border-slate-200/80 p-3.5"
                        >
                          <div className="text-xs font-bold text-[#062039]">{insight.title}</div>
                          <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                            {insight.detail}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. Recommended Capabilities Deep Dive */}
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#062039] flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-[#009345]" />
                    Pillar Capabilities ({recommendedCapabilities.length})
                  </h4>
                  <div className="mt-2.5 space-y-3">
                    {recommendedCapabilities.map((cap, idx) => (
                      <div
                        key={cap.id}
                        className="rounded-[6px] border border-slate-200 bg-white p-4 shadow-2xs space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono font-bold text-[#009345]">
                            0{idx + 1} • {cap.category}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-[2px] text-slate-600">
                            Core Match
                          </span>
                        </div>
                        <div className="text-sm font-bold text-[#062039]">{cap.name}</div>
                        <p className="text-xs text-slate-600 font-normal leading-relaxed">
                          {cap.shortDescription}
                        </p>
                        <div className="pt-2 border-t border-slate-100">
                          <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-slate-400 block mb-1">
                            Key Value Deliverables
                          </span>
                          <div className="space-y-1">
                            {cap.benefits.map((benefit, bIdx) => (
                              <div
                                key={bIdx}
                                className="flex items-start gap-1.5 text-xs text-slate-700 font-medium"
                              >
                                <CheckCircle2 className="h-3 w-3 text-[#009345] shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Featured Architectural Precedent */}
                {featuredCaseStudy && (
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#062039] flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5 text-[#009345]" />
                      Featured Architectural Precedent
                    </h4>
                    <div
                      onClick={() => {
                        onClose();
                        onOpenCaseStudy(featuredCaseStudy);
                      }}
                      className="mt-2.5 rounded-[6px] border border-slate-200 bg-slate-50 p-4 hover:border-[#009345] hover:bg-white transition-all cursor-pointer group space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <Badge variant="navy" size="sm">
                          {featuredCaseStudy.category}
                        </Badge>
                        <span className="text-[10px] font-mono text-slate-400">
                          Representative Precedent
                        </span>
                      </div>
                      <div className="text-sm font-bold text-[#062039] group-hover:text-[#009345] transition-colors">
                        {featuredCaseStudy.title}
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-2">
                        {featuredCaseStudy.challengeSummary}
                      </p>
                      <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#009345]">
                        <span>View Full Architecture</span>
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Drawer Footer */}
              <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 flex items-center justify-between gap-3">
                <Button variant="outline" size="sm" onClick={onClose}>
                  Close
                </Button>

                <Button
                  variant="emerald"
                  size="sm"
                  onClick={() => {
                    onClose();
                    onProceedToConnect();
                  }}
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Discuss Solution Path
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
