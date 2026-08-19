'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface BtmImageFrameProps {
  src: string;
  alt: string;
  aspectRatio?: '16/10' | '16/9' | '4/3' | '1/1' | 'auto';
  className?: string;
  priority?: boolean;
  sizes?: string;
  caption?: string;
  tag?: string;
  isIllustrative?: boolean;
  withGrain?: boolean;
  withVignette?: boolean;
}

export function BtmImageFrame({
  src,
  alt,
  aspectRatio = '16/10',
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, 650px',
  caption,
  tag,
  isIllustrative = false,
  withGrain = true,
  withVignette = true
}: BtmImageFrameProps) {
  const aspectClass = {
    '16/10': 'aspect-[16/10]',
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    'auto': 'h-full w-full'
  }[aspectRatio];

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-[8px] border border-slate-200/90 bg-[#062039]',
        aspectClass,
        className
      )}
    >
      {/* Underlying Image with Consistent Tone/Contrast */}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover filter contrast-[1.08] brightness-[0.92] saturate-[0.95] transition-transform duration-700 ease-out group-hover:scale-103"
      />

      {/* Signature BTM Midnight Navy & Emerald Tone Grade Overlay */}
      {withVignette && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#062039]/90 via-[#062039]/30 to-[#062039]/10 pointer-events-none" />
      )}

      {/* Subtle Grain Overlay for Visual Cohesion */}
      {withGrain && (
        <div className="absolute inset-0 bg-noise opacity-[0.035] pointer-events-none mix-blend-overlay" />
      )}

      {/* Subtle Emerald Accent Rim Light on Hover */}
      <div className="absolute inset-0 border border-transparent group-hover:border-[#009345]/30 rounded-[8px] transition-colors pointer-events-none" />

      {/* Optional Tag (e.g. "Representative Precedent") */}
      {(tag || isIllustrative) && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-[#062039]/85 backdrop-blur-xs border border-white/15 text-white text-[10px] font-mono uppercase px-2 py-0.5 rounded-[2px] tracking-wider">
            {tag || (isIllustrative ? 'Representative Precedent' : '')}
          </span>
        </div>
      )}

      {/* Optional Caption */}
      {caption && (
        <div className="absolute bottom-3 left-4 right-4 z-10">
          <span className="text-[11px] font-mono tracking-wider text-white/90 uppercase font-semibold drop-shadow-sm">
            {caption}
          </span>
        </div>
      )}
    </div>
  );
}
