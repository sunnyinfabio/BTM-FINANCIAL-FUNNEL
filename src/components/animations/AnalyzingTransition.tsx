'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Building2, Layers, CheckCircle2 } from 'lucide-react';

interface AnalyzingTransitionProps {
  onComplete: () => void;
}

export function AnalyzingTransition({ onComplete }: AnalyzingTransitionProps) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setActiveStep(1), 500);
    const t2 = setTimeout(() => setActiveStep(2), 1050);
    const t3 = setTimeout(() => {
      onComplete();
    }, 1750);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div className="flex min-h-[480px] w-full flex-col items-center justify-center py-12 px-4 text-center select-none">
      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-2"
      >
        <span className="font-mono text-xs font-bold text-[#009345] uppercase tracking-[2px] bg-emerald-50 px-3 py-1 rounded-[3px] border border-emerald-200/80">
          Diagnostic Synthesis
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#062039] mt-2">
          Mapping your requirements...
        </h2>
        <p className="text-xs text-slate-500 max-w-sm mx-auto">
          Correlating operational challenges, sector standards, and BTM capability models.
        </p>
      </motion.div>

      {/* Visual Diagnostic Flow Diagram: DATA -> BUSINESS CONTEXT -> BTM CAPABILITIES */}
      <div className="mt-10 w-full max-w-xs sm:max-w-sm flex flex-col items-center">
        {/* Node 1: DATA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`w-full flex items-center justify-between p-3.5 rounded-[6px] border transition-all duration-300 ${
            activeStep >= 0
              ? 'border-[#009345] bg-white ring-1 ring-[#009345] shadow-xs'
              : 'border-slate-200 bg-slate-50 text-slate-400'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-[3px] ${
                activeStep >= 0 ? 'bg-[#062039] text-white' : 'bg-slate-200 text-slate-500'
              }`}
            >
              <Database className="h-4 w-4 text-[#009345]" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-[#062039] tracking-wider uppercase font-mono">
                DATA & CHALLENGES
              </div>
              <div className="text-[10px] text-slate-500">Core operational focus areas</div>
            </div>
          </div>
          {activeStep > 0 && <CheckCircle2 className="h-4 w-4 text-[#009345]" />}
        </motion.div>

        {/* Connecting Line 1 */}
        <div className="h-6 w-[2px] relative overflow-hidden bg-slate-200 my-1">
          <motion.div
            className="w-full bg-[#009345]"
            initial={{ height: 0 }}
            animate={{ height: activeStep >= 1 ? '100%' : '0%' }}
            transition={{ duration: 0.35 }}
          />
        </div>

        {/* Node 2: BUSINESS CONTEXT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: activeStep >= 1 ? 1 : 0.4, scale: 1 }}
          className={`w-full flex items-center justify-between p-3.5 rounded-[6px] border transition-all duration-300 ${
            activeStep >= 1
              ? 'border-[#009345] bg-white ring-1 ring-[#009345] shadow-xs'
              : 'border-slate-200 bg-slate-50 text-slate-400'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-[3px] ${
                activeStep >= 1 ? 'bg-[#062039] text-white' : 'bg-slate-200 text-slate-500'
              }`}
            >
              <Building2 className="h-4 w-4 text-[#009345]" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-[#062039] tracking-wider uppercase font-mono">
                BUSINESS CONTEXT
              </div>
              <div className="text-[10px] text-slate-500">Sector model & target priorities</div>
            </div>
          </div>
          {activeStep > 1 && <CheckCircle2 className="h-4 w-4 text-[#009345]" />}
        </motion.div>

        {/* Connecting Line 2 */}
        <div className="h-6 w-[2px] relative overflow-hidden bg-slate-200 my-1">
          <motion.div
            className="w-full bg-[#009345]"
            initial={{ height: 0 }}
            animate={{ height: activeStep >= 2 ? '100%' : '0%' }}
            transition={{ duration: 0.35 }}
          />
        </div>

        {/* Node 3: BTM CAPABILITIES */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: activeStep >= 2 ? 1 : 0.4, scale: 1 }}
          className={`w-full flex items-center justify-between p-3.5 rounded-[6px] border transition-all duration-300 ${
            activeStep >= 2
              ? 'border-[#009345] bg-emerald-50/50 ring-2 ring-[#009345] shadow-sm'
              : 'border-slate-200 bg-slate-50 text-slate-400'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-[3px] ${
                activeStep >= 2 ? 'bg-[#009345] text-white' : 'bg-slate-200 text-slate-500'
              }`}
            >
              <Layers className="h-4 w-4 text-white" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-[#062039] tracking-wider uppercase font-mono">
                BTM CAPABILITIES
              </div>
              <div className="text-[10px] text-slate-500">Synthesizing personalized path</div>
            </div>
          </div>
          {activeStep >= 2 && (
            <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-[#009345] border-t-transparent" />
          )}
        </motion.div>
      </div>

      {/* Loading Dots Indicator */}
      <div className="mt-8 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-[#009345] animate-bounce [animation-delay:-0.3s]" />
        <span className="h-2 w-2 rounded-full bg-[#009345] animate-bounce [animation-delay:-0.15s]" />
        <span className="h-2 w-2 rounded-full bg-[#009345] animate-bounce" />
      </div>
    </div>
  );
}
