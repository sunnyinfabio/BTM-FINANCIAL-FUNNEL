'use client';

import React from 'react';
import { ChallengeOption } from '@/data/types';
import { cn } from '@/lib/utils';
import {
  BarChart3,
  Code2,
  Cpu,
  TrendingUp,
  Cloud,
  Scale,
  Sparkles,
  Check,
  ArrowRight
} from 'lucide-react';

interface ChallengeCardProps {
  challenge: ChallengeOption;
  isSelected: boolean;
  onToggle: (id: string) => void;
  onExploreDetails: (challenge: ChallengeOption) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 className="h-5 w-5" />,
  Code2: <Code2 className="h-5 w-5" />,
  Cpu: <Cpu className="h-5 w-5" />,
  TrendingUp: <TrendingUp className="h-5 w-5" />,
  Cloud: <Cloud className="h-5 w-5" />,
  Scale: <Scale className="h-5 w-5" />,
  Sparkles: <Sparkles className="h-5 w-5" />
};

export function ChallengeCard({
  challenge,
  isSelected,
  onToggle,
  onExploreDetails
}: ChallengeCardProps) {
  const icon = ICON_MAP[challenge.iconName] || <Sparkles className="h-5 w-5" />;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onToggle(challenge.id);
    }
  };

  return (
    <div
      tabIndex={0}
      role="checkbox"
      aria-checked={isSelected}
      onKeyDown={handleKeyDown}
      onClick={() => onToggle(challenge.id)}
      className={cn(
        'group relative flex flex-col justify-between rounded-[8px] border bg-white p-5 sm:p-6 text-left transition-all duration-200 cursor-pointer outline-none select-none focus-visible:ring-2 focus-visible:ring-[#009345] focus-visible:ring-offset-2',
        isSelected
          ? 'border-[#009345] ring-2 ring-[#009345] shadow-md shadow-emerald-950/5 bg-gradient-to-b from-white to-emerald-50/25'
          : 'border-slate-200 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 hover:shadow-slate-900/5'
      )}
    >
      {/* Top Subtle Visual Accent Indicator */}
      <div
        className={cn(
          'absolute top-0 left-4 right-4 h-[2px] rounded-t-full transition-all duration-300',
          isSelected
            ? 'bg-[#009345]'
            : 'bg-transparent group-hover:bg-[#009345]/50'
        )}
      />

      <div>
        {/* Card Header: Minimal Icon + Visual Checkmark */}
        <div className="flex items-start justify-between gap-3">
          <div
            className={cn(
              'flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] border transition-all duration-200',
              isSelected
                ? 'bg-[#009345] text-white border-[#009345] shadow-xs'
                : 'bg-slate-50 text-[#062039] border-slate-200 group-hover:bg-[#062039] group-hover:text-white group-hover:border-[#062039]'
            )}
          >
            <div className="transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-0.5">
              {icon}
            </div>
          </div>

          {/* Visual Checkmark Box (Purely Visual Feedback) */}
          <div
            className={cn(
              'flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] border transition-all duration-200',
              isSelected
                ? 'border-[#009345] bg-[#009345] text-white shadow-2xs'
                : 'border-slate-300 bg-white text-transparent group-hover:border-slate-400'
            )}
          >
            <Check className="h-3.5 w-3.5 stroke-[3]" />
          </div>
        </div>

        {/* Title and Short Description */}
        <div className="mt-4">
          <h3
            className={cn(
              'text-base sm:text-lg font-bold tracking-tight uppercase transition-colors',
              isSelected ? 'text-[#062039]' : 'text-[#062039] group-hover:text-[#009345]'
            )}
          >
            {challenge.title}
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {challenge.shortDescription}
          </p>
        </div>
      </div>

      {/* Card Action Footer: Clean Explore Link */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-end">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onExploreDetails(challenge);
          }}
          className="inline-flex items-center gap-1 text-xs font-bold text-[#009345] hover:text-[#007a38] group-hover:translate-x-0.5 transition-all p-1 rounded-[2px]"
          aria-label={`Explore details for ${challenge.title}`}
        >
          <span>Explore</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
