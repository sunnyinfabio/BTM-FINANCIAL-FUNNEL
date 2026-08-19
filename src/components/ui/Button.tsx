'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'emerald';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  magnetic?: boolean;
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
      magnetic = true,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic || disabled || isLoading || !buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = (e.clientX - centerX) * 0.18;
      const distanceY = (e.clientY - centerY) * 0.18;
      x.set(distanceX);
      y.set(distanceY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    const baseStyles =
      'relative inline-flex items-center justify-center font-bold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none overflow-hidden';

    const variants = {
      primary:
        'bg-[#062039] text-white hover:bg-[#0a2f52] active:scale-[0.98] focus:ring-[#062039] shadow-md hover:shadow-lg',
      emerald:
        'bg-[#009345] text-white hover:bg-[#007a38] active:scale-[0.98] focus:ring-[#009345] shadow-md hover:shadow-emerald-900/20 hover:shadow-lg',
      secondary:
        'bg-slate-100 text-[#062039] hover:bg-slate-200 active:scale-[0.98] focus:ring-[#062039]',
      outline:
        'border border-slate-300 bg-white/90 backdrop-blur-xs text-[#062039] hover:bg-slate-50 hover:border-slate-400 active:scale-[0.98] focus:ring-[#009345] shadow-2xs',
      ghost:
        'text-slate-700 hover:text-[#009345] hover:bg-slate-100/80 active:scale-[0.98] focus:ring-[#009345]'
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-1.5 gap-1.5 font-mono uppercase tracking-wider',
      md: 'text-xs sm:text-sm px-5 py-2.5 gap-2 tracking-tight',
      lg: 'text-sm sm:text-base px-7 py-3.5 gap-2.5 tracking-tight'
    };

    return (
      <motion.button
        ref={buttonRef}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.98 }}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...(props as any)}
      >
        {/* Subtle dynamic sheen on hover */}
        {variant === 'emerald' && (
          <div className="absolute inset-0 -translate-x-full hover:translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />
        )}

        {isLoading ? (
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
        ) : leftIcon ? (
          <span className="shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">{leftIcon}</span>
        ) : null}
        <span className="relative z-10">{children}</span>
        {!isLoading && rightIcon && (
          <span className="shrink-0 relative z-10 transition-transform duration-200 group-hover:translate-x-1">{rightIcon}</span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
