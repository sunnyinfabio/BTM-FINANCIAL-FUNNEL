'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FunnelState, ChallengeOption, Capability, CaseStudy } from '@/data/types';
import { calculateRecommendations } from '@/data/recommendations';
import { BTM_CHALLENGES } from '@/data/challenges';
import { BTM_INDUSTRIES } from '@/data/industries';
import { Header } from '@/components/ui/Header';
import { Stage1Discover } from '@/components/funnel/Stage1Discover';
import { Stage2Challenge } from '@/components/funnel/Stage2Challenge';
import { Stage3BusinessContext } from '@/components/funnel/Stage3BusinessContext';
import { Stage4Solution } from '@/components/funnel/Stage4Solution';
import { Stage5Connect } from '@/components/funnel/Stage5Connect';
import { AnalyzingTransition } from '@/components/animations/AnalyzingTransition';
import { ChallengeDetailDrawer } from '@/components/modals/ChallengeDetailDrawer';
import { CaseStudyModal } from '@/components/modals/CaseStudyModal';
import { CapabilityDetailModal } from '@/components/modals/CapabilityDetailModal';
import { AllCapabilitiesModal } from '@/components/modals/AllCapabilitiesModal';
import { AmbientGlowFollower } from '@/components/animations/AmbientGlowFollower';
import { BTM_CASE_STUDIES } from '@/data/caseStudies';
import { Layers, ArrowRight, Sparkles, Check } from 'lucide-react';

