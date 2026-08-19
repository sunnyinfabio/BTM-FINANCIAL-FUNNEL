'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { CaseStudy } from '@/data/types';
import { getImage } from '@/data/images';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  X,
  Building2,
  Layers,
  CheckCircle2,
  ArrowRight,
  Code
} from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
  onConnectAboutThis?: (caseStudy: CaseStudy) => void;
}

export function CaseStudyModal({
  caseStudy,
  isOpen,
  onClose,
  onConnectAboutThis
}: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!caseStudy) return null;

  const imageAsset = getImage(caseStudy.imageKey);

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

          {/* Centered Modal Container */}
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-[8px] bg-white text-left shadow-2xl border border-slate-200"
            >
              {/* Modal Banner Header */}
              <div className="relative h-48 w-full bg-[#062039] overflow-hidden">
                <Image
                  src={imageAsset.src}
                  alt={imageAsset.alt}
                  fill
                  className="object-cover opacity-60"
                  sizes="700px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062039] via-[#062039]/60 to-transparent" />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-4 right-4 rounded-full bg-black/40 backdrop-blur-md p-1.5 text-white hover:bg-black/60 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Illustrative Precedent Tag */}
                <div className="absolute top-4 left-6">
                  <span className="bg-black/50 backdrop-blur-sm border border-white/20 text-white text-[10px] font-mono uppercase px-2 py-0.5 rounded-[2px]">
                    Representative Illustrative Precedent
                  </span>
                </div>

                {/* Header Tag and Title */}
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="emerald" size="sm">
                      {caseStudy.category}
                    </Badge>
                    <span className="text-xs font-semibold text-slate-200 flex items-center gap-1">
                      <Building2 className="h-3.5 w-3.5" />
                      {caseStudy.industry}
                    </span>
                  </div>
                  <h3 className="mt-1.5 text-xl sm:text-2xl font-extrabold tracking-tight text-white leading-snug">
                    {caseStudy.title}
                  </h3>
                </div>
              </div>

              {/* Scrollable Modal Content */}
              <div className="max-h-[60vh] overflow-y-auto p-6 space-y-5">
                {/* 1. Context & Challenge */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#737373]">
                    Business Challenge & Problem Context
                  </div>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-[4px] border border-slate-100 font-normal">
                    {caseStudy.challengeSummary}
                  </p>
                </div>

                {/* 2. Solution Architecture */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#062039] flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-[#009345]" />
                    Solution Architecture & Implementation
                  </div>
                  <ul className="mt-2 space-y-2">
                    {caseStudy.solutionArchitecture.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-white p-2.5 rounded-[4px] border border-slate-200/80"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[2px] bg-[#062039] text-white font-bold text-[10px]">
                          {idx + 1}
                        </span>
                        <span className="font-normal">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Delivered Capabilities */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#009345] flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#009345]" />
                    Delivered Capabilities
                  </div>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {caseStudy.deliveredCapabilities.map((cap, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 rounded-[4px] bg-emerald-50/50 border border-emerald-100 p-2.5 text-xs text-slate-800 font-medium"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#009345] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Technologies & Tools */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#737373] flex items-center gap-1.5">
                    <Code className="h-3.5 w-3.5" />
                    Technologies & Frameworks
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {caseStudy.technologiesUsed.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-[2px] border border-slate-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Actions Footer */}
              <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 flex items-center justify-between gap-3">
                <Button variant="outline" size="sm" onClick={onClose}>
                  Back to Funnel
                </Button>

                {onConnectAboutThis && (
                  <Button
                    variant="emerald"
                    size="sm"
                    onClick={() => {
                      onConnectAboutThis(caseStudy);
                      onClose();
                    }}
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    Discuss similar requirements
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
