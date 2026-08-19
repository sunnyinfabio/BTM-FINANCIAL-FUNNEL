'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { FunnelState, RecommendationResult } from '@/data/types';
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
  Sparkles
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

  const submissionType = watch('submissionType');

  const onSubmit = async (data: LeadFormData) => {
    // Brief network latency simulation
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
          className="rounded-[8px] border border-slate-200 bg-white p-8 sm:p-10 shadow-md"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[4px] bg-[#009345] text-white shadow-xs">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <span className="mt-5 inline-block text-[10px] font-bold uppercase tracking-[2px] text-[#009345]">
            Inquiry Received
          </span>

          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#062039]">
            Thank you, {submissionData.fullName}.
          </h2>

          <div className="btm-separator btm-separator-center" />

          <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
            {submissionData.submissionType === 'meeting'
              ? 'Our advisory and engineering leadership has received your solution profile. A senior partner will reach out shortly to schedule an initial consultation.'
              : 'Our technical team has logged your diagnostic profile. We will review your requirements and reach out via email within 1 business day.'}
          </p>

          {/* Diagnostic Summary */}
          <div className="mt-6 rounded-[6px] bg-slate-50 border border-slate-200 p-4.5 text-left space-y-3 text-xs">
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
              <div className="flex flex-wrap gap-1.5">
                {recommendation.recommendedCapabilities.map((cap) => (
                  <span
                    key={cap.id}
                    className="inline-flex items-center gap-1 bg-white px-2 py-0.5 rounded-[2px] border border-slate-200 text-xs font-semibold text-[#062039]"
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
  // MINIMAL CONVERSION FORM
  // ============================================================
  return (
    <div className="mx-auto max-w-xl px-4 sm:px-6 py-8 sm:py-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-center mb-7"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Badge variant="emerald" size="sm">
            Stage 05
          </Badge>
          <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
            Connect
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#062039]">
          Ready to explore what's possible?
        </h2>

        {/* Signature BTM Bar Separator */}
        <div className="btm-separator btm-separator-center" />

        <p className="text-sm sm:text-base text-slate-600 font-normal">
          Tell us a little about your project and the BTM Financial team can discuss the right next step.
        </p>
      </motion.div>

      {/* Selected Focus Summary Box (Reassures User) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="mb-6 rounded-[6px] border border-slate-200 bg-white p-4 shadow-2xs"
      >
        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[1.5px] text-[#009345] mb-2">
          <CheckCircle2 className="h-3.5 w-3.5 text-[#009345]" />
          Your selected focus:
        </div>
        <div className="flex flex-wrap gap-1.5">
          {recommendation.recommendedCapabilities.map((cap) => (
            <span
              key={cap.id}
              className="inline-flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-[3px] border border-slate-200 text-xs font-semibold text-[#062039]"
            >
              <CheckCircle2 className="h-3 w-3 text-[#009345]" />
              {cap.name}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Minimal Lead Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
        className="rounded-[8px] border border-slate-200 bg-white p-6 sm:p-7 shadow-2xs"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-[1.5px] text-[#062039] mb-1">
              Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="e.g. Sarah Jenkins"
                {...register('fullName')}
                className={`w-full rounded-[4px] border bg-white pl-10 pr-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:ring-2 focus:ring-[#009345] ${
                  errors.fullName ? 'border-rose-300 bg-rose-50/20' : 'border-slate-300'
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="mt-1 text-xs text-rose-600">{errors.fullName.message}</p>
            )}
          </div>

          {/* Work Email */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-[1.5px] text-[#062039] mb-1">
              Work Email <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="email"
                placeholder="sarah@firm.com"
                {...register('workEmail')}
                className={`w-full rounded-[4px] border bg-white pl-10 pr-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:ring-2 focus:ring-[#009345] ${
                  errors.workEmail ? 'border-rose-300 bg-rose-50/20' : 'border-slate-300'
                }`}
              />
            </div>
            {errors.workEmail && (
              <p className="mt-1 text-xs text-rose-600">{errors.workEmail.message}</p>
            )}
          </div>

          {/* Company */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-[1.5px] text-[#062039] mb-1">
              Company <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Building className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="e.g. Apex Capital Partners"
                {...register('company')}
                className={`w-full rounded-[4px] border bg-white pl-10 pr-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:ring-2 focus:ring-[#009345] ${
                  errors.company ? 'border-rose-300 bg-rose-50/20' : 'border-slate-300'
                }`}
              />
            </div>
            {errors.company && (
              <p className="mt-1 text-xs text-rose-600">{errors.company.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-[1.5px] text-[#062039] mb-1">
              Phone <span className="text-slate-400 font-normal lowercase tracking-normal">(optional)</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                {...register('phone')}
                className="w-full rounded-[4px] border border-slate-300 bg-white pl-10 pr-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:ring-2 focus:ring-[#009345]"
              />
            </div>
          </div>

          {/* Project / Challenge */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-[1.5px] text-[#062039] mb-1">
              Project / Challenge <span className="text-slate-400 font-normal lowercase tracking-normal">(optional)</span>
            </label>
            <textarea
              rows={2}
              placeholder="Brief context on timeline, data formats, or goals..."
              {...register('projectDetails')}
              className="w-full rounded-[4px] border border-slate-300 bg-white p-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:ring-2 focus:ring-[#009345]"
            />
          </div>

          {/* Primary CTA & Secondary CTA */}
          <div className="pt-3 space-y-2.5">
            <Button
              type="submit"
              variant="emerald"
              size="lg"
              isLoading={isSubmitting && submissionType === 'conversation'}
              onClick={() => setValue('submissionType', 'conversation')}
              rightIcon={<Send className="h-4 w-4" />}
              className="w-full justify-center shadow-xs"
            >
              Start a Conversation
            </Button>

            <Button
              type="submit"
              variant="outline"
              size="md"
              isLoading={isSubmitting && submissionType === 'meeting'}
              onClick={() => setValue('submissionType', 'meeting')}
              leftIcon={<Calendar className="h-4 w-4 text-[#009345]" />}
              className="w-full justify-center text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-[#062039]"
            >
              Book a Meeting
            </Button>
          </div>

          {/* Subtle Privacy Reassurance */}
          <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center">
            <Lock className="h-3 w-3 text-[#009345] shrink-0" />
            <span>Enterprise confidentiality assured. BTM Financial does not share your information.</span>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