export function FunnelShell() {
  // Funnel State
  const [funnelState, setFunnelState] = useState<FunnelState>({
    currentStage: 1,
    selectedChallenges: ['data-analytics'],
    selectedIndustry: 'investment-banking',
    selectedPriorities: ['improve-reporting', 'reduce-manual-work'],
    journeyStage: 'ready-to-build',
    leadData: null
  });

  // Section Refs for smooth scrolling
  const stage1Ref = useRef<HTMLDivElement>(null);
  const stage2Ref = useRef<HTMLDivElement>(null);
  const stage3Ref = useRef<HTMLDivElement>(null);
  const stage4Ref = useRef<HTMLDivElement>(null);
  const stage5Ref = useRef<HTMLDivElement>(null);

  // Intermediate state for 1.5s analyzing animation before Stage 4
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Modal / Drawer states
  const [activeDrawerChallenge, setActiveDrawerChallenge] = useState<ChallengeOption | null>(null);
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [activeCapability, setActiveCapability] = useState<Capability | null>(null);
  const [isAllCapabilitiesOpen, setIsAllCapabilitiesOpen] = useState(false);

  // Calculate dynamic recommendations based on user selections
  const recommendation = useMemo(() => {
    return calculateRecommendations(
      funnelState.selectedChallenges,
      funnelState.selectedIndustry,
      funnelState.selectedPriorities,
      funnelState.journeyStage
    );
  }, [
    funnelState.selectedChallenges,
    funnelState.selectedIndustry,
    funnelState.selectedPriorities,
    funnelState.journeyStage
  ]);

  // Smooth Scroll to Specific Stage
  const scrollToStage = (stageNumber: number) => {
    setFunnelState((prev) => ({ ...prev, currentStage: stageNumber }));
    const refMap: Record<number, React.RefObject<HTMLDivElement | null>> = {
      1: stage1Ref,
      2: stage2Ref,
      3: stage3Ref,
      4: stage4Ref,
      5: stage5Ref
    };

    const targetRef = refMap[stageNumber];
    if (targetRef && targetRef.current) {
      const topOffset = targetRef.current.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  // ScrollSpy to update active stage pill in header
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const s1 = stage1Ref.current?.offsetTop || 0;
      const s2 = stage2Ref.current?.offsetTop || 0;
      const s3 = stage3Ref.current?.offsetTop || 0;
      const s4 = stage4Ref.current?.offsetTop || 0;
      const s5 = stage5Ref.current?.offsetTop || 0;

      if (scrollPos >= s5 - 100) {
        setFunnelState((prev) => (prev.currentStage === 5 ? prev : { ...prev, currentStage: 5 }));
      } else if (scrollPos >= s4 - 100) {
        setFunnelState((prev) => (prev.currentStage === 4 ? prev : { ...prev, currentStage: 4 }));
      } else if (scrollPos >= s3 - 100) {
        setFunnelState((prev) => (prev.currentStage === 3 ? prev : { ...prev, currentStage: 3 }));
      } else if (scrollPos >= s2 - 100) {
        setFunnelState((prev) => (prev.currentStage === 2 ? prev : { ...prev, currentStage: 2 }));
      } else {
        setFunnelState((prev) => (prev.currentStage === 1 ? prev : { ...prev, currentStage: 1 }));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReset = () => {
    setFunnelState({
      currentStage: 1,
      selectedChallenges: [],
      selectedIndustry: null,
      selectedPriorities: [],
      journeyStage: null,
      leadData: null
    });
    setIsAnalyzing(false);
    scrollToStage(1);
  };

  // Stage 2 Challenge Handlers
  const toggleChallenge = (id: string) => {
    setFunnelState((prev) => {
      const exists = prev.selectedChallenges.includes(id);
      return {
        ...prev,
        selectedChallenges: exists
          ? prev.selectedChallenges.filter((c) => c !== id)
          : [...prev.selectedChallenges, id]
      };
    });
  };

  // Stage 3 Business Context Handlers
  const selectIndustry = (id: string) => {
    setFunnelState((prev) => ({
      ...prev,
      selectedIndustry: prev.selectedIndustry === id ? null : id
    }));
  };

  const togglePriority = (id: string) => {
    setFunnelState((prev) => {
      const exists = prev.selectedPriorities.includes(id);
      return {
        ...prev,
        selectedPriorities: exists
          ? prev.selectedPriorities.filter((p) => p !== id)
          : [...prev.selectedPriorities, id]
      };
    });
  };

  const selectJourneyStage = (id: string) => {
    setFunnelState((prev) => ({
      ...prev,
      journeyStage: prev.journeyStage === id ? null : id
    }));
  };

  // Trigger Stage 3 -> Stage 4 with intermediate analyzing animation
  const handleSubmitStage3 = () => {
    setIsAnalyzing(true);
    if (stage4Ref.current) {
      const topOffset = stage4Ref.current.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const handleAnalyzingComplete = () => {
    setIsAnalyzing(false);
    scrollToStage(4);
  };

  // Selected summaries for persistent floating bar
  const firstChallengeTitle =
    funnelState.selectedChallenges.length > 0
      ? BTM_CHALLENGES.find((c) => c.id === funnelState.selectedChallenges[0])?.title.split(' ')[0]
      : null;

  const industryName =
    funnelState.selectedIndustry
      ? BTM_INDUSTRIES.find((i) => i.id === funnelState.selectedIndustry)?.name
      : null;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#171314] flex flex-col justify-between selection:bg-[#009345] selection:text-white relative">
      {/* Ambient Interactive Cursor Follower Spotlight */}
      <AmbientGlowFollower />

      {/* Top Header with Progress & Navigation */}
      <Header
        currentStage={funnelState.currentStage}
        totalStages={5}
        onBack={() => scrollToStage(Math.max(1, funnelState.currentStage - 1))}
        onReset={handleReset}
        onOpenAllCapabilities={() => setIsAllCapabilitiesOpen(true)}
        onNavigateToStage={(stage) => scrollToStage(stage)}
      />

      {/* Persistent Discovery Lab Profile Sticky Sub-bar (Active across Stages 2–5) */}
      {funnelState.currentStage >= 2 && (firstChallengeTitle || industryName) && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky top-18 z-30 w-full bg-[#062039]/95 text-white backdrop-blur-md border-b border-emerald-500/20 py-2 px-4 shadow-sm"
        >
          <div className="mx-auto max-w-7xl flex items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider shrink-0 flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                YOUR PROFILE:
              </span>

              {firstChallengeTitle && (
                <span className="bg-[#031120] border border-slate-700 px-2.5 py-0.5 rounded-[3px] text-slate-200 shrink-0">
                  Focus: <strong className="text-white">{firstChallengeTitle}</strong>
                </span>
              )}

              {industryName && (
                <span className="bg-[#031120] border border-slate-700 px-2.5 py-0.5 rounded-[3px] text-slate-200 shrink-0">
                  Org: <strong className="text-white">{industryName}</strong>
                </span>
              )}

              {funnelState.selectedPriorities.length > 0 && (
                <span className="bg-[#031120] border border-slate-700 px-2.5 py-0.5 rounded-[3px] text-emerald-300 shrink-0">
                  {funnelState.selectedPriorities.length} {funnelState.selectedPriorities.length === 1 ? 'Priority' : 'Priorities'}
                </span>
              )}
            </div>

            <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-400">
              <span>Path Status:</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <Check className="h-3 w-3 stroke-[3]" />
                {funnelState.currentStage >= 4 ? 'Tailored' : 'Constructing'}
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Continuous Funnel Flow Container */}
      <main className="flex-1 w-full relative">
        {/* ============================================================ */}
        {/* STAGE 01: HERO (DISCOVER)                                    */}
        {/* ============================================================ */}
        <section id="stage-1-discover" ref={stage1Ref} className="relative scroll-mt-20">
          <Stage1Discover
            onStart={() => scrollToStage(2)}
            onExploreCapabilities={() => setIsAllCapabilitiesOpen(true)}
          />
        </section>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-200/80 my-4" />
        </div>

        {/* ============================================================ */}
        {/* STAGE 02: CHALLENGE IDENTIFICATION                           */}
        {/* ============================================================ */}
        <section id="stage-2-challenge" ref={stage2Ref} className="relative scroll-mt-20 py-8">
          <Stage2Challenge
            selectedChallenges={funnelState.selectedChallenges}
            onToggleChallenge={toggleChallenge}
            onExploreDetails={(challenge) => setActiveDrawerChallenge(challenge)}
            onContinue={() => scrollToStage(3)}
          />
        </section>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-200/80 my-4" />
        </div>

        {/* ============================================================ */}
        {/* STAGE 03: BUSINESS PROFILE BUILDER                           */}
        {/* ============================================================ */}
        <section id="stage-3-profile" ref={stage3Ref} className="relative scroll-mt-20 py-8">
          <Stage3BusinessContext
            selectedIndustry={funnelState.selectedIndustry}
            selectedPriorities={funnelState.selectedPriorities}
            journeyStage={funnelState.journeyStage}
            onSelectIndustry={selectIndustry}
            onTogglePriority={togglePriority}
            onSelectJourneyStage={selectJourneyStage}
            onSubmit={handleSubmitStage3}
          />
        </section>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-200/80 my-4" />
        </div>

        {/* ============================================================ */}
        {/* STAGE 04: TAILORED SOLUTION PATH                             */}
        {/* ============================================================ */}
        <section id="stage-4-solution" ref={stage4Ref} className="relative scroll-mt-20 py-8">
          <AnimatePresence mode="wait">
            {isAnalyzing ? (
              <motion.div
                key="analyzing-step"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <AnalyzingTransition
                  funnelState={funnelState}
                  onComplete={handleAnalyzingComplete}
                />
              </motion.div>
            ) : (
              <Stage4Solution
                recommendation={recommendation}
                onExploreCapability={(cap) => setActiveCapability(cap)}
                onViewRelatedWork={(cap) => {
                  const firstCsId = cap.relatedCaseStudyIds[0];
                  const cs = BTM_CASE_STUDIES.find((item) => item.id === firstCsId);
                  if (cs) {
                    setActiveCaseStudy(cs);
                  } else {
                    setActiveCapability(cap);
                  }
                }}
                onOpenCaseStudy={(cs) => setActiveCaseStudy(cs)}
                onProceedToConnect={() => scrollToStage(5)}
                onAdjustSelections={() => scrollToStage(2)}
              />
            )}
          </AnimatePresence>
        </section>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-200/80 my-4" />
        </div>

        {/* ============================================================ */}
        {/* STAGE 05: CONNECT & CONVERSION                               */}
        {/* ============================================================ */}
        <section id="stage-5-connect" ref={stage5Ref} className="relative scroll-mt-20 py-8">
          <Stage5Connect
            funnelState={funnelState}
            recommendation={recommendation}
            onRestart={handleReset}
          />
        </section>
      </main>

      {/* Persistent Subtle Footer */}
      <footer className="w-full border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#062039]">BTM Financial</span>
            <span>•</span>
            <span>Boutique Advisory, Application Development & Data Analytics</span>
          </div>
          <div className="text-slate-400">
            © {new Date().getFullYear()} BTM Financial. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Modals and Drawers (Progressive Disclosure) */}
      <ChallengeDetailDrawer
        challenge={activeDrawerChallenge}
        isOpen={!!activeDrawerChallenge}
        onClose={() => setActiveDrawerChallenge(null)}
        onSelectAndContinue={(chalId) => {
          if (!funnelState.selectedChallenges.includes(chalId)) {
            toggleChallenge(chalId);
          }
          scrollToStage(3);
        }}
        onOpenCaseStudy={(csId) => {
          const cs = BTM_CASE_STUDIES.find((item) => item.id === csId);
          if (cs) {
            setActiveDrawerChallenge(null);
            setActiveCaseStudy(cs);
          }
        }}
      />

      <CaseStudyModal
        caseStudy={activeCaseStudy}
        isOpen={!!activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onConnectAboutThis={() => {
          setActiveCaseStudy(null);
          scrollToStage(5);
        }}
      />

      <CapabilityDetailModal
        capability={activeCapability}
        isOpen={!!activeCapability}
        onClose={() => setActiveCapability(null)}
        onSelectCaseStudy={(csId) => {
          const cs = BTM_CASE_STUDIES.find((item) => item.id === csId);
          if (cs) {
            setActiveCapability(null);
            setActiveCaseStudy(cs);
          }
        }}
        onConnectAboutCapability={() => {
          setActiveCapability(null);
          scrollToStage(5);
        }}
      />

      <AllCapabilitiesModal
        isOpen={isAllCapabilitiesOpen}
        onClose={() => setIsAllCapabilitiesOpen(false)}
        onSelectCapability={(cap) => {
          setIsAllCapabilitiesOpen(false);
          setActiveCapability(cap);
        }}
      />
    </div>
  );
}
