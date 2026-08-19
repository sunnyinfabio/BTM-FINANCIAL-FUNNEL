'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BTM_CHALLENGES } from '@/data/challenges';
import { ChallengeOption } from '@/data/types';
import { ChallengeCard } from '@/components/cards/ChallengeCard';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface Stage2ChallengeProps {
  selectedChallenges: string[];
  onToggleChallenge: (id: string) => void;
  onExploreDetails: (challenge: ChallengeOption) => void;
  onContinue: () => void;
}

export function Stage2Challenge({
  selectedChallenges,
  onToggleChallenge,
  onExploreDetails,
  onContinue
}: Stage2ChallengeProps) {
  const hasSelection = selectedChallenges.length > 0;

  // The 6 Primary Core Challenges (3x2 Grid)
  const primaryChallenges = BTM_CHALLENGES.slice(0, 6);
  // 7th Challenge: Something Else / Bespoke Challenge
  const somethingElseChallenge = BTM_CHALLENGES[6];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-center max-w-2xl mx-auto mb-8 sm:mb-10"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Badge variant="emerald" size="sm">
            Stage 02
          </Badge>
          <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
            Challenge Discovery
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#062039]">
          What are you looking to improve?
        </h2>

        {/* Signature BTM Bar Separator */}
        <div className="btm-separator btm-separator-center" />

        <p className="text-sm sm:text-base text-slate-600 font-normal">
          Select one or more challenge areas. Click <span className="font-semibold text-[#009345]">"Explore →"</span> on any card to preview typical business problems and example outcomes without leaving this step.
        </p>

        {/* Multi-select count pill */}
        <div className="mt-3 flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
          <span className="rounded-[2px] bg-slate-100 px-2 py-0.5 text-slate-700 font-bold">
            {selectedChallenges.length} selected
          </span>
          <span>(Multiple selections supported)</span>
        </div>
      </motion.div>

      {/* 3x2 Grid for the 6 Core Challenges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {primaryChallenges.map((challenge) => {
          const isSelected = selectedChallenges.includes(challenge.id);

          return (
            <ChallengeCard
              key={challenge.id}
              challenge={challenge}
              isSelected={isSelected}
              onToggle={onToggleChallenge}
              onExploreDetails={onExploreDetails}
            />
          );
        })}
      </motion.div>

      {/* 7th Card: Something Else (Full Width Balanced Card) */}
      {somethingElseChallenge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="mt-5"
        >
          <div
            tabIndex={0}
            role="checkbox"
            aria-checked={selectedChallenges.includes(somethingElseChallenge.id)}
            onClick={() => onToggleChallenge(somethingElseChallenge.id)}
            onKeyDown={(e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                onToggleChallenge(somethingElseChallenge.id);
              }
            }}
            className={`group relative flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-[8px] border p-4 sm:p-5 cursor-pointer transition-all duration-200 outline-none select-none focus-visible:ring-2 focus-visible:ring-[#009345] focus-visible:ring-offset-2 ${
              selectedChallenges.includes(somethingElseChallenge.id)
                ? 'border-[#009345] ring-2 ring-[#009345] bg-gradient-to-r from-white to-emerald-50/25 shadow-sm'
                : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5'
            }`}
          >
            <div className="flex items-center gap-3.5">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] border transition-colors ${
                  selectedChallenges.includes(somethingElseChallenge.id)
                    ? 'bg-[#009345] text-white border-[#009345]'
                    : 'bg-slate-50 text-[#062039] border-slate-200 group-hover:bg-[#062039] group-hover:text-white'
                }`}
              >
                <Sparkles className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#062039] uppercase group-hover:text-[#009345] transition-colors">
                  {somethingElseChallenge.title}
                </h3>
                <p className="text-xs text-slate-600 font-normal mt-0.5">
                  {somethingElseChallenge.shortDescription}
                </p>
              </div>
            </div>

            <div className="mt-3 sm:mt-0 flex items-center justify-end w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onExploreDetails(somethingElseChallenge);
                }}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#009345] hover:text-[#007a38] group-hover:translate-x-0.5 transition-all p-1"
              >
                <span>Explore</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Floating Bottom Sticky Action Bar */}
      <div className="sticky bottom-6 mt-10 z-30 flex items-center justify-between rounded-[6px] border border-slate-200 bg-white/98 backdrop-blur-sm p-4 shadow-lg max-w-2xl mx-auto">
        <div className="flex items-center gap-2 text-xs text-slate-600 pl-1">
          {hasSelection ? (
            <div className="flex items-center gap-1.5 text-slate-800 font-medium">
              <CheckCircle2 className="h-4 w-4 text-[#009345]" />
              <span>
                Ready with <strong className="text-[#062039]">{selectedChallenges.length}</strong> focus {selectedChallenges.length === 1 ? 'area' : 'areas'}
              </span>
            </div>
          ) : (
            <span className="text-slate-500">Please select at least one challenge to proceed</span>
          )}
        </div>

        <Button
          variant="emerald"
          size="md"
          disabled={!hasSelection}
          onClick={onContinue}
          rightIcon={<ArrowRight className="h-4 w-4" />}
        >
          Continue to Business Context
        </Button>
      </div>
    </div>
  );
}
