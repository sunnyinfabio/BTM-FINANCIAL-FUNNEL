'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'emerald' | 'navy' | 'slate' | 'gray' | 'outline';
  size?: 'sm' | 'md';
}

export function Badge({
  className,
  variant = 'emerald',
  size = 'sm',
  children,
  ...props
}: BadgeProps) {
  const variants = {
    emerald: 'bg-[#009345] text-white border-transparent',
    navy: 'bg-[#062039] text-white border-transparent',
    gray: 'bg-[#737373] text-white border-transparent',
    slate: 'bg-slate-100 text-slate-700 border-slate-200',
    outline: 'bg-transparent text-slate-700 border-slate-300'
  };

  const sizes = {
    sm: 'text-[10px] px-2 py-0.5 font-bold uppercase tracking-[1.5px] rounded-[3px]',
    md: 'text-xs px-2.5 py-1 font-semibold uppercase tracking-[1px] rounded-[4px]'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 border shrink-0',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
