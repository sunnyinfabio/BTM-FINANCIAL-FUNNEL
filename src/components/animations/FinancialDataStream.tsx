'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { getImage } from '@/data/images';
import Image from 'next/image';

export function FinancialDataStream() {
  const heroImage = getImage('heroFinancialAnalytics');
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-xl lg:max-w-2xl mx-auto select-none perspective-1000"
    >
      {/* Dynamic Ambient Glow matching BTM Navy & Emerald */}
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-[#062039]/20 via-[#009345]/15 to-transparent blur-2xl pointer-events-none" />

      {/* 3D Parallax Elevated Frame */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-[#062039] shadow-2xl transition-shadow duration-300 group"
      >
        {/* Base Cinematic Image with Tone Grading */}
        <div className="relative aspect-16/10 w-full overflow-hidden">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 680px"
            className="object-cover object-center filter contrast-110 brightness-95 scale-102 transition-transform duration-700 group-hover:scale-105"
          />

          {/* Deep Navy & Emerald Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#062039]/90 via-[#062039]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#062039]/70 via-transparent to-[#062039]/50" />

          {/* Micro-Grain Texture Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay"
            style={{
              backgroundImage: `radial-gradient(rgba(255,255,255,0.18) 1px, transparent 0)`,
              backgroundSize: '16px 16px'
            }}
          />

          {/* Interactive Animated SVG Data Streams & Connected Nodes Layer */}
          <svg
            className="absolute inset-0 h-full w-full pointer-events-none z-10"
            viewBox="0 0 640 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="streamGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#009345" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#30ad6b" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#062039" stopOpacity="0.1" />
              </linearGradient>

              <linearGradient id="streamGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
                <stop offset="60%" stopColor="#009345" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#062039" stopOpacity="0.05" />
              </linearGradient>

              <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Subtle Grid Axes */}
            <line x1="60" y1="320" x2="580" y2="320" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="60" y1="220" x2="580" y2="220" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="60" y1="120" x2="580" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />

            {/* Dynamic Connecting Stream Paths */}
            <motion.path
              d="M 60 280 Q 180 180, 300 240 T 540 130"
              stroke="url(#streamGrad1)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            <motion.path
              d="M 100 320 C 220 300, 260 140, 420 180 S 520 90, 580 80"
              stroke="url(#streamGrad2)"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.85 }}
              transition={{ duration: 2.4, delay: 0.3, ease: "easeInOut" }}
            />

            {/* Secondary Correlation Stream */}
            <motion.path
              d="M 120 160 Q 260 270, 460 220"
              stroke="rgba(0, 147, 69, 0.4)"
              strokeWidth="1"
              strokeDasharray="3 3"
              fill="none"
            />

            {/* Interactive Connected Nodes with Gentle Pulse */}
            <g filter="url(#nodeGlow)">
              <circle cx="180" cy="210" r="4.5" fill="#009345" />
              <circle cx="300" cy="240" r="5" fill="#30ad6b" />
              <circle cx="420" cy="180" r="4" fill="#38bdf8" />
              <circle cx="540" cy="130" r="5.5" fill="#009345" />
            </g>

            {/* Traveling Pulse Along Main Vector Path */}
            <motion.circle
              r="4.5"
              fill="#009345"
              filter="url(#nodeGlow)"
              initial={{ cx: 60, cy: 280, opacity: 0 }}
              animate={{
                cx: [60, 180, 300, 540],
                cy: [280, 180, 240, 130],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1
              }}
            />

            {/* Orbiting Ring on Key Node */}
            <motion.circle
              cx="540"
              cy="130"
              r="12"
              stroke="#009345"
              strokeWidth="1"
              strokeDasharray="2 2"
              fill="none"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: '540px 130px' }}
            />
          </svg>

          {/* Floating Visual-Only Institutional Signal Badges (Zero Fake Claims) */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-[3px] bg-black/60 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono font-bold tracking-[1.5px] uppercase text-emerald-400 border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#009345] animate-pulse" />
              DATA SIGNAL
            </span>

            <span className="hidden sm:inline-flex rounded-[3px] bg-black/40 backdrop-blur-md px-2 py-1 text-[10px] font-mono tracking-[1px] uppercase text-slate-300 border border-white/10">
              MODEL
            </span>
          </div>

          <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5">
            <span className="rounded-[3px] bg-black/50 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono tracking-[1.5px] uppercase text-slate-200 border border-white/10">
              PORTFOLIO • ANALYTICS
            </span>
          </div>

          <div className="absolute bottom-4 left-5 z-20 flex items-center gap-3">
            <div className="flex items-center gap-2 text-white text-xs font-mono">
              <span className="h-2 w-2 rounded-full bg-[#009345]" />
              <span className="font-bold tracking-wider text-slate-200">TREND CORRELATION</span>
            </div>
          </div>

          <div className="absolute bottom-4 right-5 z-20">
            <span className="text-[10px] font-mono uppercase tracking-[2px] text-emerald-400/90 font-bold bg-[#062039]/80 px-2 py-0.5 rounded-[2px] border border-emerald-500/20">
              INSIGHT MATRIX
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
