'use client';

import React from 'react';
import { Capability } from '@/data/types';
import { getImage } from '@/data/images';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { BtmImageFrame } from '@/components/ui/BtmImageFrame';
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
    <div
      onClick={() => onExplore(capability)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[8px] border border-slate-200/90 bg-white shadow-xs hover:border-[#009345] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      {/* Large Image Area with Standardized BTM Frame */}
      <div className="relative">
        <BtmImageFrame
          src={imageAsset.src}
          alt={imageAsset.alt}
          aspectRatio="16/10"
          className="rounded-b-none border-0"
        />

        {/* Priority Rank & Category Badge */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
          <Badge variant="emerald" size="sm">
            0{index + 1}
          </Badge>
          <Badge variant="navy" size="sm">
            {capability.category}
          </Badge>
        </div>
      </div>

      {/* Concise Body Content */}
      <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
        <div>
          <h3 className="text-lg font-extrabold tracking-tight text-[#062039] group-hover:text-[#009345] transition-colors leading-tight">
            {capability.name}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {capability.shortDescription}
          </p>
        </div>

        {/* Card Action */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-bold text-[#009345] group-hover:underline inline-flex items-center gap-1">
            <span>Explore capability</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </div>
  );
}
