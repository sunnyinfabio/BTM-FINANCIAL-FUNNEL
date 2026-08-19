'use client';

import React from 'react';
import { ArrowLeft, RefreshCw, Compass } from 'lucide-react';
import { Button } from './Button';
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
  2: 'FOCUS',
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
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/90 bg-white/95 backdrop-blur-md transition-all shadow-2xs">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* BTM Financial Official Brand Logo */}
        <div className="flex items-center gap-6">
          <div
            onClick={() => onNavigateToStage && onNavigateToStage(1)}
            className="flex items-center gap-3 cursor-pointer group select-none"
            title="Return to Stage 1 (Discover)"
          >
            <div className="relative h-10 w-auto flex items-center">
              <img
                src="/images/logo.jpg"
                alt="BTM Financial - Innovation At Work"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
              />
            </div>

            <div className="hidden lg:flex items-center pl-4 border-l border-slate-200">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[2.5px]">
                Solution Discovery
              </span>
            </div>
          </div>
        </div>

        {/* Center Minimal Journey Navigation: 01 DISCOVER • 02 FOCUS • 03 CONTEXT • 04 SOLUTION • 05 CONNECT */}
        <nav className="hidden sm:flex items-center gap-1 sm:gap-2">
          {[1, 2, 3, 4, 5].map((step) => {
            const isCurrent = step === currentStage;
            const isCompleted = step < currentStage;

            return (
              <button
                key={step}
                type="button"
                onClick={() => onNavigateToStage && onNavigateToStage(step)}
                className={cn(
                  'relative px-3 py-1.5 rounded-[4px] text-xs font-mono font-bold tracking-wider transition-all duration-300 cursor-pointer select-none',
                  isCurrent
                    ? 'text-[#009345] bg-emerald-50/80 shadow-2xs'
                    : isCompleted
                    ? 'text-[#062039] hover:text-[#009345]'
                    : 'text-slate-400 hover:text-slate-600'
                )}
                title={`Jump to Stage 0${step}: ${STAGE_NAMES[step]}`}
              >
                <div className="flex items-center gap-1.5">
                  <span
                    className={cn(
                      'h-1.5 w-1.5 rounded-full transition-colors',
                      isCurrent ? 'bg-[#009345]' : isCompleted ? 'bg-[#062039]' : 'bg-slate-300'
                    )}
                  />
                  <span>0{step}</span>
                  <span className="hidden md:inline font-semibold">{STAGE_NAMES[step]}</span>
                </div>

                {isCurrent && (
                  <div className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#009345] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2.5">
          {currentStage > 1 && onBack && (
            <Button
              variant="outline"
              size="sm"
              onClick={onBack}
              leftIcon={<ArrowLeft className="h-3.5 w-3.5" />}
              aria-label="Go back"
              className="text-xs font-mono font-bold"
            >
              <span className="hidden sm:inline">BACK</span>
            </Button>
          )}

          {onOpenAllCapabilities && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onOpenAllCapabilities}
              leftIcon={<Compass className="h-3.5 w-3.5 text-[#009345]" />}
              className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 hover:text-[#009345]"
            >
              <span className="hidden md:inline">SERVICES</span>
            </Button>
          )}

          <div className="hidden xl:flex items-center pl-3 border-l border-slate-200 text-[10px] font-mono font-bold text-slate-400 tracking-[2px] uppercase">
            BTM FINANCIAL
          </div>

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

      {/* Signature Animated BTM Green Header Progress Bar */}
      <div className="h-[2px] w-full bg-slate-100 overflow-hidden">
        <div
          className="h-full bg-[#009345] transition-all duration-500 ease-out"
          style={{ width: `${(currentStage / totalStages) * 100}%` }}
        />
      </div>
    </header>
  );
}
