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
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles
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

  const handleIndustrySelect = (id: string) => {
    onSelectIndustry(id);
    setTimeout(() => {
      setInternalStep(2);
    }, 280);
  };

  const handleJourneyStageSelect = (id: string) => {
    onSelectJourneyStage(id);
    setTimeout(() => {
      onSubmit();
    }, 320);
  };

  const canAdvanceStep2 = selectedPriorities.length > 0;

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20 min-h-[580px] flex flex-col justify-center">
      {/* Top Spacious Step Header */}
      <div className="flex items-center justify-between max-w-2xl mx-auto w-full mb-8">
        {internalStep > 1 ? (
          <button
            type="button"
            onClick={() => setInternalStep((prev) => Math.max(1, prev - 1))}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-[#062039] transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Previous Step</span>
          </button>
        ) : (
          <span className="text-xs font-mono text-slate-400">Step 01 of 03</span>
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

        <span className="text-xs font-mono font-bold text-[#009345]">
          0{internalStep} <span className="text-slate-300 font-normal">/</span> 03
        </span>
      </div>

      <AnimatePresence mode="wait">
        {/* ============================================================ */}
        {/* STEP 01: "Who are you building for?" (Cinematic Cards)       */}
        {/* ============================================================ */}
        {internalStep === 1 && (
          <motion.div
            key="step-1"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="space-y-8 text-center max-w-4xl mx-auto"
          >
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[2px] text-[#009345]">
                Target Domain
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#062039] mt-2">
                Who are you building for?
              </h2>
              <div className="btm-separator btm-separator-center" />
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
                Select your institution type to calibrate domain models and regulatory guidelines.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {BTM_INDUSTRIES.map((industry) => {
                const isSelected = selectedIndustry === industry.id;
                const icon = INDUSTRY_ICONS[industry.iconName] || <Building2 className="h-6 w-6" />;

                return (
                  <button
                    key={industry.id}
                    type="button"
                    onClick={() => handleIndustrySelect(industry.id)}
                    className={cn(
                      'group relative flex flex-col items-start justify-between rounded-[8px] border p-6 text-left transition-all duration-200 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-[#009345]',
                      isSelected
                        ? 'border-[#009345] ring-2 ring-[#009345] bg-gradient-to-b from-white to-emerald-50/40 shadow-md scale-[1.02]'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xl hover:-translate-y-1'
                    )}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div
                        className={cn(
                          'flex h-12 w-12 items-center justify-center rounded-[4px] border transition-colors',
                          isSelected
                            ? 'bg-[#009345] text-white border-[#009345]'
                            : 'bg-slate-50 text-[#062039] border-slate-200 group-hover:bg-[#062039] group-hover:text-white'
                        )}
                      >
                        {icon}
                      </div>

                      <div
                        className={cn(
                          'flex h-5 w-5 items-center justify-center rounded-[3px] border transition-all',
                          isSelected
                            ? 'border-[#009345] bg-[#009345] text-white'
                            : 'border-slate-300 bg-white text-transparent'
                        )}
                      >
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4
                        className={cn(
                          'text-base font-extrabold tracking-tight transition-colors leading-tight',
                          isSelected ? 'text-[#062039]' : 'text-[#062039] group-hover:text-[#009345]'
                        )}
                      >
                        {industry.name}
                      </h4>
                      <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed font-normal">
                        {industry.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* ============================================================ */}
        {/* STEP 02: "What matters most right now?" (Priority Chips)    */}
        {/* ============================================================ */}
        {internalStep === 2 && (
          <motion.div
            key="step-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="space-y-8 text-center max-w-4xl mx-auto"
          >
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[2px] text-[#009345]">
                Immediate Focus
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#062039] mt-2">
                What matters most right now?
              </h2>
              <div className="btm-separator btm-separator-center" />
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
                Select your key operational objectives and priorities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 max-w-3xl mx-auto text-left pt-2">
              {BTM_PRIORITIES.map((priority) => {
                const isSelected = selectedPriorities.includes(priority.id);

                return (
                  <button
                    key={priority.id}
                    type="button"
                    onClick={() => onTogglePriority(priority.id)}
                    className={cn(
                      'group relative flex items-center justify-between rounded-[6px] border p-4.5 text-left transition-all duration-150 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-[#009345]',
                      isSelected
                        ? 'border-[#009345] ring-2 ring-[#009345] bg-emerald-50/40 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/80 hover:-translate-y-0.5'
                    )}
                  >
                    <span
                      className={cn(
                        'text-sm font-bold tracking-tight',
                        isSelected ? 'text-[#062039]' : 'text-slate-800'
                      )}
                    >
                      {priority.label}
                    </span>

                    <div
                      className={cn(
                        'flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-[2px] border transition-all ml-2',
                        isSelected
                          ? 'border-[#009345] bg-[#009345] text-white'
                          : 'border-slate-300 bg-white text-transparent'
                      )}
                    >
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 flex justify-center">
              <Button
                variant="emerald"
                size="lg"
                disabled={!canAdvanceStep2}
                onClick={() => setInternalStep(3)}
                rightIcon={<ArrowRight className="h-4 w-4" />}
                className="px-8 shadow-xs"
              >
                Continue to Readiness ({selectedPriorities.length} Selected)
              </Button>
            </div>
          </motion.div>
        )}

        {/* ============================================================ */}
        {/* STEP 03: "Where are you today?" (Readiness Horizon)          */}
        {/* ============================================================ */}
        {internalStep === 3 && (
          <motion.div
            key="step-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="space-y-8 text-center max-w-4xl mx-auto"
          >
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[2px] text-[#009345]">
                Project Horizon
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#062039] mt-2">
                Where are you today?
              </h2>
              <div className="btm-separator btm-separator-center" />
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-normal">
                Select your current execution phase to synthesize your tailored solution path.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto pt-2">
              {BTM_JOURNEY_STAGES.map((stage) => {
                const isSelected = journeyStage === stage.id;

                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => handleJourneyStageSelect(stage.id)}
                    className={cn(
                      'group relative flex flex-col justify-between rounded-[8px] border p-6 text-left transition-all duration-200 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-[#009345]',
                      isSelected
                        ? 'border-[#009345] ring-2 ring-[#009345] bg-gradient-to-b from-white to-emerald-50/40 shadow-md scale-[1.02]'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xl hover:-translate-y-1'
                    )}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-[1.5px] text-[#009345]">
                          Stage Horizon
                        </span>
                        <div
                          className={cn(
                            'flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-all',
                            isSelected
                              ? 'border-[#009345] bg-[#009345] text-white'
                              : 'border-slate-300 bg-white text-transparent'
                          )}
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-white" />
                        </div>
                      </div>

                      <h4 className="mt-4 text-base font-extrabold tracking-tight text-[#062039] group-hover:text-[#009345] transition-colors">
                        {stage.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-slate-500 leading-relaxed font-normal">
                        {stage.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#009345]">
                      <span>Select & Synthesize</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
