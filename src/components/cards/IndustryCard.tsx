'use client';

import React from 'react';
import { IndustryOption } from '@/data/types';
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
  Check
} from 'lucide-react';

interface IndustryCardProps {
  industry: IndustryOption;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Building2: <Building2 className="h-4.5 w-4.5" />,
  TrendingUp: <TrendingUp className="h-4.5 w-4.5" />,
  Landmark: <Landmark className="h-4.5 w-4.5" />,
  LineChart: <LineChart className="h-4.5 w-4.5" />,
  ShieldCheck: <ShieldCheck className="h-4.5 w-4.5" />,
  Briefcase: <Briefcase className="h-4.5 w-4.5" />,
  Coins: <Coins className="h-4.5 w-4.5" />,
  Globe: <Globe className="h-4.5 w-4.5" />
};

export function IndustryCard({ industry, isSelected, onSelect }: IndustryCardProps) {
  const icon = ICON_MAP[industry.iconName] || <Building2 className="h-4.5 w-4.5" />;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onSelect(industry.id);
    }
  };

  return (
    <div
      tabIndex={0}
      role="radio"
      aria-checked={isSelected}
      onKeyDown={handleKeyDown}
      onClick={() => onSelect(industry.id)}
      className={cn(
        'group relative flex items-center justify-between rounded-[6px] border p-3.5 text-left transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#009345] focus-visible:ring-offset-1',
        isSelected
          ? 'border-[#009345] bg-white ring-2 ring-[#009345] shadow-xs'
          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            'flex h-9 w-9 shrink-0 items-center justify-center rounded-[4px] transition-colors',
            isSelected
              ? 'bg-[#009345] text-white'
              : 'bg-slate-100 text-[#062039] group-hover:bg-[#062039] group-hover:text-white'
          )}
        >
          {icon}
        </div>
        <div>
          <h4
            className={cn(
              'text-xs sm:text-sm font-bold tracking-tight transition-colors',
              isSelected ? 'text-[#062039]' : 'text-slate-800'
            )}
          >
            {industry.name}
          </h4>
          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
            {industry.description}
          </p>
        </div>
      </div>

      <div
        className={cn(
          'flex h-4 w-4 shrink-0 items-center justify-center rounded-[2px] border transition-all ml-2',
          isSelected
            ? 'border-[#009345] bg-[#009345] text-white'
            : 'border-slate-300 bg-white text-transparent group-hover:border-slate-400'
        )}
      >
        <Check className="h-2.5 w-2.5 stroke-[3]" />
      </div>
    </div>
  );
}
