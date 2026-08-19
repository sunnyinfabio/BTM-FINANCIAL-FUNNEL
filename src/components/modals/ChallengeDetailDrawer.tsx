'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChallengeOption } from '@/data/types';
import { BTM_CAPABILITIES } from '@/data/capabilities';
import { BTM_CASE_STUDIES } from '@/data/caseStudies';
import { getImage } from '@/data/images';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  X,
  AlertCircle,
  CheckCircle2,
  Layers,
  ArrowRight,
  BookOpen,
  Sparkles
} from 'lucide-react';

interface ChallengeDetailDrawerProps {
  challenge: ChallengeOption | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectAndContinue?: (challengeId: string) => void;
  onOpenCaseStudy?: (caseStudyId: string) => void;
}

export function ChallengeDetailDrawer({
  challenge,
  isOpen,
  onClose,
  onSelectAndContinue,
  onOpenCaseStudy
}: ChallengeDetailDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!challenge) return null;

  // Map challenge id to curated image key
  const challengeImageKeyMap: Record<string, string> = {
    'data-analytics': 'dataAnalytics',
    'tech-applications': 'technologyConsulting',
    'ai-automation': 'aiAutomation',
    'financial-analytics': 'quantAnalytics',
    'cloud-infra': 'cloudInfrastructure',
    'advisory-valuation': 'valuationAdvisory',
    'something-else': 'advisory'
  };

  const imageAsset = getImage(challengeImageKeyMap[challenge.id] || 'dataAnalytics');

  const relatedCapabilities = challenge.relatedCapabilityIds
    .map((id) => BTM_CAPABILITIES.find((c) => c.id === id))
    .filter(Boolean);

  const relatedCaseStudies = challenge.caseStudyIds
    .map((id) => BTM_CASE_STUDIES.find((cs) => cs.id === id))
    .filter(Boolean);

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
              {/* Top Banner Image with 16:10 Aspect Ratio */}
              <div className="relative h-44 w-full bg-[#062039] overflow-hidden shrink-0">
                <Image
                  src={imageAsset.src}
                  alt={imageAsset.alt}
                  fill
                  className="object-cover opacity-75"
                  sizes="600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062039] via-[#062039]/50 to-transparent" />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-4 right-4 rounded-full bg-black/40 backdrop-blur-md p-1.5 text-white hover:bg-black/60 transition-colors"
                  aria-label="Close drawer"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6">
                  <Badge variant="emerald" size="sm">
                    {challenge.tag}
                  </Badge>
                  <h3 className="mt-1.5 text-2xl font-extrabold tracking-tight text-white leading-tight">
                    {challenge.title}
                  </h3>
                </div>
              </div>

              {/* Drawer Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                {/* 1. What it means */}
                <div className="rounded-[6px] bg-slate-50 border border-slate-200 p-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#009345]">
                    <Sparkles className="h-3.5 w-3.5 text-[#009345]" />
                    What this capability means
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {challenge.meaning}
                  </p>
                </div>

                {/* 2. Typical Business Problems */}
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#737373] flex items-center gap-1.5">
                    <AlertCircle className="h-3.5 w-3.5 text-amber-600" />
                    Typical Business Problems Addressed
                  </h4>
                  <ul className="mt-2.5 space-y-2">
                    {challenge.typicalProblems.map((prob, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-[4px] border border-slate-200"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                        <span>{prob}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Example Outcomes */}
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#009345] flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#009345]" />
                    Example Institutional Outcomes
                  </h4>
                  <ul className="mt-2.5 space-y-2">
                    {challenge.exampleOutcomes.map((outcome, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-slate-700 bg-emerald-50/40 p-2.5 rounded-[4px] border border-emerald-100 font-medium"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#009345] shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. Related BTM Capabilities */}
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#062039] flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-[#062039]" />
                    Related BTM Capabilities
                  </h4>
                  <div className="mt-2.5 grid grid-cols-1 gap-2">
                    {relatedCapabilities.map((cap) =>
                      cap ? (
                        <div
                          key={cap.id}
                          className="rounded-[4px] border border-slate-200 bg-white p-3 hover:border-slate-300 transition-all text-left"
                        >
                          <div className="text-xs font-bold text-[#062039]">{cap.name}</div>
                          <div className="text-[11px] text-slate-500 mt-0.5">{cap.tagline}</div>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>

                {/* 5. Relevant Case Studies */}
                {relatedCaseStudies.length > 0 && (
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#062039] flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5 text-[#009345]" />
                      Relevant Case Studies
                    </h4>
                    <div className="mt-2.5 space-y-2">
                      {relatedCaseStudies.map((cs) =>
                        cs ? (
                          <div
                            key={cs.id}
                            onClick={() => onOpenCaseStudy && onOpenCaseStudy(cs.id)}
                            className="rounded-[4px] border border-slate-200 bg-slate-50 p-3 hover:border-[#009345] hover:bg-white transition-all cursor-pointer group"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-[#062039] group-hover:text-[#009345]">
                                {cs.title}
                              </span>
                              <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-[#009345]" />
                            </div>
                            <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                              {cs.subtitle}
                            </p>
                          </div>
                        ) : null
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Drawer Footer */}
              <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 flex items-center justify-between gap-3">
                <Button variant="outline" size="sm" onClick={onClose}>
                  Close
                </Button>

                {onSelectAndContinue && (
                  <Button
                    variant="emerald"
                    size="sm"
                    onClick={() => {
                      onSelectAndContinue(challenge.id);
                      onClose();
                    }}
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    Select & Continue
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
