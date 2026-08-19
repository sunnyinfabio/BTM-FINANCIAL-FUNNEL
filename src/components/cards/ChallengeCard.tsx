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
  isSelected: boolean;
  onToggle: (id: string) => void;
  onExploreDetails: (challenge: ChallengeOption) => void;
  className?: string;
  isWide?: boolean;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 className="h-4.5 w-4.5 sm:h-5 sm:w-5" />,
  Code2: <Code2 className="h-4.5 w-4.5 sm:h-5 sm:w-5" />,
  Cpu: <Cpu className="h-4.5 w-4.5 sm:h-5 sm:w-5" />,
  TrendingUp: <TrendingUp className="h-4.5 w-4.5 sm:h-5 sm:w-5" />,
  Cloud: <Cloud className="h-4.5 w-4.5 sm:h-5 sm:w-5" />,
  Scale: <Scale className="h-4.5 w-4.5 sm:h-5 sm:w-5" />,
  Sparkles: <Sparkles className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
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
  isSelected,
  onToggle,
  onExploreDetails,
  className,
  isWide = false
}: ChallengeCardProps) {
  const icon = ICON_MAP[challenge.iconName] || <Sparkles className="h-4.5 w-4.5 sm:h-5 sm:w-5" />;
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
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-[8px] border p-4 sm:p-6 text-left transition-all duration-200 cursor-pointer outline-none select-none focus-visible:ring-2 focus-visible:ring-[#009345] focus-visible:ring-offset-2',
        isSelected
          ? 'border-[#009345] ring-2 ring-[#009345] bg-gradient-to-b from-white via-white to-emerald-50/30 shadow-md shadow-emerald-950/5'
          : 'border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-xl hover:-translate-y-0.5 sm:hover:-translate-y-1',
        className
      )}
    >
      {/* Subtle Ambient Watermark in Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.045] group-hover:opacity-[0.08] transition-opacity duration-500 overflow-hidden">
        <Image
          src={bgImage.src}
          alt=""
          fill
          className="object-cover filter grayscale contrast-125"
          sizes="600px"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      {/* Top Subtle Visual Accent Indicator */}
      <div
        className={cn(
          'absolute top-0 left-0 right-0 h-[2.5px] transition-all duration-300',
          isSelected
            ? 'bg-[#009345]'
            : 'bg-transparent group-hover:bg-[#009345]/50'
        )}
      />

      <div className="relative z-10">
        {/* Card Header: Minimal Icon + Visual Checkmark */}
        <div className="flex items-start justify-between gap-2.5 sm:gap-3">
          <div
            className={cn(
              'flex h-9 w-9 sm:h-10.5 sm:w-10.5 shrink-0 items-center justify-center rounded-[4px] border transition-all duration-200',
              isSelected
                ? 'bg-[#009345] text-white border-[#009345] shadow-xs'
                : 'bg-slate-50 text-[#062039] border-slate-200/90 group-hover:bg-[#062039] group-hover:text-white group-hover:border-[#062039]'
            )}
          >
            <div className="transition-transform duration-200 group-hover:scale-110">
              {icon}
            </div>
          </div>

          {/* Visual Checkmark Box */}
          <div
            className={cn(
              'flex h-4.5 w-4.5 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-[3px] border transition-all duration-200',
              isSelected
                ? 'border-[#009345] bg-[#009345] text-white shadow-2xs'
                : 'border-slate-300 bg-white text-transparent group-hover:border-slate-400'
            )}
          >
            <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 stroke-[3]" />
          </div>
        </div>

        {/* Title and Short Description */}
        <div className="mt-3 sm:mt-4">
          <h3
            className={cn(
              'font-extrabold tracking-tight uppercase transition-colors',
              isWide ? 'text-base sm:text-lg lg:text-xl' : 'text-sm sm:text-base lg:text-lg',
              isSelected ? 'text-[#062039]' : 'text-[#062039] group-hover:text-[#009345]'
            )}
          >
            {challenge.title}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-lg">
            {challenge.shortDescription}
          </p>
        </div>
      </div>

      {/* Card Action Footer: Clean Explore Link */}
      <div className="relative z-10 mt-3 sm:mt-5 pt-2.5 sm:pt-3 border-t border-slate-100/90 flex items-center justify-end">
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
