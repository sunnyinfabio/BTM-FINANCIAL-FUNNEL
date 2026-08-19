'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { FunnelState, RecommendationResult } from '@/data/types';
import { BTM_CHALLENGES } from '@/data/challenges';
import { BTM_INDUSTRIES } from '@/data/industries';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  Send,
  Calendar,
  CheckCircle2,
  Lock,
  Mail,
  Building,
  User,
  Phone,
  MessageSquare,
  RefreshCw,
  ArrowRight,
  ArrowDown
} from 'lucide-react';

const leadFormSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  workEmail: z.string().email('Please enter a valid work email address'),
  company: z.string().min(2, 'Please enter your organization or firm name'),
  phone: z.string().optional(),
  projectDetails: z.string().optional(),
  submissionType: z.enum(['conversation', 'meeting'])
});

type LeadFormData = z.infer<typeof leadFormSchema>;

interface Stage5ConnectProps {
  funnelState: FunnelState;
  recommendation: RecommendationResult;
  onRestart: () => void;
}

export function Stage5Connect({
  funnelState,
  recommendation,
  onRestart
}: Stage5ConnectProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState<LeadFormData | null>(null);
  const [emailFocusedOrFilled, setEmailFocusedOrFilled] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      fullName: '',
      workEmail: '',
      company: '',
      phone: '',
      projectDetails: '',
      submissionType: 'conversation'
    }
  });

  const emailValue = watch('workEmail');
  const submissionType = watch('submissionType');

  // Trigger progressive reveal
  const showFullForm = emailFocusedOrFilled || (emailValue && emailValue.length > 3);

  const onSubmit = async (data: LeadFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmissionData(data);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#009345', '#062039', '#30ad6b']
      });
    } catch {
      // Ignore if canvas-confetti is not supported
    }
  };

  // Human-readable journey summary elements
  const selectedChallengeNames = funnelState.selectedChallenges
    .map((id) => BTM_CHALLENGES.find((c) => c.id === id)?.title)
    .filter(Boolean)
    .join(' • ');

  const selectedIndustryName =
    BTM_INDUSTRIES.find((i) => i.id === funnelState.selectedIndustry)?.name || 'Institutional Enterprise';

  const primaryCapabilityName = recommendation.recommendedCapabilities[0]?.name || 'Application & Analytics Services';

  // ============================================================
  // CONFIRMATION SCREEN
  // ============================================================
  if (isSubmitted && submissionData) {
    return (
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl border border-slate-700/80 bg-[#062039] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-[#009345] text-white shadow-md mb-6">
            <CheckCircle2 className="h-9 w-9" />
          </div>

          <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-[2.5px] text-emerald-400">
            INQUIRY RECEIVED
          </span>

          <h2 className="mt-2 text-2xl sm:text-4xl font-black tracking-tight text-white uppercase">
            Thank you, {submissionData.fullName}.
          </h2>

          <div className="btm-separator btm-separator-center" />

          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-md mx-auto leading-relaxed">
            {submissionData.submissionType === 'meeting'
              ? 'The BTM Financial team has received your solution profile. A representative will reach out shortly to schedule an initial discussion.'
              : 'The BTM Financial team has logged your solution profile. We will review your requirements and reach out via email within 1 business day.'}
          </p>

          {/* Diagnostic Summary */}
          <div className="mt-8 rounded-xl bg-[#031120] border border-slate-700/80 p-5 text-left space-y-3 text-xs font-mono text-slate-300">
            <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-emerald-400">
              DIAGNOSTIC PROFILE SUMMARY
            </div>
            <div>
              <span className="text-slate-500">Contact:</span>{' '}
              <span className="font-bold text-white">{submissionData.fullName}</span> ({submissionData.workEmail})
            </div>
            <div>
              <span className="text-slate-500">Company:</span>{' '}
              <span className="font-bold text-white">{submissionData.company}</span>
            </div>
            <div className="pt-2 border-t border-slate-700">
              <span className="text-slate-500 block mb-1">Selected Focus:</span>
              <div className="flex flex-wrap gap-1.5 font-sans">
                {recommendation.recommendedCapabilities.map((cap) => (
                  <span
                    key={cap.id}
                    className="inline-flex items-center gap-1 bg-[#062039] px-2.5 py-1 rounded-[3px] border border-slate-600 text-xs font-semibold text-white"
                  >
                    <CheckCircle2 className="h-3 w-3 text-[#009345]" />
                    {cap.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <Button
              variant="outline"
              size="md"
              onClick={onRestart}
              leftIcon={<RefreshCw className="h-4 w-4" />}
              className="border-slate-600 text-white hover:bg-white/10"
            >
              START NEW DISCOVERY SESSION
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ============================================================
  // DARK BTM NAVY 2-COLUMN CONVERSION SCREEN
  // ============================================================
  return (
    <div className="w-full bg-[#062039] text-white py-16 sm:py-24 relative overflow-hidden rounded-3xl border border-slate-800 shadow-2xl my-8">
      {/* Dynamic Ambient Depth */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#009345]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-700/20 rounded-full blur-2xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-[3px] bg-emerald-950/60 px-3 py-1 rounded-[3px] border border-emerald-500/30">
              05 / 05 • CONNECT
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase mt-3">
            Let's Turn Your Idea Into Something Real.
          </h2>

          {/* Signature BTM Bar Separator */}
          <div className="btm-separator btm-separator-center mt-4" />

          <p className="text-base sm:text-lg text-slate-300 font-normal max-w-xl mx-auto">
            Tell us where to reach you and the BTM Financial team will discuss the right next step.
          </p>
        </motion.div>

        {/* 2-Column Composition (Left: Journey Summary | Right: Minimal Editorial Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start max-w-5xl mx-auto">
          {/* Left Column (5 Cols): Your Journey Flow Summary */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="rounded-2xl border border-slate-700/80 bg-[#031120] text-white p-6 sm:p-8 shadow-2xl relative overflow-hidden text-left">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[2.5px] text-emerald-400 pb-3.5 border-b border-slate-700/80">
                <CheckCircle2 className="h-4 w-4 text-[#009345]" />
                YOUR JOURNEY
              </div>

              {/* Vertical Flow Diagram */}
              <div className="mt-5 space-y-2.5">
                {/* Step 1: Challenge */}
                <div className="rounded-lg bg-[#062039] border border-slate-700/80 p-4">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block tracking-wider">
                    01 • YOUR CHALLENGE
                  </span>
                  <span className="text-sm font-bold text-white mt-1 block">
                    {selectedChallengeNames || 'Data & Analytics Solutions'}
                  </span>
                </div>

                {/* Connecting Down Arrow */}
                <div className="flex justify-center">
                  <ArrowDown className="h-4 w-4 text-[#009345]" />
                </div>

                {/* Step 2: Industry */}
                <div className="rounded-lg bg-[#062039] border border-slate-700/80 p-4">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block tracking-wider">
                    02 • YOUR BUSINESS
                  </span>
                  <span className="text-sm font-bold text-white mt-1 block">
                    {selectedIndustryName}
                  </span>
                </div>

                {/* Connecting Down Arrow */}
                <div className="flex justify-center">
                  <ArrowDown className="h-4 w-4 text-[#009345]" />
                </div>

                {/* Step 3: Recommended Solution */}
                <div className="rounded-lg bg-emerald-950/60 border border-emerald-500/40 p-4">
                  <span className="text-[10px] font-mono uppercase text-emerald-400 block tracking-wider">
                    03 • YOUR RECOMMENDED CAPABILITIES
                  </span>
                  <span className="text-sm font-bold text-white mt-1 block">
                    {primaryCapabilityName}
                  </span>
                </div>
              </div>

              {/* Reassurance Note */}
              <div className="mt-6 pt-4 border-t border-slate-700/80 text-xs text-slate-400 leading-relaxed font-normal">
                Your diagnostic profile is automatically attached to your inquiry for our technical partners.
              </div>
            </div>

            <div className="rounded-xl border border-slate-700/80 bg-[#031120]/60 p-4 text-xs text-slate-300 flex items-center gap-2.5">
              <Lock className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Your information helps us understand your request and connect you with the right team.</span>
            </div>
          </motion.div>

          {/* Right Column (7 Cols): Minimal Editorial Form with Clean Underline Inputs */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-2xl border border-slate-700/80 bg-[#031120] p-6 sm:p-10 shadow-2xl text-left"
          >
            <div className="mb-8 text-left">
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                TELL US WHERE TO REACH YOU.
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Enter your work email to begin our collaborative discussion.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
              {/* 1. WORK EMAIL */}
              <div className="relative group">
                <label className="block text-[11px] font-mono font-bold uppercase tracking-[2px] text-slate-400 mb-1">
                  WORK EMAIL <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="email"
                  placeholder="name@organization.com"
                  {...register('workEmail')}
                  onFocus={() => setEmailFocusedOrFilled(true)}
                  className={`w-full bg-transparent border-b py-2 text-base text-white placeholder:text-slate-600 outline-none transition-colors ${
                    errors.workEmail ? 'border-rose-400' : 'border-slate-700 focus:border-[#009345]'
                  }`}
                />
                {errors.workEmail && (
                  <p className="mt-1 text-xs text-rose-400">{errors.workEmail.message}</p>
                )}
              </div>

              {/* Progressive Reveal Fields */}
              <AnimatePresence>
                {showFullForm && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-6 pt-1 overflow-hidden"
                  >
                    {/* FULL NAME */}
                    <div className="relative group">
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-[2px] text-slate-400 mb-1">
                        FULL NAME <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sarah Jenkins"
                        {...register('fullName')}
                        className={`w-full bg-transparent border-b py-2 text-base text-white placeholder:text-slate-600 outline-none transition-colors ${
                          errors.fullName ? 'border-rose-400' : 'border-slate-700 focus:border-[#009345]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-rose-400">{errors.fullName.message}</p>
                      )}
                    </div>

                    {/* COMPANY */}
                    <div className="relative group">
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-[2px] text-slate-400 mb-1">
                        COMPANY <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Capital Partners"
                        {...register('company')}
                        className={`w-full bg-transparent border-b py-2 text-base text-white placeholder:text-slate-600 outline-none transition-colors ${
                          errors.company ? 'border-rose-400' : 'border-slate-700 focus:border-[#009345]'
                        }`}
                      />
                      {errors.company && (
                        <p className="mt-1 text-xs text-rose-400">{errors.company.message}</p>
                      )}
                    </div>

                    {/* PHONE */}
                    <div className="relative group">
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-[2px] text-slate-400 mb-1">
                        PHONE <span className="text-slate-600 font-normal lowercase font-sans">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        {...register('phone')}
                        className="w-full bg-transparent border-b border-slate-700 py-2 text-base text-white placeholder:text-slate-600 outline-none focus:border-[#009345] transition-colors"
                      />
                    </div>

                    {/* PROJECT / CHALLENGE */}
                    <div className="relative group">
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-[2px] text-slate-400 mb-1">
                        PROJECT / CHALLENGE <span className="text-slate-600 font-normal lowercase font-sans">(optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Brief context on timeline, data formats, or goals..."
                        {...register('projectDetails')}
                        className="w-full bg-transparent border-b border-slate-700 py-2 text-base text-white placeholder:text-slate-600 outline-none focus:border-[#009345] transition-colors"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action CTAs */}
              <div className="pt-4 space-y-3">
                <Button
                  type="submit"
                  variant="emerald"
                  size="lg"
                  isLoading={isSubmitting && submissionType === 'conversation'}
                  onClick={() => {
                    setEmailFocusedOrFilled(true);
                    setValue('submissionType', 'conversation');
                  }}
                  rightIcon={<Send className="h-4 w-4" />}
                  className="w-full justify-center shadow-md font-bold text-sm sm:text-base py-4"
                >
                  START A CONVERSATION →
                </Button>

                <Button
                  type="submit"
                  variant="outline"
                  size="md"
                  isLoading={isSubmitting && submissionType === 'meeting'}
                  onClick={() => {
                    setEmailFocusedOrFilled(true);
                    setValue('submissionType', 'meeting');
                  }}
                  leftIcon={<Calendar className="h-4 w-4 text-[#009345]" />}
                  className="w-full justify-center text-xs font-mono font-bold uppercase tracking-wider text-slate-300 border-slate-700 hover:text-white hover:bg-white/10"
                >
                  BOOK A MEETING
                </Button>
              </div>

              {/* Privacy Reassurance */}
              <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center">
                <Lock className="h-3 w-3 text-emerald-400 shrink-0" />
                <span>Your information helps us understand your request and connect you with the right team.</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
