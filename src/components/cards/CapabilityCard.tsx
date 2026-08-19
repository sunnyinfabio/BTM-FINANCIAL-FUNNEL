'use client';

import React from 'react';
import Image from 'next/image';
import { Capability } from '@/data/types';
import { getImage } from '@/data/images';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  CheckCircle2,
  ArrowRight,
  BookOpen
} from 'lucide-react';

interface CapabilityCardProps {
  capability: Capability;
  index: number;
  onExplore: (capability: Capability) => void;
  onViewRelatedWork: (capability: Capability) => void;
}

export function CapabilityCard({
  capability,
  index,
  onExplore,
  onViewRelatedWork
}: CapabilityCardProps) {
  // Mapping per user capability visual specification
  const imageKeyMap: Record<string, string> = {
    'data-analytics': 'dataAnalytics',                     // Analyst + dashboard
    'application-services': 'applicationServices',         // Enterprise technology
    'technology-consulting': 'technologyConsulting',       // Enterprise technology
    'ai-ml': 'aiAutomation',                               // AI/data network
    'quant-analytics': 'quantAnalytics',                   // Quantitative charts
    'fixed-income-equity-analytics': 'financialAnalytics', // Quantitative charts
    'cloud-computing': 'cloudInfrastructure',             // Cloud infrastructure
    'valuation-advisory-services': 'valuationAdvisory',    // Property + valuation analytics
    'structured-finance': 'structuredFinance',             // Commercial real estate / capital markets
    'specialized-support-team': 'advisory'                 // Executive financial analysis
  };

  const imageAsset = getImage(imageKeyMap[capability.id] || 'dataAnalytics');

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-2xs hover:shadow-lg transition-all duration-200">
      {/* Top Banner / Image Area with subtle corporate overlay */}
      <div className="relative h-44 w-full overflow-hidden bg-[#062039]">
        <Image
          src={imageAsset.src}
          alt={imageAsset.alt}
          fill
          className="object-cover opacity-75 group-hover:scale-103 group-hover:opacity-85 transition-all duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#062039] via-[#062039]/40 to-transparent" />

        {/* Priority Rank & Category Badge */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <Badge variant="emerald" size="sm">
            Match #{index + 1}
          </Badge>

          <Badge variant="navy" size="sm">
            {capability.category}
          </Badge>
        </div>

        {/* Capability Title inside banner */}
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="text-lg font-extrabold tracking-tight text-white leading-tight">
            {capability.name}
          </h3>
        </div>
      </div>

      {/* Body Content */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          {/* Tagline */}
          <p className="text-xs font-semibold text-slate-800 leading-snug">
            "{capability.tagline}"
          </p>

          <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
            {capability.shortDescription}
          </p>

          {/* Benefits Bullets */}
          <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-2">
            <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#737373]">
              Key Value Points
            </div>
            <ul className="space-y-1.5">
              {capability.benefits.map((benefit, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#009345] shrink-0 mt-0.5" />
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card Footer CTAs */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <Button
            variant="emerald"
            size="sm"
            onClick={() => onExplore(capability)}
            rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
            className="flex-1 justify-center"
          >
            Explore capability
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewRelatedWork(capability)}
            leftIcon={<BookOpen className="h-3.5 w-3.5 text-slate-600" />}
            className="flex-1 justify-center text-xs"
          >
            View related work
          </Button>
        </div>
      </div>
    </div>
  );
}
