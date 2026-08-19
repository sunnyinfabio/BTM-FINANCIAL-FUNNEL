'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
  Layers,
  Activity,
  Cpu
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
  Building2: <Building2 className="h-4 w-4" />,
  TrendingUp: <TrendingUp className="h-4 w-4" />,
  Landmark: <Landmark className="h-4 w-4" />,
  LineChart: <LineChart className="h-4 w-4" />,
  ShieldCheck: <ShieldCheck className="h-4 w-4" />,
  Briefcase: <Briefcase className="h-4 w-4" />,
  Coins: <Coins className="h-4 w-4" />,
  Globe: <Globe className="h-4 w-4" />
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
  const currentIndustry = BTM_INDUSTRIES.find((i) => i.id === selectedIndustry);
  const currentStage = BTM_JOURNEY_STAGES.find((s) => s.id === journeyStage);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-center max-w-2xl mx-auto mb-8 sm:mb-10"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Badge variant="emerald" size="sm">
            Stage 03
          </Badge>
          <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
            Diagnostic Profile Builder
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#062039]">
          Tell us a little about your business.
        </h2>

        {/* Signature BTM Bar Separator */}
        <div className="btm-separator btm-separator-center" />

        <p className="text-sm sm:text-base text-slate-600 font-normal">
          Configure your institutional domain and immediate focus areas to calibrate BTM's solution recommendations.
        </p>
      </motion.div>

      {/* Main 2-Column Diagnostic Cockpit Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (8 Cols): Interactive Selector Matrix */}
        <div className="lg:col-span-8 space-y-6">
          {/* Dimension 1: Organization Type */}
          <div className="rounded-[8px] border border-slate-200/90 bg-white p-5 sm:p-6 shadow-2xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-[1.5px] text-[#062039] flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5 text-[#009345]" />
                1. Institutional Organization
              </span>
              <span className="text-[11px] font-mono text-slate-400">Select one</span>
            </div>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {BTM_INDUSTRIES.map((industry) => {
                const isSelected = selectedIndustry === industry.id;
                const icon = INDUSTRY_ICONS[industry.iconName] || <Building2 className="h-4 w-4" />;

                return (
                  <button
                    key={industry.id}
                    type="button"
                    onClick={() => onSelectIndustry(industry.id)}
                    className={cn(
                      'group relative flex flex-col items-start justify-between rounded-[6px] border p-3 text-left transition-all duration-150 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-[#009345]',
                      isSelected
                        ? 'border-[#009345] ring-2 ring-[#009345] bg-emerald-50/40 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70 hover:-translate-y-0.5'
                    )}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div
                        className={cn(
                          'flex h-7 w-7 items-center justify-center rounded-[3px] transition-colors',
                          isSelected
                            ? 'bg-[#009345] text-white'
                            : 'bg-slate-100 text-[#062039] group-hover:bg-[#062039] group-hover:text-white'
                        )}
                      >
                        {icon}
                      </div>

                      <div
                        className={cn(
                          'flex h-3.5 w-3.5 items-center justify-center rounded-[2px] border transition-all',
                          isSelected
                            ? 'border-[#009345] bg-[#009345] text-white'
                            : 'border-slate-300 bg-white text-transparent'
                        )}
                      >
                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                      </div>
                    </div>

                    <span
                      className={cn(
                        'mt-2.5 text-xs font-bold tracking-tight leading-tight line-clamp-2',
                        isSelected ? 'text-[#062039]' : 'text-slate-700 group-hover:text-[#062039]'
                      )}
                    >
                      {industry.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dimension 2: Immediate Priorities */}
          <div className="rounded-[8px] border border-slate-200/90 bg-white p-5 sm:p-6 shadow-2xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-[1.5px] text-[#062039] flex items-center gap-1.5">
                <Activity className="h-3.5 w-3.5 text-[#009345]" />
                2. Immediate Strategic Priorities
              </span>
              <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-[2px]">
                {selectedPriorities.length} selected
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {BTM_PRIORITIES.map((priority) => {
                const isSelected = selectedPriorities.includes(priority.id);

                return (
                  <button
                    key={priority.id}
                    type="button"
                    onClick={() => onTogglePriority(priority.id)}
                    className={cn(
                      'group inline-flex items-center gap-1.5 rounded-[4px] border px-3 py-1.5 text-xs font-semibold transition-all duration-150 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-[#009345]',
                      isSelected
                        ? 'border-[#009345] bg-[#009345] text-white shadow-2xs hover:bg-[#007a38]'
                        : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50'
                    )}
                  >
                    <div
                      className={cn(
                        'flex h-3 w-3 items-center justify-center rounded-[2px] border transition-colors',
                        isSelected
                          ? 'border-white bg-white/20 text-white'
                          : 'border-slate-300 text-transparent'
                      )}
                    >
                      <Check className="h-2 w-2 stroke-[3]" />
                    </div>
                    <span>{priority.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dimension 3: Journey Horizon */}
          <div className="rounded-[8px] border border-slate-200/90 bg-white p-5 sm:p-6 shadow-2xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-[1.5px] text-[#062039] flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-[#009345]" />
                3. Project Readiness & Horizon
              </span>
              <span className="text-[11px] font-mono text-slate-400">Optional</span>
            </div>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-2 bg-slate-50 p-1.5 rounded-[6px] border border-slate-200/80">
              {BTM_JOURNEY_STAGES.map((stage) => {
                const isSelected = journeyStage === stage.id;

                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => onSelectJourneyStage(stage.id)}
                    className={cn(
                      'p-2 text-center rounded-[4px] transition-all duration-150 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-[#009345]',
                      isSelected
                        ? 'bg-white text-[#062039] shadow-xs border border-slate-200/80 ring-1 ring-[#009345]'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    )}
                  >
                    <div
                      className={cn(
                        'text-xs font-bold tracking-tight',
                        isSelected ? 'text-[#009345]' : 'text-slate-700'
                      )}
                    >
                      {stage.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column (4 Cols): Live Diagnostic Profile Cockpit */}
        <div className="lg:col-span-4 sticky top-24 space-y-4">
          <div className="rounded-[8px] border border-slate-200/90 bg-[#062039] text-white p-6 shadow-xl relative overflow-hidden">
            {/* Ambient Background Gradient */}
            <div className="absolute top-0 right-0 h-32 w-32 bg-[#009345]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-3.5 border-b border-slate-700/80">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#009345] animate-pulse" />
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate-300">
                  DIAGNOSTIC PASSPORT
                </span>
              </div>
              <Badge variant="emerald" size="sm">
                CALIBRATED
              </Badge>
            </div>

            {/* Live Configured Parameters */}
            <div className="mt-5 space-y-4 text-left">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  ORGANIZATION SECTOR
                </span>
                <div className="text-sm font-bold text-white mt-0.5">
                  {currentIndustry ? currentIndustry.name : <span className="text-slate-400 italic">Pending selection...</span>}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  STRATEGIC FOCUS ({selectedPriorities.length})
                </span>
                <div className="text-xs text-slate-300 mt-1 flex flex-wrap gap-1">
                  {selectedPriorities.length > 0 ? (
                    selectedPriorities.slice(0, 3).map((pId) => {
                      const pObj = BTM_PRIORITIES.find((p) => p.id === pId);
                      return (
                        <span
                          key={pId}
                          className="bg-[#031120] border border-slate-700 px-2 py-0.5 rounded-[2px] text-[10px] text-emerald-300 font-medium"
                        >
                          {pObj?.label}
                        </span>
                      );
                    })
                  ) : (
                    <span className="text-slate-400 italic">No priorities selected</span>
                  )}
                  {selectedPriorities.length > 3 && (
                    <span className="text-[10px] text-slate-400">+{selectedPriorities.length - 3} more</span>
                  )}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  EXECUTION READINESS
                </span>
                <div className="text-xs font-semibold text-slate-200 mt-0.5">
                  {currentStage ? currentStage.title : 'Exploring Possibilities'}
                </div>
              </div>
            </div>

            {/* Primary Action Button inside Cockpit */}
            <div className="mt-6 pt-4 border-t border-slate-700/80">
              <Button
                variant="emerald"
                size="lg"
                disabled={!canProceed}
                onClick={onSubmit}
                rightIcon={<Sparkles className="h-4 w-4" />}
                className="w-full justify-center shadow-xs"
              >
                Generate Solution Path
              </Button>
              <p className="text-[10px] text-slate-400 text-center mt-2 font-mono">
                Synthesizes top recommendations & case studies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
