'use client';

import React from 'react';
import Image from 'next/image';
import { ChallengeOption } from '@/data/types';
import { getImage } from '@/data/images';
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
  index: number;
  isSelected: boolean;
  isHoveredByOther?: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  onToggle: (id: string) => void;
  onExploreDetails: (challenge: ChallengeOption) => void;
  className?: string;
  isLarge?: boolean;
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

const IMAGE_KEY_MAP: Record<string, string> = {
  'data-analytics': 'dataAnalytics',
  'tech-applications': 'technologyConsulting',
  'ai-automation': 'aiAutomation',
  'financial-analytics': 'quantAnalytics',
  'cloud-infra': 'cloudInfrastructure',
  'advisory-valuation': 'valuationAdvisory',
  'something-else': 'advisory'
};

export function ChallengeCard({
  challenge,
  index,
  isSelected,
  isHoveredByOther = false,
  onHoverStart,
  onHoverEnd,
  onToggle,
  onExploreDetails,
  className,
  isLarge = false
}: ChallengeCardProps) {
  const icon = ICON_MAP[challenge.iconName] || <Sparkles className="h-5 w-5" />;
  const bgImage = getImage(IMAGE_KEY_MAP[challenge.id] || 'dataAnalytics');

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
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-xl border text-left transition-all duration-350 cursor-pointer outline-none select-none focus-visible:ring-2 focus-visible:ring-[#009345] focus-visible:ring-offset-2',
        isLarge ? 'p-6 sm:p-8 min-h-[230px]' : 'p-5 sm:p-6 min-h-[195px]',
        isSelected
          ? 'border-[#009345] ring-2 ring-[#009345] bg-gradient-to-b from-white via-white to-emerald-50/50 shadow-2xl shadow-emerald-950/10 scale-[1.015]'
          : isHoveredByOther
          ? 'border-slate-200 bg-white/70 opacity-70 scale-[0.99]'
          : 'border-slate-200/90 bg-white hover:border-[#009345] hover:shadow-2xl hover:-translate-y-1',
        className
      )}
    >
      {/* Background Cinematic Visual with Dark Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] group-hover:opacity-[0.16] transition-opacity duration-500 overflow-hidden">
        <Image
          src={bgImage.src}
          alt=""
          fill
          className="object-cover filter grayscale contrast-125 scale-100 group-hover:scale-108 transition-transform duration-700 ease-out"
          sizes="600px"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      {/* Top Emerald Accent Strip that Expands on Hover */}
      <div
        className={cn(
          'absolute top-0 left-0 right-0 h-[3px] transition-all duration-300',
          isSelected
            ? 'bg-[#009345]'
            : 'bg-transparent group-hover:bg-[#009345]'
        )}
      />

      <div className="relative z-10">
        {/* Card Header: Index + Icon + Visual Checkmark */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#009345] transition-colors">
              0{index + 1}
            </span>
            <div
              className={cn(
                'flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] border transition-all duration-300',
                isSelected
                  ? 'bg-[#009345] text-white border-[#009345] shadow-xs'
                  : 'bg-slate-50 text-[#062039] border-slate-200/90 group-hover:bg-[#062039] group-hover:text-white group-hover:border-[#062039]'
              )}
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {icon}
              </div>
            </div>
          </div>

          {/* Visual Checkmark Box */}
          <div
            className={cn(
              'flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border transition-all duration-200',
              isSelected
                ? 'border-[#009345] bg-[#009345] text-white shadow-2xs'
                : 'border-slate-300 bg-white text-transparent group-hover:border-slate-400'
            )}
          >
            <Check className="h-3.5 w-3.5 stroke-[3]" />
          </div>
        </div>

        {/* Title and Short Description with Smooth Shift */}
        <div className="mt-4">
          <h3
            className={cn(
              'font-extrabold tracking-tight uppercase transition-all duration-300',
              isLarge ? 'text-lg sm:text-xl lg:text-2xl' : 'text-base sm:text-lg',
              isSelected ? 'text-[#062039]' : 'text-[#062039] group-hover:text-[#009345] group-hover:-translate-y-0.5'
            )}
          >
            {challenge.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-lg transition-transform duration-300 group-hover:translate-x-0.5">
            {challenge.shortDescription}
          </p>
        </div>
      </div>

      {/* Card Action Footer: Clean Explore Link */}
      <div className="relative z-10 mt-5 pt-3.5 border-t border-slate-100/90 flex items-center justify-end">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onExploreDetails(challenge);
          }}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009345] hover:text-[#007a38] group-hover:translate-x-1 transition-all p-1 rounded-[2px]"
          aria-label={`Explore details for ${challenge.title}`}
        >
          <span>EXPLORE</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
