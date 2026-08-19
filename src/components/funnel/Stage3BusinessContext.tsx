'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BTM_INDUSTRIES, BTM_PRIORITIES, BTM_JOURNEY_STAGES } from '@/data/industries';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import {
  Check,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Layers,
  UserCheck
} from 'lucide-react';

interface Stage3BusinessContextProps {
  selectedIndustry: string | null;
  selectedPriorities: string[];
  journeyStage: string | null;
  onSelectIndustry: (id: string) => void;
  onTogglePriority: (id: string) => void;
  onSelectJourneyStage: (id: string) => void;
  onSubmit: () => void;
}

export function Stage3BusinessContext({
  selectedIndustry,
  selectedPriorities,
  journeyStage,
  onSelectIndustry,
  onTogglePriority,
  onSelectJourneyStage,
  onSubmit
}: Stage3BusinessContextProps) {
  const [internalStep, setInternalStep] = useState<number>(1);
  const [animatingId, setAnimatingId] = useState<string | null>(null);

  const selectedIndustryObj = BTM_INDUSTRIES.find((i) => i.id === selectedIndustry);
  const selectedJourneyObj = BTM_JOURNEY_STAGES.find((j) => j.id === journeyStage);

  const handleIndustrySelect = (id: string) => {
    setAnimatingId(id);
    onSelectIndustry(id);
    setTimeout(() => {
      setAnimatingId(null);
      setInternalStep(2);
    }, 450);
  };

  const handleJourneyStageSelect = (id: string) => {
    setAnimatingId(id);
    onSelectJourneyStage(id);
    setTimeout(() => {
      setAnimatingId(null);
      onSubmit();
    }, 500);
  };

  return (
    <div className="relative min-h-[85vh] flex flex-col justify-center mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 scroll-mt-24">
      {/* Top Header & "Your Profile" Dynamic Selection Pills Area */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto mb-8 sm:mb-12 w-full">
        {/* Left: Back Action or Question Count */}
        <div className="flex items-center gap-3">
          {internalStep > 1 ? (
            <button
              type="button"
              onClick={() => setInternalStep((prev) => Math.max(1, prev - 1))}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-600 hover:text-[#009345] transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Previous Question</span>
            </button>
          ) : (
            <span className="text-xs font-mono font-bold text-slate-400 tracking-wider uppercase">
              Step 01 / 03
            </span>
          )}
        </div>

        {/* Center: "Your Profile" Dynamic Selection Pill Area (Grows as choices are made) */}
        <div className="flex items-center gap-2">
          {selectedIndustryObj && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: -5 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className="inline-flex items-center gap-1.5 bg-[#062039] text-white px-3 py-1 rounded-full text-xs font-mono font-bold shadow-xs border border-emerald-500/40"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#009345]" />
              <span>{selectedIndustryObj.name}</span>
            </motion.div>
          )}

          {selectedPriorities.length > 0 && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: -5 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className="inline-flex items-center gap-1.5 bg-emerald-50 text-[#009345] px-3 py-1 rounded-full text-xs font-mono font-bold border border-emerald-300"
            >
              <span>{selectedPriorities.length} {selectedPriorities.length === 1 ? 'Priority' : 'Priorities'}</span>
            </motion.div>
          )}
        </div>

        {/* Right: Stage Badge */}
        <span className="font-mono text-xs font-bold text-[#009345] bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-[3px]">
          03 <span className="text-slate-400 font-normal">/</span> 05
        </span>
      </div>

      <AnimatePresence mode="wait">
        {/* ============================================================ */}
        {/* STEP 01: "WHO ARE WE BUILDING FOR?" (Giant Typography Lines)  */}
        {/* ============================================================ */}
        {internalStep === 1 && (
          <motion.div
            key="step-1"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10 text-center max-w-3xl mx-auto w-full"
          >
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[3px] text-[#009345] block">
                Target Domain
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#062039] uppercase mt-2 leading-[1.05]">
                Who Are We Building For?
              </h2>
              <div className="btm-separator btm-separator-center" />
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
                Select the option that best describes your organization.
              </p>
            </div>

            {/* Giant Typographic Options with Expanding Lines */}
            <div className="divide-y divide-slate-200 text-left pt-2">
              {BTM_INDUSTRIES.map((industry) => {
                const isSelected = selectedIndustry === industry.id;
                const isJustClicked = animatingId === industry.id;

                return (
                  <div
                    key={industry.id}
                    onClick={() => handleIndustrySelect(industry.id)}
                    className={cn(
                      'group relative py-6 sm:py-7 flex items-center justify-between transition-all duration-300 cursor-pointer select-none',
                      isSelected || isJustClicked
                        ? 'text-[#009345] pl-4'
                        : 'text-[#062039] hover:text-[#009345] hover:pl-3'
                    )}
                  >
                    {/* Giant Typographic Label */}
                    <span className="text-xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight transition-all duration-300">
                      {industry.name}
                    </span>

                    {/* Right Check / Fly Indicator */}
                    <div className="flex items-center gap-3">
                      {isSelected || isJustClicked ? (
                        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#009345] bg-emerald-50 px-3 py-1 rounded-[3px] border border-emerald-300 animate-in fade-in">
                          <Check className="h-4 w-4 stroke-[3]" />
                          <span>SELECTED ✓</span>
                        </div>
                      ) : (
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 group-hover:text-[#009345] transition-colors">
                          SELECT →
                        </span>
                      )}
                    </div>

                    {/* Animated Green Bottom Indicator on Hover */}
                    <div
                      className={cn(
                        'absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300',
                        isSelected || isJustClicked
                          ? 'bg-[#009345] opacity-100'
                          : 'bg-transparent group-hover:bg-[#009345]/50'
                      )}
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* ============================================================ */}
        {/* STEP 02: "WHAT'S HOLDING YOU BACK?" (Giant Typography Lines)  */}
        {/* ============================================================ */}
        {internalStep === 2 && (
          <motion.div
            key="step-2"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10 text-center max-w-3xl mx-auto w-full"
          >
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[3px] text-[#009345] block">
                Operational Priorities
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#062039] uppercase mt-2 leading-[1.05]">
                What's Holding You Back?
              </h2>
              <div className="btm-separator btm-separator-center" />
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
                Choose the operational or technical challenges you are looking to address.
              </p>

              <div className="mt-2 text-xs font-mono font-bold text-slate-500">
                <span className="text-[#009345]">{selectedPriorities.length}</span> PRIORITIES SELECTED
              </div>
            </div>

            {/* Giant Typographic Priority Rows */}
            <div className="divide-y divide-slate-200 text-left pt-2">
              {BTM_PRIORITIES.map((priority) => {
                const isSelected = selectedPriorities.includes(priority.id);

                return (
                  <div
                    key={priority.id}
                    onClick={() => onTogglePriority(priority.id)}
                    className={cn(
                      'group relative py-5 sm:py-6 flex items-center justify-between transition-all duration-200 cursor-pointer select-none',
                      isSelected
                        ? 'text-[#009345] font-black pl-3'
                        : 'text-[#062039] hover:text-[#009345] hover:pl-2'
                    )}
                  >
                    <span className="text-lg sm:text-2xl lg:text-3xl font-black uppercase tracking-tight transition-colors">
                      {priority.label}
                    </span>

                    <div
                      className={cn(
                        'flex h-6 w-6 shrink-0 items-center justify-center rounded-[3px] border transition-all duration-200 ml-2',
                        isSelected
                          ? 'border-[#009345] bg-[#009345] text-white shadow-2xs'
                          : 'border-slate-300 bg-white text-transparent group-hover:border-slate-400'
                      )}
                    >
                      <Check className="h-4 w-4 stroke-[3]" />
                    </div>

                    <div
                      className={cn(
                        'absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-200',
                        isSelected ? 'bg-[#009345]' : 'bg-transparent group-hover:bg-[#009345]/30'
                      )}
                    />
                  </div>
                );
              })}
            </div>

            <div className="pt-6 flex justify-center">
              <Button
                variant="emerald"
                size="lg"
                onClick={() => setInternalStep(3)}
                rightIcon={<ArrowRight className="h-4 w-4" />}
                className="shadow-md font-bold px-9 py-4"
              >
                NEXT: IMPLEMENTATION HORIZON →
              </Button>
            </div>
          </motion.div>
        )}

        {/* ============================================================ */}
        {/* STEP 03: "WHERE ARE YOU TODAY?" (Giant Typography Lines)     */}
        {/* ============================================================ */}
        {internalStep === 3 && (
          <motion.div
            key="step-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10 text-center max-w-3xl mx-auto w-full"
          >
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[3px] text-[#009345] block">
                Readiness Horizon
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#062039] uppercase mt-2 leading-[1.05]">
                Where Are You Today?
              </h2>
              <div className="btm-separator btm-separator-center" />
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
                Select your current project stage to tailor capability fit.
              </p>
            </div>

            {/* Giant Typographic Readiness Rows */}
            <div className="divide-y divide-slate-200 text-left pt-2">
              {BTM_JOURNEY_STAGES.map((stage, idx) => {
                const isSelected = journeyStage === stage.id;
                const isJustClicked = animatingId === stage.id;

                return (
                  <div
                    key={stage.id}
                    onClick={() => handleJourneyStageSelect(stage.id)}
                    className={cn(
                      'group relative py-6 sm:py-7 flex items-start sm:items-center justify-between transition-all duration-300 cursor-pointer select-none',
                      isSelected || isJustClicked
                        ? 'text-[#009345] font-black pl-4'
                        : 'text-[#062039] hover:text-[#009345] hover:pl-3'
                    )}
                  >
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#009345] uppercase tracking-wider block mb-1">
                        Phase 0{idx + 1}
                      </span>
                      <h3 className="text-xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight">
                        {stage.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
                        {stage.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mt-2 sm:mt-0">
                      {isSelected || isJustClicked ? (
                        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#009345] bg-emerald-50 px-3 py-1 rounded-[3px] border border-emerald-300">
                          <Check className="h-4 w-4 stroke-[3]" />
                          <span>SELECTED ✓</span>
                        </div>
                      ) : (
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 group-hover:text-[#009345]">
                          SELECT →
                        </span>
                      )}
                    </div>

                    <div
                      className={cn(
                        'absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300',
                        isSelected || isJustClicked
                          ? 'bg-[#009345]'
                          : 'bg-transparent group-hover:bg-[#009345]/50'
                      )}
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
