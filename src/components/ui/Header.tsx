'use client';

import React from 'react';
import { ArrowLeft, RefreshCw, Compass, ShieldCheck } from 'lucide-react';
import { Button } from './Button';
import { Badge } from './Badge';
import { cn } from '@/lib/utils';

interface HeaderProps {
  currentStage: number;
  totalStages?: number;
  onBack?: () => void;
  onReset?: () => void;
  onOpenAllCapabilities?: () => void;
  onNavigateToStage?: (stage: number) => void;
}

const STAGE_NAMES: Record<number, string> = {
  1: 'DISCOVER',
  2: 'CHALLENGE',
  3: 'CONTEXT',
  4: 'SOLUTION',
  5: 'CONNECT'
};

export function Header({
  currentStage,
  totalStages = 5,
  onBack,
  onReset,
  onOpenAllCapabilities,
  onNavigateToStage
}: HeaderProps) {
  const formattedStage = String(currentStage).padStart(2, '0');
  const formattedTotal = String(totalStages).padStart(2, '0');
  const stageName = STAGE_NAMES[currentStage] || 'Discovery';

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/98 backdrop-blur-sm transition-all shadow-xs">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* BTM Financial Official Brand Logo */}
        <div className="flex items-center gap-6">
          <div
            onClick={() => onNavigateToStage && onNavigateToStage(1)}
            className="flex items-center gap-3 cursor-pointer group"
            title="Return to Stage 1 (Discover)"
          >
            <div className="relative h-10 w-auto flex items-center select-none">
              <img
                src="/images/logo.jpg"
                alt="BTM Financial - Innovation At Work"
                className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
              />
            </div>

            <div className="hidden lg:flex items-center pl-4 border-l border-slate-200">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                Interactive Solution Discovery
              </span>
            </div>
          </div>
        </div>

        {/* Center Interactive Stage Tabs (Clickable to jump directly to any stage) */}
        <div className="hidden sm:flex items-center gap-1.5 bg-slate-100/90 p-1 rounded-[6px] border border-slate-200/80">
          {[1, 2, 3, 4, 5].map((step) => {
            const isCurrent = step === currentStage;
            const isCompleted = step < currentStage;

            return (
              <button
                key={step}
                type="button"
                onClick={() => onNavigateToStage && onNavigateToStage(step)}
                className={cn(
                  'flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] text-xs font-semibold transition-all cursor-pointer select-none',
                  isCurrent
                    ? 'bg-white text-[#062039] shadow-xs border border-slate-200/80 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                )}
                title={`Jump to Stage 0${step}: ${STAGE_NAMES[step]}`}
              >
                <span
                  className={cn(
                    'h-1.5 w-1.5 rounded-full',
                    isCurrent ? 'bg-[#009345]' : isCompleted ? 'bg-[#062039]' : 'bg-slate-300'
                  )}
                />
                <span>0{step}</span>
                <span className="hidden md:inline font-medium text-[11px] text-slate-500">
                  {STAGE_NAMES[step]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2">
          {currentStage > 1 && onBack && (
            <Button
              variant="outline"
              size="sm"
              onClick={onBack}
              leftIcon={<ArrowLeft className="h-3.5 w-3.5" />}
              aria-label="Go back to previous stage"
            >
              <span className="hidden sm:inline">Back</span>
            </Button>
          )}

          {onOpenAllCapabilities && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onOpenAllCapabilities}
              leftIcon={<Compass className="h-3.5 w-3.5 text-[#009345]" />}
              className="text-xs font-semibold text-slate-700 hover:text-[#009345]"
            >
              Services Directory
            </Button>
          )}

          {currentStage > 1 && onReset && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onReset}
              leftIcon={<RefreshCw className="h-3.5 w-3.5" />}
              className="text-slate-400 hover:text-slate-700 px-2"
              title="Restart Discovery"
              aria-label="Restart Discovery"
            />
          )}
        </div>
      </div>

      {/* Signature BTM Green Header Progress Bar */}
      <div className="h-[2px] w-full bg-slate-100">
        <div
          className="h-full bg-[#009345] transition-all duration-500 ease-out"
          style={{ width: `${(currentStage / totalStages) * 100}%` }}
        />
      </div>
    </header>
  );
}
