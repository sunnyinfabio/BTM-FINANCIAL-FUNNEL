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
  Sparkles,
  Layers,
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

  // Trigger progressive form reveal once email is focused or has content
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

  // Find human-readable names for journey summary
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
          className="rounded-xl border border-slate-200 bg-white p-8 sm:p-10 shadow-lg"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[6px] bg-[#009345] text-white shadow-xs">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <span className="mt-5 inline-block text-[10px] font-mono font-bold uppercase tracking-[2px] text-[#009345]">
            Inquiry Received
          </span>

          <h2 className="mt-1 text-2xl sm:text-3xl font-black tracking-tight text-[#062039] uppercase">
            Thank you, {submissionData.fullName}.
          </h2>

          <div className="btm-separator btm-separator-center" />

          <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
            {submissionData.submissionType === 'meeting'
              ? 'The BTM Financial team has received your solution profile. A representative will reach out shortly to schedule an initial discussion.'
              : 'The BTM Financial team has logged your solution profile. We will review your requirements and reach out via email within 1 business day.'}
          </p>

          {/* Diagnostic Summary */}
          <div className="mt-6 rounded-lg bg-slate-50 border border-slate-200 p-5 text-left space-y-3 text-xs font-mono">
            <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#737373]">
              Diagnostic Summary
            </div>
            <div>
              <span className="text-slate-500">Contact:</span>{' '}
              <span className="font-bold text-slate-800">{submissionData.fullName}</span> ({submissionData.workEmail})
            </div>
            <div>
              <span className="text-slate-500">Company:</span>{' '}
              <span className="font-bold text-slate-800">{submissionData.company}</span>
            </div>
            <div className="pt-2 border-t border-slate-200">
              <span className="text-slate-500 block mb-1">Selected Focus:</span>
              <div className="flex flex-wrap gap-1.5 font-sans">
                {recommendation.recommendedCapabilities.map((cap) => (
                  <span
                    key={cap.id}
                    className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-[3px] border border-slate-200 text-xs font-semibold text-[#062039]"
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
            >
              Start New Discovery Session
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ============================================================
  // 2-COLUMN CONVERSION SCREEN
  // ============================================================
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 scroll-mt-24">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Badge variant="emerald" size="sm" className="font-mono">
            05 / 05 • Connect
          </Badge>
          <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
            Final Step
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#062039] uppercase">
          Let's Turn Your Idea Into Something Real.
        </h2>

        {/* Signature BTM Bar Separator */}
        <div className="btm-separator btm-separator-center" />

        <p className="text-sm sm:text-base text-slate-600 font-normal">
          Tell us where to reach you and the BTM Financial team will discuss the right next step.
        </p>
      </motion.div>

      {/* 2-Column Composition (Left: Journey Summary | Right: Progressive Lead Form) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        {/* Left Column (5 Cols): Your Journey Flow Summary */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-5 space-y-5"
        >
          <div className="rounded-xl border border-slate-200 bg-[#062039] text-white p-6 sm:p-7 shadow-2xl relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 h-40 w-40 bg-[#009345]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[2.5px] text-[#009345] pb-3.5 border-b border-slate-700/80">
              <CheckCircle2 className="h-4 w-4 text-[#009345]" />
              Your Journey Summary
            </div>

            {/* Vertical Flow Diagram */}
            <div className="mt-5 space-y-2.5">
              {/* Step 1: Challenge */}
              <div className="rounded-lg bg-[#031120]/80 border border-slate-700/80 p-3.5 text-left">
                <span className="text-[10px] font-mono uppercase text-slate-400 block tracking-wider">
                  01 • Challenge Identified
                </span>
                <span className="text-sm font-bold text-white mt-0.5 block">
                  {selectedChallengeNames || 'Data & Analytics Solutions'}
                </span>
              </div>

              {/* Connecting Down Arrow */}
              <div className="flex justify-center">
                <ArrowDown className="h-4 w-4 text-[#009345]" />
              </div>

              {/* Step 2: Industry */}
              <div className="rounded-lg bg-[#031120]/80 border border-slate-700/80 p-3.5 text-left">
                <span className="text-[10px] font-mono uppercase text-slate-400 block tracking-wider">
                  02 • Organization Context
                </span>
                <span className="text-sm font-bold text-white mt-0.5 block">
                  {selectedIndustryName}
                </span>
              </div>

              {/* Connecting Down Arrow */}
              <div className="flex justify-center">
                <ArrowDown className="h-4 w-4 text-[#009345]" />
              </div>

              {/* Step 3: Recommended Solution */}
              <div className="rounded-lg bg-emerald-950/50 border border-emerald-500/40 p-3.5 text-left">
                <span className="text-[10px] font-mono uppercase text-emerald-400 block tracking-wider">
                  03 • Recommended Solution Path
                </span>
                <span className="text-sm font-bold text-white mt-0.5 block">
                  {primaryCapabilityName}
                </span>
              </div>
            </div>

            {/* Reassurance Note */}
            <div className="mt-5 pt-4 border-t border-slate-700/80 text-xs text-slate-300 leading-relaxed font-normal">
              Your diagnostic profile is automatically attached to your inquiry for our technical partners.
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4 text-xs text-slate-600 flex items-center gap-2.5 shadow-2xs">
            <Lock className="h-4 w-4 text-[#009345] shrink-0" />
            <span>Your information helps us understand your request and connect you with the right team.</span>
          </div>
        </motion.div>

        {/* Right Column (7 Cols): Progressive Conversion Form */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-7 rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-md"
        >
          <div className="mb-5 text-left">
            <h3 className="text-lg font-black text-[#062039] uppercase">
              Tell us where to reach you.
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Enter your work email to initiate discussion with the BTM Financial team.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
            {/* 1. Work Email */}
            <div>
              <label className="block text-[11px] font-mono font-bold uppercase tracking-[1.5px] text-[#062039] mb-1">
                Work Email <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  placeholder="name@company.com"
                  {...register('workEmail')}
                  onFocus={() => setEmailFocusedOrFilled(true)}
                  className={`w-full rounded-[6px] border bg-white pl-10 pr-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:ring-2 focus:ring-[#009345] ${
                    errors.workEmail ? 'border-rose-300 bg-rose-50/20' : 'border-slate-300'
                  }`}
                />
              </div>
              {errors.workEmail && (
                <p className="mt-1 text-xs text-rose-600">{errors.workEmail.message}</p>
              )}
            </div>

            {/* Progressive Reveal Fields (Name, Company, Phone, Project) */}
            <AnimatePresence>
              {showFullForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-4 pt-1 overflow-hidden"
                >
                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-[1.5px] text-[#062039] mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="e.g. Sarah Jenkins"
                        {...register('fullName')}
                        className={`w-full rounded-[6px] border bg-white pl-10 pr-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:ring-2 focus:ring-[#009345] ${
                          errors.fullName ? 'border-rose-300 bg-rose-50/20' : 'border-slate-300'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-rose-600">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-[1.5px] text-[#062039] mb-1">
                      Company / Organization <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="e.g. Apex Capital Partners"
                        {...register('company')}
                        className={`w-full rounded-[6px] border bg-white pl-10 pr-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:ring-2 focus:ring-[#009345] ${
                          errors.company ? 'border-rose-300 bg-rose-50/20' : 'border-slate-300'
                        }`}
                      />
                    </div>
                    {errors.company && (
                      <p className="mt-1 text-xs text-rose-600">{errors.company.message}</p>
                    )}
                  </div>

                  {/* Phone (Optional) */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-[1.5px] text-[#062039] mb-1">
                      Phone <span className="text-slate-400 font-normal lowercase tracking-normal font-sans">(optional)</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        {...register('phone')}
                        className="w-full rounded-[6px] border border-slate-300 bg-white pl-10 pr-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:ring-2 focus:ring-[#009345]"
                      />
                    </div>
                  </div>

                  {/* Project / Challenge (Optional) */}
                  <div>
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-[1.5px] text-[#062039] mb-1">
                      Project Context / Goals <span className="text-slate-400 font-normal lowercase tracking-normal font-sans">(optional)</span>
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Brief context on timeline, data formats, or goals..."
                      {...register('projectDetails')}
                      className="w-full rounded-[6px] border border-slate-300 bg-white p-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:ring-2 focus:ring-[#009345]"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action CTAs */}
            <div className="pt-3 space-y-2.5">
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
                className="w-full justify-center shadow-md font-bold text-sm sm:text-base py-3.5"
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
                className="w-full justify-center text-xs font-mono font-bold uppercase tracking-wider text-slate-700 hover:text-[#062039]"
              >
                BOOK A MEETING
              </Button>
            </div>

            {/* Privacy Reassurance */}
            <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center">
              <Lock className="h-3 w-3 text-[#009345] shrink-0" />
              <span>Your information helps us understand your request and connect you with the right team.</span>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
