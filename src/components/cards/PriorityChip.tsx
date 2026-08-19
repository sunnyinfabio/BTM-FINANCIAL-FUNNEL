'use client';

import React from 'react';
import { PriorityOption, JourneyStageOption } from '@/data/types';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface PriorityChipProps {
  priority: PriorityOption;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

export function PriorityChip({ priority, isSelected, onToggle }: PriorityChipProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onToggle(priority.id);
    }
  };

  return (
    <button
      type="button"
      tabIndex={0}
      role="checkbox"
      aria-checked={isSelected}
      onKeyDown={handleKeyDown}
      onClick={() => onToggle(priority.id)}
      className={cn(
        'group inline-flex items-center gap-2 rounded-[4px] border px-3.5 py-1.5 text-xs font-semibold transition-all duration-150 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-[#009345] focus-visible:ring-offset-1',
        isSelected
          ? 'border-[#009345] bg-[#009345] text-white shadow-2xs hover:bg-[#007a38]'
          : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50'
      )}
    >
      <div
        className={cn(
          'flex h-3.5 w-3.5 items-center justify-center rounded-[2px] border transition-colors',
          isSelected
            ? 'border-white bg-white/20 text-white'
            : 'border-slate-300 text-transparent group-hover:border-slate-400'
        )}
      >
        <Check className="h-2 w-2 stroke-[3]" />
      </div>
      <span>{priority.label}</span>
    </button>
  );
}

interface JourneyCardProps {
  stage: JourneyStageOption;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function JourneyCard({ stage, isSelected, onSelect }: JourneyCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onSelect(stage.id);
    }
  };

  return (
    <div
      tabIndex={0}
      role="radio"
      aria-checked={isSelected}
      onKeyDown={handleKeyDown}
      onClick={() => onSelect(stage.id)}
      className={cn(
        'group relative flex items-start justify-between rounded-[6px] border p-3.5 text-left transition-all duration-150 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#009345] focus-visible:ring-offset-1',
        isSelected
          ? 'border-[#009345] bg-white ring-2 ring-[#009345]'
          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
      )}
    >
      <div className="pr-2">
        <h5
          className={cn(
            'text-xs sm:text-sm font-bold tracking-tight',
            isSelected ? 'text-[#062039]' : 'text-slate-800'
          )}
        >
          {stage.title}
        </h5>
        <p className="text-[11px] text-slate-500 mt-0.5">{stage.description}</p>
      </div>

      <div
        className={cn(
          'flex h-4 w-4 shrink-0 items-center justify-center rounded-full border mt-0.5 transition-all',
          isSelected
            ? 'border-[#009345] bg-[#009345] text-white'
            : 'border-slate-300 bg-white text-transparent group-hover:border-slate-400'
        )}
      >
        <div className={cn('h-1.5 w-1.5 rounded-full bg-white', isSelected ? 'block' : 'hidden')} />
      </div>
    </div>
  );
}
