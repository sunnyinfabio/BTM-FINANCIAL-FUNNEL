'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'emerald';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-[4px] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none tracking-tight active:scale-[0.99]';

    const variants = {
      primary:
        'bg-[#062039] text-white hover:bg-[#0a2f52] active:bg-[#031120] focus:ring-[#062039] shadow-xs',
      emerald:
        'bg-[#009345] text-white hover:bg-[#007a38] active:bg-[#00662e] focus:ring-[#009345] shadow-xs',
      secondary:
        'bg-[#f1f5f9] text-[#062039] hover:bg-[#e2e8f0] active:bg-[#cbd5e1] focus:ring-[#062039]',
      outline:
        'border border-slate-300 bg-white text-[#062039] hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100 focus:ring-[#009345] shadow-2xs',
      ghost:
        'text-slate-700 hover:text-[#062039] hover:bg-slate-100/80 active:bg-slate-200 focus:ring-[#009345]'
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 gap-1.5 font-bold uppercase tracking-wider',
      md: 'text-xs sm:text-sm px-4 py-2.5 gap-2 font-bold tracking-tight',
      lg: 'text-sm sm:text-base px-6 py-3 gap-2.5 font-bold tracking-tight'
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
        ) : leftIcon ? (
          <span className="shrink-0">{leftIcon}</span>
        ) : null}
        {children}
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
