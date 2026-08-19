'use client';

import React from 'react';
import { CaseStudy } from '@/data/types';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, Building2 } from 'lucide-react';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  onOpenDetails: (caseStudy: CaseStudy) => void;
}

export function CaseStudyCard({ caseStudy, onOpenDetails }: CaseStudyCardProps) {
  return (
    <div
      onClick={() => onOpenDetails(caseStudy)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[8px] border border-slate-200 bg-white p-5 shadow-2xs hover:border-slate-300 hover:shadow-lg transition-all duration-200 cursor-pointer text-left"
    >
      <div>
        {/* Header Tags */}
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="navy" size="sm">
            {caseStudy.category}
          </Badge>
          <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
            <Building2 className="h-3 w-3 text-slate-400" />
            {caseStudy.industry}
          </span>
        </div>

        {/* Title */}
        <h4 className="mt-3 text-base font-bold tracking-tight text-[#062039] group-hover:text-[#009345] transition-colors">
          {caseStudy.title}
        </h4>

        {/* Subtitle */}
        <p className="mt-1 text-xs font-medium text-slate-600">
          {caseStudy.subtitle}
        </p>

        {/* Challenge Snippet */}
        <div className="mt-3 rounded-[4px] bg-slate-50 border border-slate-100 p-3">
          <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#737373]">
            Challenge Focus
          </div>
          <p className="text-xs text-slate-600 line-clamp-2 mt-1">
            {caseStudy.challengeSummary}
          </p>
        </div>

        {/* Service Tags */}
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {caseStudy.serviceTags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-semibold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded-[2px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs font-bold text-[#009345] group-hover:underline flex items-center gap-1">
          Explore case study details
        </span>
        <div className="flex h-6 w-6 items-center justify-center rounded-[2px] bg-slate-100 text-slate-600 group-hover:bg-[#009345] group-hover:text-white transition-colors">
          <ArrowRight className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
}
