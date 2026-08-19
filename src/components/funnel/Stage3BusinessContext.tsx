'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BTM_INDUSTRIES, BTM_PRIORITIES, BTM_JOURNEY_STAGES } from '@/data/industries';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import {
  Building2,
  TrendingUp,
  Landmark,
  LineChart,
  ShieldCheck,
  Briefcase,
  Coins,
  Globe,
  Check,
  ArrowRight,
  ArrowLeft
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

const INDUSTRY_ICONS: Record<string, React.ReactNode> = {
  Building2: <Building2 className="h-6 w-6" />,
  TrendingUp: <TrendingUp className="h-6 w-6" />,
  Landmark: <Landmark className="h-6 w-6" />,
  LineChart: <LineChart className="h-6 w-6" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6" />,
  Briefcase: <Briefcase className="h-6 w-6" />,
  Coins: <Coins className="h-6 w-6" />,
  Globe: <Globe className="h-6 w-6" />
};

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

  const handleIndustrySelect = (id: string) => {
    setAnimatingId(id);
    onSelectIndustry(id);
    setTimeout(() => {
      setAnimatingId(null);
      setInternalStep(2);
    }, 480);
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
    <div className="min-h-[75vh] flex flex-col justify-center mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 scroll-mt-24">
      {/* Top Stepper Indicator */}
      <div className="flex items-center justify-between max-w-2xl mx-auto mb-8 sm:mb-12 w-full">
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
          <div />
        )}

        <div className="flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                s === internalStep
                  ? 'w-8 bg-[#009345]'
                  : s < internalStep
                  ? 'w-3 bg-[#062039]'
                  : 'w-2 bg-slate-200'
              )}
            />
          ))}
        </div>

        <span className="font-mono text-xs font-bold text-[#009345] bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-[3px]">
          03 <span className="text-slate-400 font-normal">/</span> 05
        </span>
      </div>

      <AnimatePresence mode="wait">
        {/* ============================================================ */}
        {/* STEP 01: "WHO ARE WE BUILDING FOR?" (Typographic Choices)    */}
        {/* ============================================================ */}
        {internalStep === 1 && (
          <motion.div
            key="step-1"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 text-center max-w-4xl mx-auto w-full"
          >
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[2.5px] text-[#009345]">
                Domain Alignment
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#062039] uppercase mt-2">
                Who are we building for?
              </h2>
              <div className="btm-separator btm-separator-center" />
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
                Select the option that best describes your organization so we can tailor the recommendations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {BTM_INDUSTRIES.map((industry) => {
                const isSelected = selectedIndustry === industry.id;
                const isJustClicked = animatingId === industry.id;
                const icon = INDUSTRY_ICONS[industry.iconName] || <Building2 className="h-6 w-6" />;

                return (
                  <div
                    key={industry.id}
                    onClick={() => handleIndustrySelect(industry.id)}
                    className={cn(
                      'group relative flex flex-col items-center justify-center p-6 sm:p-7 rounded-xl border text-center transition-all duration-350 cursor-pointer select-none',
                      isSelected || isJustClicked
                        ? 'border-[#009345] ring-2 ring-[#009345] bg-gradient-to-b from-white via-white to-emerald-50/50 shadow-2xl shadow-emerald-950/10 scale-[1.03] z-10'
                        : 'border-slate-200 bg-white hover:border-[#009345] hover:shadow-xl hover:-translate-y-1'
                    )}
                  >
                    <div
                      className={cn(
                        'flex h-12 w-12 items-center justify-center rounded-lg border transition-all duration-300 mb-3.5',
                        isSelected || isJustClicked
                          ? 'bg-[#009345] text-white border-[#009345] scale-110'
                          : 'bg-slate-50 text-[#062039] border-slate-200 group-hover:bg-[#062039] group-hover:text-white'
                      )}
                    >
                      {icon}
                    </div>

                    <h3 className="text-sm sm:text-base font-black text-[#062039] group-hover:text-[#009345] transition-colors uppercase leading-snug">
                      {industry.name}
                    </h3>

                    {/* Active Selected Confirmation Pulse */}
                    <div className="mt-3 flex items-center gap-1">
                      {isSelected || isJustClicked ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#009345] animate-in fade-in">
                          <Check className="h-3.5 w-3.5 stroke-[3]" />
                          <span>SELECTED</span>
                        </span>
                      ) : (
                        <span className="text-[11px] font-mono font-semibold text-slate-400 group-hover:text-[#009345] transition-colors">
                          SELECT →
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* ============================================================ */}
        {/* STEP 02: "WHAT'S HOLDING YOU BACK?" (Staggered Options)      */}
        {/* ============================================================ */}
        {internalStep === 2 && (
          <motion.div
            key="step-2"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 text-center max-w-4xl mx-auto w-full"
          >
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[2.5px] text-[#009345]">
                Operational Priorities
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#062039] uppercase mt-2">
                What's holding you back?
              </h2>
              <div className="btm-separator btm-separator-center" />
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
                Choose the primary operational, reporting, or technical challenges you are looking to address.
              </p>

              <div className="mt-2 text-xs font-mono font-bold text-slate-500">
                <span className="text-[#009345]">{selectedPriorities.length}</span> PRIORITIES SELECTED
              </div>
            </div>

            {/* Interactive Staggered Priority Chips Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-3">
              {BTM_PRIORITIES.map((priority) => {
                const isSelected = selectedPriorities.includes(priority.id);

                return (
                  <div
                    key={priority.id}
                    onClick={() => onTogglePriority(priority.id)}
                    className={cn(
                      'group relative flex items-center justify-between p-4 sm:p-5 rounded-xl border text-left transition-all duration-200 cursor-pointer select-none',
                      isSelected
                        ? 'border-[#009345] ring-2 ring-[#009345] bg-gradient-to-r from-white to-emerald-50/50 shadow-md font-bold'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                    )}
                  >
                    <span
                      className={cn(
                        'text-xs sm:text-sm font-semibold transition-colors',
                        isSelected ? 'text-[#062039] font-bold' : 'text-slate-700 group-hover:text-[#062039]'
                      )}
                    >
                      {priority.label}
                    </span>

                    <div
                      className={cn(
                        'flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] border transition-all duration-200 ml-2',
                        isSelected
                          ? 'border-[#009345] bg-[#009345] text-white shadow-2xs'
                          : 'border-slate-300 bg-white text-transparent group-hover:border-slate-400'
                      )}
                    >
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
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
                className="shadow-md font-bold px-9 py-3.5"
              >
                NEXT: IMPLEMENTATION STAGE →
              </Button>
            </div>
          </motion.div>
        )}

        {/* ============================================================ */}
        {/* STEP 03: "WHERE ARE YOU TODAY?" (Readiness Horizon)          */}
        {/* ============================================================ */}
        {internalStep === 3 && (
          <motion.div
            key="step-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 text-center max-w-4xl mx-auto w-full"
          >
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[2.5px] text-[#009345]">
                Readiness Horizon
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#062039] uppercase mt-2">
                Where are you today?
              </h2>
              <div className="btm-separator btm-separator-center" />
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
                Select your current project stage to tailor capability fit and deployment models.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-3">
              {BTM_JOURNEY_STAGES.map((stage, idx) => {
                const isSelected = journeyStage === stage.id;
                const isJustClicked = animatingId === stage.id;

                return (
                  <div
                    key={stage.id}
                    onClick={() => handleJourneyStageSelect(stage.id)}
                    className={cn(
                      'group relative flex flex-col justify-between p-6 sm:p-7 rounded-xl border text-left transition-all duration-350 cursor-pointer select-none',
                      isSelected || isJustClicked
                        ? 'border-[#009345] ring-2 ring-[#009345] bg-gradient-to-b from-white via-white to-emerald-50/50 shadow-2xl shadow-emerald-950/10 scale-[1.02] z-10'
                        : 'border-slate-200 bg-white hover:border-[#009345] hover:shadow-xl hover:-translate-y-1'
                    )}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono font-bold text-[#009345] uppercase tracking-wider">
                          Stage 0{idx + 1}
                        </span>
                        <div
                          className={cn(
                            'h-4 w-4 rounded-full border flex items-center justify-center transition-colors',
                            isSelected || isJustClicked
                              ? 'border-[#009345] bg-[#009345] text-white'
                              : 'border-slate-300'
                          )}
                        >
                          {(isSelected || isJustClicked) && <Check className="h-2.5 w-2.5 stroke-[3]" />}
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg font-black text-[#062039] group-hover:text-[#009345] transition-colors uppercase">
                        {stage.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {stage.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-slate-500">
                      <span>SELECT HORIZON</span>
                      <ArrowRight className="h-3.5 w-3.5 text-[#009345] group-hover:translate-x-1 transition-transform" />
                    </div>
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
