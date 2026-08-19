'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Capability } from '@/data/types';
import { getImage } from '@/data/images';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight } from 'lucide-react';

interface CapabilityCardProps {
  capability: Capability;
  index: number;
  onExplore: (capability: Capability) => void;
  onViewRelatedWork?: (capability: Capability) => void;
}

export function CapabilityCard({
  capability,
  index,
  onExplore
}: CapabilityCardProps) {
  const imageKeyMap: Record<string, string> = {
    'data-analytics': 'dataAnalytics',
    'application-services': 'applicationServices',
    'technology-consulting': 'technologyConsulting',
    'ai-ml': 'aiAutomation',
    'quant-analytics': 'quantAnalytics',
    'fixed-income-equity-analytics': 'financialAnalytics',
    'cloud-computing': 'cloudInfrastructure',
    'valuation-advisory-services': 'valuationAdvisory',
    'structured-finance': 'structuredFinance',
    'specialized-support-team': 'advisory'
  };

  const imageAsset = getImage(imageKeyMap[capability.id] || 'dataAnalytics');

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onExplore(capability)}
      className="group relative flex flex-col md:flex-row items-stretch justify-between overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-md hover:border-[#009345] hover:shadow-2xl hover:-translate-y-1 transition-all duration-350 cursor-pointer"
    >
      {/* Top / Side Animated Green Accent Line on Hover */}
      <div className="absolute top-0 left-0 right-0 md:right-auto md:bottom-0 md:w-[3.5px] h-[3.5px] md:h-auto bg-transparent group-hover:bg-[#009345] transition-all duration-300 z-30" />

      {/* Left 55% Content Area */}
      <div className="w-full md:w-[55%] p-6 sm:p-8 flex flex-col justify-between space-y-4 text-left order-2 md:order-1">
        <div>
          {/* Oversized Monospace Number + Category Badge */}
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-2xl sm:text-3xl font-black text-[#009345] tracking-tight">
              0{index + 1}
            </span>
            <Badge variant="navy" size="sm" className="font-mono text-[10px] tracking-wider uppercase">
              {capability.category}
            </Badge>
          </div>

          {/* Capability Name */}
          <h3 className="mt-3 text-xl sm:text-2xl font-black tracking-tight text-[#062039] uppercase group-hover:text-[#009345] transition-colors leading-tight">
            {capability.name}
          </h3>

          {/* 1-Line Value Brief */}
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {capability.shortDescription}
          </p>
        </div>

        {/* Action Trigger */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#009345] group-hover:underline inline-flex items-center gap-1.5">
            <span>Explore capability</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform" />
          </span>
        </div>
      </div>

      {/* Right 45% Cinematic Image Area */}
      <div className="relative w-full md:w-[45%] min-h-[180px] md:min-h-[220px] overflow-hidden bg-[#062039] order-1 md:order-2">
        <Image
          src={imageAsset.src}
          alt={imageAsset.alt}
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover filter contrast-115 brightness-95 scale-100 group-hover:scale-108 transition-transform duration-700 ease-out"
        />

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#062039]/80 via-transparent to-transparent md:bg-gradient-to-r md:from-[#062039]/60 md:to-transparent" />

        {/* Subtle Grain Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: '16px 16px'
          }}
        />
      </div>
    </motion.div>
  );
}
