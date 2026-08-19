'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FunnelState } from '@/data/types';
import { BTM_CHALLENGES } from '@/data/challenges';
import { BTM_INDUSTRIES, BTM_PRIORITIES } from '@/data/industries';
import { Database, Building2, Activity, Layers, CheckCircle2 } from 'lucide-react';

interface AnalyzingTransitionProps {
  funnelState?: FunnelState;
  onComplete: () => void;
}

export function AnalyzingTransition({ funnelState, onComplete }: AnalyzingTransitionProps) {
  const [activeStep, setActiveStep] = useState(0);

  // Dynamic user selections
  const challengeTitle =
    funnelState?.selectedChallenges.length
      ? BTM_CHALLENGES.find((c) => c.id === funnelState.selectedChallenges[0])?.title.toUpperCase() || 'DATA & ANALYTICS'
      : 'DATA & ANALYTICS';

  const industryTitle =
    funnelState?.selectedIndustry
      ? BTM_INDUSTRIES.find((i) => i.id === funnelState.selectedIndustry)?.name.toUpperCase() || 'INVESTMENT BANKING'
      : 'INVESTMENT BANKING';

  const priorityTitle =
    funnelState?.selectedPriorities.length
      ? BTM_PRIORITIES.find((p) => p.id === funnelState.selectedPriorities[0])?.label.toUpperCase() || 'REPORTING & SCALE'
      : 'REPORTING & SCALE';

  useEffect(() => {
    const t1 = setTimeout(() => setActiveStep(1), 350);
    const t2 = setTimeout(() => setActiveStep(2), 750);
    const t3 = setTimeout(() => setActiveStep(3), 1150);
    const t4 = setTimeout(() => {
      onComplete();
    }, 1600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <div className="flex min-h-[560px] w-full flex-col items-center justify-center py-16 px-4 text-center select-none bg-[#062039] rounded-3xl border border-slate-700/80 text-white shadow-2xl relative overflow-hidden">
      {/* Ambient Radial Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#009345]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="space-y-3 relative z-10"
      >
        <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-[3px] bg-emerald-950/60 px-3.5 py-1 rounded-[3px] border border-emerald-500/30">
          SOLUTION GENERATION
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase mt-2">
          Building Your Solution
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto font-normal">
          Synthesizing your operational focus, domain context, and priority requirements.
        </p>
      </motion.div>

      {/* Dynamic Animated Flow: CHALLENGE -> INDUSTRY -> PRIORITY -> BTM CAPABILITIES */}
      <div className="mt-10 w-full max-w-sm sm:max-w-md flex flex-col items-center relative z-10 space-y-0">
        {/* Node 1: CHALLENGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
            activeStep >= 0
              ? 'border-[#009345] bg-[#031120] ring-1 ring-[#009345] shadow-lg'
              : 'border-slate-700 bg-slate-800/50 text-slate-400'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                activeStep >= 0 ? 'bg-[#009345] text-white' : 'bg-slate-700 text-slate-400'
              }`}
            >
              <Database className="h-5 w-5 text-white" />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                01 Focus
              </span>
              <span className="text-sm font-black text-white tracking-wide uppercase">
                {challengeTitle}
              </span>
            </div>
          </div>
          {activeStep > 0 && <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />}
        </motion.div>

        {/* Connecting Line 1 */}
        <div className="h-6 w-[2px] relative overflow-hidden bg-slate-700">
          <motion.div
            className="w-full bg-[#009345]"
            initial={{ height: 0 }}
            animate={{ height: activeStep >= 1 ? '100%' : '0%' }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Node 2: INDUSTRY */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: activeStep >= 1 ? 1 : 0.4, scale: 1 }}
          className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
            activeStep >= 1
              ? 'border-[#009345] bg-[#031120] ring-1 ring-[#009345] shadow-lg'
              : 'border-slate-700 bg-slate-800/50 text-slate-400'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                activeStep >= 1 ? 'bg-[#009345] text-white' : 'bg-slate-700 text-slate-400'
              }`}
            >
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                02 Organization
              </span>
              <span className="text-sm font-black text-white tracking-wide uppercase">
                {industryTitle}
              </span>
            </div>
          </div>
          {activeStep > 1 && <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />}
        </motion.div>

        {/* Connecting Line 2 */}
        <div className="h-6 w-[2px] relative overflow-hidden bg-slate-700">
          <motion.div
            className="w-full bg-[#009345]"
            initial={{ height: 0 }}
            animate={{ height: activeStep >= 2 ? '100%' : '0%' }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Node 3: PRIORITY */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: activeStep >= 2 ? 1 : 0.4, scale: 1 }}
          className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
            activeStep >= 2
              ? 'border-[#009345] bg-[#031120] ring-1 ring-[#009345] shadow-lg'
              : 'border-slate-700 bg-slate-800/50 text-slate-400'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                activeStep >= 2 ? 'bg-[#009345] text-white' : 'bg-slate-700 text-slate-400'
              }`}
            >
              <Activity className="h-5 w-5 text-white" />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                03 Priority
              </span>
              <span className="text-sm font-black text-white tracking-wide uppercase">
                {priorityTitle}
              </span>
            </div>
          </div>
          {activeStep > 2 && <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />}
        </motion.div>

        {/* Connecting Line 3 */}
        <div className="h-6 w-[2px] relative overflow-hidden bg-slate-700">
          <motion.div
            className="w-full bg-[#009345]"
            initial={{ height: 0 }}
            animate={{ height: activeStep >= 3 ? '100%' : '0%' }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Node 4: BTM CAPABILITIES */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: activeStep >= 3 ? 1 : 0.4, scale: 1 }}
          className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
            activeStep >= 3
              ? 'border-emerald-400 bg-emerald-950/70 ring-2 ring-emerald-400 shadow-2xl'
              : 'border-slate-700 bg-slate-800/50 text-slate-400'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                activeStep >= 3 ? 'bg-emerald-500 text-white' : 'bg-slate-700 text-slate-400'
              }`}
            >
              <Layers className="h-5 w-5 text-white" />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-mono text-emerald-300 uppercase tracking-wider block">
                Recommended Match
              </span>
              <span className="text-sm font-black text-white tracking-wide uppercase">
                BTM CAPABILITIES
              </span>
            </div>
          </div>
          {activeStep >= 3 && (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-400 border-t-transparent shrink-0" />
          )}
        </motion.div>
      </div>

      {/* Loading Indicator */}
      <div className="mt-8 flex items-center gap-2 relative z-10">
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:-0.45s]" />
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:-0.3s]" />
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:-0.15s]" />
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-bounce" />
      </div>
    </div>
  );
}
