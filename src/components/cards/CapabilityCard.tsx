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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onExplore(capability)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-md hover:border-[#009345] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-350 cursor-pointer"
    >
      {/* Top Animated Green Accent Line on Hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-[#009345] transition-all duration-300 z-30" />

      {/* 60% Visual Area with Dark Editorial Vignette & Smooth Hover Zoom */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-[#062039]">
        <Image
          src={imageAsset.src}
          alt={imageAsset.alt}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover filter contrast-115 brightness-95 scale-100 group-hover:scale-108 transition-transform duration-700 ease-out"
        />

        {/* Gradient Vignette for Legibility and Cinematic Tone */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#062039]/85 via-[#062039]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#062039]/50 via-transparent to-[#062039]/30" />

        {/* Grain Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: '16px 16px'
          }}
        />

        {/* Priority Rank & Category Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20">
          <Badge variant="emerald" size="sm" className="font-mono font-bold shadow-xs">
            0{index + 1}
          </Badge>
          <Badge variant="navy" size="sm" className="shadow-xs">
            {capability.category}
          </Badge>
        </div>

        {/* Capability Name Inset inside Bottom of Banner */}
        <div className="absolute bottom-3.5 left-4 right-4 z-20">
          <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-white leading-tight drop-shadow-xs group-hover:text-emerald-300 transition-colors">
            {capability.name}
          </h3>
        </div>
      </div>

      {/* 40% Concise Content Area */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 space-y-4">
        <div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {capability.shortDescription}
          </p>
        </div>

        {/* Card Action Footer */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#009345] group-hover:underline inline-flex items-center gap-1.5">
            <span>EXPLORE CAPABILITY</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
