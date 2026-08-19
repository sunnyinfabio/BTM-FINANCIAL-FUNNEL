'use client';

import React from 'react';
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
  Sparkles,
  ArrowRight,
  Compass,
  Layers,
  ChevronDown
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
  Building2: <Building2 className="h-5 w-5" />,
  TrendingUp: <TrendingUp className="h-5 w-5" />,
  Landmark: <Landmark className="h-5 w-5" />,
  LineChart: <LineChart className="h-5 w-5" />,
  ShieldCheck: <ShieldCheck className="h-5 w-5" />,
  Briefcase: <Briefcase className="h-5 w-5" />,
  Coins: <Coins className="h-5 w-5" />,
  Globe: <Globe className="h-5 w-5" />
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
  const canProceed = !!selectedIndustry || selectedPriorities.length > 0;

  // Progressive disclosure: Question 2 is unlocked when an industry is selected,
  // Question 3 is unlocked when at least 1 priority is chosen.
  // If user navigates backward, existing selections keep questions open.
  const isQuestion2Unlocked = !!selectedIndustry || selectedPriorities.length > 0;
  const isQuestion3Unlocked = isQuestion2Unlocked && (selectedPriorities.length > 0 || !!journeyStage);

  const selectedIndustryName = BTM_INDUSTRIES.find((i) => i.id === selectedIndustry)?.name;

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-center max-w-2xl mx-auto mb-8"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Badge variant="emerald" size="sm">
            Stage 03
          </Badge>
          <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
            Business Profile Builder
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#062039]">
          Tell us a little about your business.
        </h2>

        {/* Signature BTM Bar Separator */}
        <div className="btm-separator btm-separator-center" />

        <p className="text-sm sm:text-base text-slate-600 font-normal">
          Help us calibrate BTM’s tailored capability recommendations and domain precedents for your organization.
        </p>

        {/* Active Profile Summary Pill */}
        {(selectedIndustryName || selectedPriorities.length > 0 || journeyStage) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 rounded-[4px] bg-slate-100/90 border border-slate-200/80 px-3 py-1.5 text-xs text-slate-700 font-medium"
          >
            {selectedIndustryName && (
              <span className="inline-flex items-center gap-1 font-bold text-[#062039]">
                <CheckCircle2 className="h-3 w-3 text-[#009345]" />
                {selectedIndustryName}
              </span>
            )}
            {selectedPriorities.length > 0 && (
              <span className="text-slate-500">
                • {selectedPriorities.length} {selectedPriorities.length === 1 ? 'Priority' : 'Priorities'}
              </span>
            )}
            {journeyStage && (
              <span className="text-slate-500">
                • {BTM_JOURNEY_STAGES.find((s) => s.id === journeyStage)?.title}
              </span>
            )}
          </motion.div>
        )}
      </motion.div>

      <div className="space-y-8">
        {/* ============================================================ */}
        {/* QUESTION 1: Large Selectable Organization Cards              */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-[8px] border border-slate-200 bg-white p-6 sm:p-7 shadow-2xs"
        >
          <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[1.5px] text-[#009345]">
                Step 01 / 03
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#062039] mt-0.5">
                What best describes your organization?
              </h3>
            </div>

            {selectedIndustry ? (
              <Badge variant="emerald" size="sm">
                Selected
              </Badge>
            ) : (
              <span className="text-xs text-slate-400 font-medium">Select one</span>
            )}
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {BTM_INDUSTRIES.map((industry) => {
              const isSelected = selectedIndustry === industry.id;
              const icon = INDUSTRY_ICONS[industry.iconName] || <Building2 className="h-5 w-5" />;

              return (
                <div
                  key={industry.id}
                  tabIndex={0}
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => onSelectIndustry(industry.id)}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault();
                      onSelectIndustry(industry.id);
                    }
                  }}
                  className={cn(
                    'group relative flex flex-col justify-between rounded-[6px] border p-4.5 text-left transition-all duration-200 cursor-pointer outline-none select-none focus-visible:ring-2 focus-visible:ring-[#009345] focus-visible:ring-offset-1',
                    isSelected
                      ? 'border-[#009345] ring-2 ring-[#009345] bg-gradient-to-b from-white to-emerald-50/30 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5'
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div
                        className={cn(
                          'flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] border transition-colors',
                          isSelected
                            ? 'bg-[#009345] text-white border-[#009345]'
                            : 'bg-slate-50 text-[#062039] border-slate-200 group-hover:bg-[#062039] group-hover:text-white'
                        )}
                      >
                        {icon}
                      </div>

                      <div
                        className={cn(
                          'flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-[2px] border transition-all',
                          isSelected
                            ? 'border-[#009345] bg-[#009345] text-white'
                            : 'border-slate-300 bg-white text-transparent group-hover:border-slate-400'
                        )}
                      >
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                    </div>

                    <h4
                      className={cn(
                        'mt-3.5 text-sm font-bold tracking-tight transition-colors leading-snug',
                        isSelected ? 'text-[#062039]' : 'text-[#062039] group-hover:text-[#009345]'
                      )}
                    >
                      {industry.name}
                    </h4>

                    <p className="mt-1 text-xs text-slate-500 leading-relaxed font-normal line-clamp-2">
                      {industry.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                    <span className={isSelected ? 'text-[#009345]' : 'text-slate-400 group-hover:text-slate-600'}>
                      {isSelected ? 'Active Selection' : 'Click to select'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* QUESTION 2: Compact Selectable Chips (Progressive Disclosure) */}
        {/* ============================================================ */}
        <AnimatePresence>
          {isQuestion2Unlocked && (
            <motion.div
              initial={{ opacity: 0, y: 15, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-[8px] border border-slate-200 bg-white p-6 sm:p-7 shadow-2xs overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[1.5px] text-[#009345]">
                    Step 02 / 03
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#062039] mt-0.5">
                    What matters most right now?
                  </h3>
                </div>

                <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-[2px]">
                  {selectedPriorities.length} selected (multi-select)
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {BTM_PRIORITIES.map((priority) => {
                  const isSelected = selectedPriorities.includes(priority.id);

                  return (
                    <button
                      key={priority.id}
                      type="button"
                      tabIndex={0}
                      role="checkbox"
                      aria-checked={isSelected}
                      onClick={() => onTogglePriority(priority.id)}
                      className={cn(
                        'group inline-flex items-center gap-2 rounded-[4px] border px-3.5 py-2 text-xs font-semibold transition-all duration-150 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-[#009345] focus-visible:ring-offset-1',
                        isSelected
                          ? 'border-[#009345] bg-[#009345] text-white shadow-2xs hover:bg-[#007a38]'
                          : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50'
                      )}
                    >
                      <div
                        className={cn(
                          'flex h-3.5 w-3.5 items-center justify-center rounded-[2px] border transition-colors',
                          isSelected
                            ? 'border-white bg-white/20 text-white'
                            : 'border-slate-300 text-transparent group-hover:border-slate-400'
                        )}
                      >
                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                      </div>
                      <span>{priority.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ============================================================ */}
        {/* QUESTION 3: Compact Segmented Control (Progressive Disclosure)*/}
        {/* ============================================================ */}
        <AnimatePresence>
          {isQuestion3Unlocked && (
            <motion.div
              initial={{ opacity: 0, y: 15, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-[8px] border border-slate-200 bg-white p-6 sm:p-7 shadow-2xs overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[1.5px] text-[#737373]">
                    Step 03 / 03 (Optional)
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#062039] mt-0.5">
                    Where are you in the journey?
                  </h3>
                </div>

                <span className="text-xs font-medium text-slate-400">Optional</span>
              </div>

              {/* Compact Segmented Control Bar */}
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 bg-slate-100/80 p-1.5 rounded-[6px] border border-slate-200/80">
                {BTM_JOURNEY_STAGES.map((stage) => {
                  const isSelected = journeyStage === stage.id;

                  return (
                    <button
                      key={stage.id}
                      type="button"
                      tabIndex={0}
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => onSelectJourneyStage(stage.id)}
                      className={cn(
                        'flex flex-col items-center justify-center p-3 text-center rounded-[4px] transition-all duration-150 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-[#009345]',
                        isSelected
                          ? 'bg-white text-[#062039] shadow-xs border border-slate-200/80 ring-1 ring-[#009345]'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                      )}
                    >
                      <span
                        className={cn(
                          'text-xs font-bold tracking-tight',
                          isSelected ? 'text-[#009345]' : 'text-slate-700'
                        )}
                      >
                        {stage.title}
                      </span>
                      <span className="text-[10px] text-slate-500 mt-0.5 font-normal line-clamp-1">
                        {stage.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Bottom Sticky Action Bar */}
      <div className="sticky bottom-6 mt-10 z-30 flex items-center justify-between rounded-[6px] border border-slate-200 bg-white/98 backdrop-blur-sm p-4 shadow-lg max-w-2xl mx-auto">
        <div className="flex items-center gap-2 text-xs text-slate-600 pl-1">
          {canProceed ? (
            <div className="flex items-center gap-1.5 text-slate-800 font-medium">
              <CheckCircle2 className="h-4 w-4 text-[#009345]" />
              <span>Ready to synthesize diagnostic recommendations</span>
            </div>
          ) : (
            <span className="text-slate-500">Select an organization type to build your profile</span>
          )}
        </div>

        <Button
          variant="emerald"
          size="md"
          disabled={!canProceed}
          onClick={onSubmit}
          rightIcon={<Sparkles className="h-4 w-4" />}
        >
          Generate Solution Path
        </Button>
      </div>
    </div>
  );
}
