'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getImage } from '@/data/images';
import {
  TrendingUp,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Database,
  Layers,
  Cpu
} from 'lucide-react';

export function FinancialDataStream() {
  const [metricIndex, setMetricIndex] = useState(0);
  const heroImage = getImage('heroFinancialAnalytics');

  const liveMetrics = [
    { label: 'CASH FLOW TIE-OUT', value: '100% Validated', tag: 'CMBS / CLO' },
    { label: 'DATA MART LATENCY', value: '0.38s Query Speed', tag: 'High Throughput' },
    { label: 'LOAN TAPE PARSING', value: '42,800+ Records', tag: 'Automated Pipeline' },
    { label: 'PORTFOLIO RISK DELTA', value: '0.02% Tolerance', tag: 'Quant Benchmark' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setMetricIndex((prev) => (prev + 1) % liveMetrics.length);
    }, 3600);
    return () => clearInterval(timer);
  }, [liveMetrics.length]);

  return (
    <div className="relative w-full max-w-xl mx-auto select-none">
      {/* Subtle Ambient Elevation Shadow */}
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#062039]/10 via-[#009345]/5 to-transparent blur-lg pointer-events-none" />

      {/* Main Institutional Terminal Frame */}
      <div className="relative rounded-lg border border-slate-300 bg-[#062039] text-white shadow-xl overflow-hidden">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-700/80 bg-[#041527] px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#009345] animate-pulse" />
            <span className="font-mono text-[10px] font-semibold tracking-wider text-slate-300 uppercase">
              BTM.ANALYTICS • FINANCIAL INTELLIGENCE PLATFORM
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[9px] text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded-[2px]">
            <Activity className="h-2.5 w-2.5 animate-pulse" />
            <span>CALIBRATED</span>
          </div>
        </div>

        {/* Hero Visual Area with Overlay and Restrained Animated Graphs */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
          <Image
            src={heroImage.src}
            alt="BTM Financial Analytics and Intelligence Visualization"
            fill
            className="object-cover opacity-35 filter contrast-110"
            sizes="(max-width: 768px) 100vw, 550px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#062039] via-[#062039]/60 to-transparent" />

          {/* SVG Waveform: Precision Financial Curves */}
          <div className="absolute inset-0 pt-4 px-4 flex flex-col justify-end">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-1 border-b border-slate-700/50">
              <span className="flex items-center gap-1 text-slate-200">
                <TrendingUp className="h-3 w-3 text-[#009345]" />
                PORTFOLIO SURVEILLANCE & ATTRIBUTION
              </span>
              <span className="text-slate-400">HISTORICAL BENCHMARK</span>
            </div>

            <div className="h-32 w-full relative">
              <svg viewBox="0 0 400 120" className="h-full w-full overflow-visible">
                <defs>
                  <linearGradient id="emeraldCurve" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#009345" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#009345" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Subdued Gridlines */}
                <line x1="0" y1="25" x2="400" y2="25" stroke="#1e293b" strokeDasharray="4 4" />
                <line x1="0" y1="55" x2="400" y2="55" stroke="#1e293b" strokeDasharray="4 4" />
                <line x1="0" y1="85" x2="400" y2="85" stroke="#1e293b" strokeDasharray="4 4" />

                {/* Area Gradient */}
                <motion.path
                  d="M 0 95 Q 70 50, 150 70 T 300 30 T 400 20 L 400 120 L 0 120 Z"
                  fill="url(#emeraldCurve)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                />

                {/* Primary Emerald Curve Line */}
                <motion.path
                  d="M 0 95 Q 70 50, 150 70 T 300 30 T 400 20"
                  fill="none"
                  stroke="#009345"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Secondary Subdued Baseline */}
                <motion.path
                  d="M 0 105 Q 90 75, 180 55 T 320 60 T 400 45"
                  fill="none"
                  stroke="#64748b"
                  strokeWidth="1.2"
                  strokeDasharray="3 3"
                />

                {/* Restrained Dynamic Node Points */}
                <motion.circle
                  cx="150"
                  cy="70"
                  r="3.5"
                  fill="#ffffff"
                  stroke="#009345"
                  strokeWidth="2"
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                />
                <motion.circle
                  cx="300"
                  cy="30"
                  r="4"
                  fill="#009345"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
                />
              </svg>
            </div>
          </div>

          {/* Top-Right Floating Status Badge */}
          <div className="absolute top-3 right-3 bg-[#041527]/90 backdrop-blur-sm border border-slate-700/80 px-2.5 py-1 rounded-[3px] text-[10px] font-mono text-slate-300 flex items-center gap-1.5 shadow-sm">
            <ShieldCheck className="h-3 w-3 text-[#009345]" />
            <span>SOC-2 • SECURE VPC</span>
          </div>
        </div>

        {/* Bottom Metric Strip with Restrained Carousel Transition */}
        <div className="bg-[#031120] border-t border-slate-800 p-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-[3px] bg-[#009345]/15 text-[#009345] border border-[#009345]/30">
              <Database className="h-3.5 w-3.5" />
            </div>
            <div>
              <div className="text-[9px] font-mono uppercase tracking-[1.5px] text-slate-400">
                {liveMetrics[metricIndex].label}
              </div>
              <div className="text-xs font-bold text-white tracking-tight">
                {liveMetrics[metricIndex].value}
              </div>
            </div>
          </div>

          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-[2px] border border-emerald-900/60 font-medium">
            {liveMetrics[metricIndex].tag}
          </span>
        </div>
      </div>
    </div>
  );
}
