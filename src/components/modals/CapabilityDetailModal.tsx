'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Capability } from '@/data/types';
import { getImage } from '@/data/images';
import { BTM_CASE_STUDIES } from '@/data/caseStudies';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  X,
  CheckCircle2,
  Layers,
  ArrowRight,
  Code,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface CapabilityDetailModalProps {
  capability: Capability | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectCaseStudy?: (caseStudyId: string) => void;
  onConnectAboutCapability?: (capability: Capability) => void;
}

export function CapabilityDetailModal({
  capability,
  isOpen,
  onClose,
  onSelectCaseStudy,
  onConnectAboutCapability
}: CapabilityDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!capability) return null;

  const imageKeyMap: Record<string, string> = {
    'data-analytics': 'dataAnalytics',
    'application-services': 'applicationServices',
    'technology-consulting': 'technologyConsulting',
    'cloud-computing': 'cloudInfrastructure',
    'structured-finance': 'structuredFinance',
    'quant-analytics': 'quantAnalytics',
    'fixed-income-equity-analytics': 'fixedIncomeEquityAnalytics',
    'valuation-advisory-services': 'valuationAdvisory',
    'ai-ml': 'aiAutomation',
    'specialized-support-team': 'specializedSupportTeam'
  };

  const imageAsset = getImage(imageKeyMap[capability.id] || 'dataAnalytics');
  const relatedCaseStudies = capability.relatedCaseStudyIds
    .map((csId) => BTM_CASE_STUDIES.find((item) => item.id === csId))
    .filter(Boolean);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#062039]/70 backdrop-blur-sm transition-opacity"
          />

          {/* Centered Dialog */}
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white text-left shadow-2xl border border-slate-200"
            >
              {/* Header Image & Tagline */}
              <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                <Image
                  src={imageAsset.src}
                  alt={imageAsset.alt}
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062039] via-[#062039]/60 to-transparent" />

                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-4 right-4 rounded-full bg-black/40 backdrop-blur-md p-1.5 text-white hover:bg-black/60 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6">
                  <span className="rounded-full bg-[#009345] px-2.5 py-0.5 text-[11px] font-bold text-white uppercase tracking-wider">
                    {capability.category}
                  </span>
                  <h3 className="mt-1.5 text-2xl font-extrabold tracking-tight text-white">
                    {capability.name}
                  </h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="max-h-[60vh] overflow-y-auto p-6 space-y-6">
                {/* Full Overview */}
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Capability Overview
                  </div>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed font-medium">
                    {capability.fullOverview}
                  </p>
                </div>

                {/* Core Competencies */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#062039] flex items-center gap-1.5">
                    <Layers className="h-4 w-4 text-[#009345]" />
                    Core Competencies & Solutions
                  </div>
                  <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {capability.coreCompetencies.map((comp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 rounded-lg bg-white p-2.5 border border-slate-200 text-xs text-slate-800"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#009345] shrink-0 mt-0.5" />
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Code className="h-3.5 w-3.5" />
                    Key Technology Stack
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {capability.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Related Case Studies */}
                {relatedCaseStudies.length > 0 && (
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#062039] flex items-center gap-1.5">
                      <BookOpen className="h-4 w-4 text-[#009345]" />
                      Related BTM Case Studies
                    </div>
                    <div className="mt-2.5 space-y-2">
                      {relatedCaseStudies.map((cs) =>
                        cs ? (
                          <div
                            key={cs.id}
                            onClick={() => {
                              onClose();
                              if (onSelectCaseStudy) onSelectCaseStudy(cs.id);
                            }}
                            className="rounded-lg border border-slate-200 bg-slate-50/70 p-3 hover:border-[#009345] hover:bg-white transition-all cursor-pointer flex items-center justify-between group"
                          >
                            <div>
                              <div className="text-xs font-bold text-[#062039] group-hover:text-[#009345]">
                                {cs.title}
                              </div>
                              <div className="text-[11px] text-slate-500 mt-0.5">{cs.subtitle}</div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#009345] shrink-0" />
                          </div>
                        ) : null
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 flex items-center justify-between gap-3">
                <Button variant="outline" size="sm" onClick={onClose}>
                  Close
                </Button>

                {onConnectAboutCapability && (
                  <Button
                    variant="emerald"
                    size="sm"
                    onClick={() => {
                      onConnectAboutCapability(capability);
                      onClose();
                    }}
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    Discuss this capability
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
