'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CapabilityVisualOverlayProps {
  id: string;
  isHovered?: boolean;
}

export function CapabilityVisualOverlay({ id, isHovered = false }: CapabilityVisualOverlayProps) {
  // 1. DATA & ANALYTICS: Progressive Chart Line + Sequential Data Points + Tiny Signals
  if (id === 'data-analytics') {
    return (
      <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center p-6">
        <svg className="w-full h-full" viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Faint Grid Lines */}
          <line x1="20" y1="140" x2="280" y2="140" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="20" y1="90" x2="280" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="20" y1="40" x2="280" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3 3" />

          {/* Area Fill */}
          <path
            d="M 20 140 L 20 110 Q 70 130 110 80 T 200 60 T 280 30 L 280 140 Z"
            fill="url(#analyticsAreaGrad)"
            opacity={isHovered ? 0.35 : 0.15}
            className="transition-opacity duration-500"
          />

          <defs>
            <linearGradient id="analyticsAreaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#009345" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#009345" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Progressive Animated Chart Line */}
          <motion.path
            d="M 20 110 Q 70 130 110 80 T 200 60 T 280 30"
            stroke="#009345"
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0.3 }}
            animate={{ pathLength: isHovered ? 1 : 0.8 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />

          {/* Sequential Data Points */}
          <motion.circle cx="110" cy="80" r="4" fill="#009345" animate={{ scale: isHovered ? [1, 1.3, 1] : 1 }} transition={{ repeat: Infinity, duration: 2 }} />
          <motion.circle cx="200" cy="60" r="4" fill="#009345" animate={{ scale: isHovered ? [1, 1.3, 1] : 1 }} transition={{ repeat: Infinity, duration: 2, delay: 0.4 }} />
          <motion.circle cx="280" cy="30" r="5" fill="#30ad6b" animate={{ scale: isHovered ? [1, 1.4, 1] : 1 }} transition={{ repeat: Infinity, duration: 2, delay: 0.8 }} />

          {/* Label Pills */}
          <text x="30" y="30" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold">DATA SIGNAL</text>
          <text x="210" y="20" fill="#009345" fontSize="9" fontFamily="monospace" fontWeight="bold">TREND CORRELATION</text>
        </svg>
      </div>
    );
  }

  // 2. TECHNOLOGY & APPLICATIONS: Enterprise Architecture Overlay (API -> DATA -> MODEL -> APP)
  if (id === 'tech-applications') {
    return (
      <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center p-6">
        <svg className="w-full h-full" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Connecting Lines */}
          <motion.path
            d="M 45 90 L 115 90 L 195 90 L 275 90"
            stroke={isHovered ? '#009345' : 'rgba(255,255,255,0.2)'}
            strokeWidth="2"
            strokeDasharray="4 4"
            className="transition-colors duration-300"
          />

          {/* Node 1: API */}
          <g transform="translate(15, 65)">
            <rect width="60" height="50" rx="6" fill="#062039" stroke={isHovered ? '#009345' : 'rgba(255,255,255,0.3)'} strokeWidth="1.5" />
            <text x="30" y="30" fill="#fff" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">API</text>
          </g>

          {/* Node 2: DATA */}
          <g transform="translate(95, 65)">
            <rect width="60" height="50" rx="6" fill="#062039" stroke={isHovered ? '#009345' : 'rgba(255,255,255,0.3)'} strokeWidth="1.5" />
            <text x="30" y="30" fill="#fff" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">DATA</text>
          </g>

          {/* Node 3: MODEL */}
          <g transform="translate(175, 65)">
            <rect width="60" height="50" rx="6" fill="#062039" stroke={isHovered ? '#009345' : 'rgba(255,255,255,0.3)'} strokeWidth="1.5" />
            <text x="30" y="30" fill="#fff" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">MODEL</text>
          </g>

          {/* Node 4: APP */}
          <g transform="translate(255, 65)">
            <rect width="60" height="50" rx="6" fill="#009345" stroke="#30ad6b" strokeWidth="1.5" />
            <text x="30" y="30" fill="#fff" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">APP</text>
          </g>

          <text x="20" y="25" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold">ENTERPRISE ARCHITECTURE</text>
        </svg>
      </div>
    );
  }

  // 3. AI & AUTOMATION: Processing Pipeline (RAW DATA -> PROCESSING -> PATTERNS -> INSIGHT)
  if (id === 'ai-automation') {
    return (
      <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center p-6">
        <svg className="w-full h-full" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Mesh Network Connections */}
          <line x1="60" y1="90" x2="130" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="60" y1="90" x2="130" y2="130" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="130" y1="50" x2="200" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="130" y1="130" x2="200" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="200" y1="90" x2="270" y2="90" stroke="#009345" strokeWidth="2" strokeDasharray="3 3" />

          {/* Node 1: RAW */}
          <circle cx="60" cy="90" r="14" fill="#062039" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
          <text x="60" y="93" fill="#cbd5e1" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">RAW</text>

          {/* Processing Nodes */}
          <circle cx="130" cy="50" r="12" fill="#062039" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
          <text x="130" y="53" fill="#cbd5e1" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">PROC</text>

          <circle cx="130" cy="130" r="12" fill="#062039" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
          <text x="130" y="133" fill="#cbd5e1" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">MODEL</text>

          {/* Patterns Node */}
          <circle cx="200" cy="90" r="14" fill="#062039" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="200" y="93" fill="#38bdf8" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">PATT</text>

          {/* Final Node: INSIGHT (Glows Green) */}
          <motion.circle
            cx="270"
            cy="90"
            r="18"
            fill="#009345"
            stroke="#30ad6b"
            strokeWidth="2"
            animate={{ scale: isHovered ? [1, 1.15, 1] : 1 }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
          <text x="270" y="93" fill="#fff" fontSize="7" fontFamily="monospace" fontWeight="bold" textAnchor="middle">INSIGHT</text>

          <text x="20" y="25" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold">INTELLIGENT PIPELINE</text>
        </svg>
      </div>
    );
  }

  // 4. FINANCIAL ANALYTICS: Quantitative Chart + Risk, Value, Portfolio, Model
  if (id === 'financial-analytics') {
    return (
      <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center p-6">
        <svg className="w-full h-full" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Quantitative Curves */}
          <path d="M 30 130 C 80 140, 100 70, 160 90 S 230 40, 290 50" stroke="#009345" strokeWidth="2.5" fill="none" />
          <path d="M 30 110 C 90 90, 120 130, 180 110 S 240 80, 290 70" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />

          {/* Risk Node */}
          <g transform="translate(70, 75)">
            <rect width="40" height="20" rx="3" fill="#062039" stroke="rgba(255,255,255,0.3)" />
            <text x="20" y="13" fill="#cbd5e1" fontSize="8" fontFamily="monospace" textAnchor="middle">RISK</text>
          </g>

          {/* Value Node */}
          <g transform="translate(145, 95)">
            <rect width="45" height="20" rx="3" fill="#062039" stroke="rgba(255,255,255,0.3)" />
            <text x="22" y="13" fill="#cbd5e1" fontSize="8" fontFamily="monospace" textAnchor="middle">VALUE</text>
          </g>

          {/* Portfolio Node */}
          <g transform="translate(210, 35)">
            <rect width="65" height="20" rx="3" fill="#009345" stroke="#30ad6b" />
            <text x="32" y="13" fill="#fff" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">PORTFOLIO</text>
          </g>

          <text x="20" y="25" fill="#009345" fontSize="9" fontFamily="monospace" fontWeight="bold">QUANTITATIVE SURVEILLANCE</text>
        </svg>
      </div>
    );
  }

  // 5. CLOUD & INFRASTRUCTURE: CLOUD -> DATA, API, APP Routes
  if (id === 'cloud-infra') {
    return (
      <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center p-6">
        <svg className="w-full h-full" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cloud Root */}
          <rect x="120" y="30" width="80" height="35" rx="6" fill="#062039" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="160" y="52" fill="#fff" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">CLOUD</text>

          {/* Routes */}
          <line x1="135" y1="65" x2="65" y2="115" stroke={isHovered ? '#009345' : 'rgba(255,255,255,0.3)'} strokeWidth="1.5" />
          <line x1="160" y1="65" x2="160" y2="115" stroke={isHovered ? '#009345' : 'rgba(255,255,255,0.3)'} strokeWidth="1.5" />
          <line x1="185" y1="65" x2="255" y2="115" stroke={isHovered ? '#009345' : 'rgba(255,255,255,0.3)'} strokeWidth="1.5" />

          {/* Target 1: DATA */}
          <rect x="35" y="115" width="60" height="30" rx="4" fill="#062039" stroke="rgba(255,255,255,0.3)" />
          <text x="65" y="134" fill="#cbd5e1" fontSize="9" fontFamily="monospace" textAnchor="middle">DATA</text>

          {/* Target 2: API */}
          <rect x="130" y="115" width="60" height="30" rx="4" fill="#062039" stroke="rgba(255,255,255,0.3)" />
          <text x="160" y="134" fill="#cbd5e1" fontSize="9" fontFamily="monospace" textAnchor="middle">API</text>

          {/* Target 3: APP */}
          <rect x="225" y="115" width="60" height="30" rx="4" fill="#009345" stroke="#30ad6b" />
          <text x="255" y="134" fill="#fff" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">APP</text>

          <text x="20" y="20" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold">SCALABLE INFRASTRUCTURE</text>
        </svg>
      </div>
    );
  }

  // 6. ADVISORY & VALUATION: Asset Valuation Vectors
  if (id === 'advisory-valuation') {
    return (
      <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center p-6">
        <svg className="w-full h-full" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Spatial Map Vector */}
          <rect x="40" y="40" width="240" height="100" rx="6" fill="none" stroke="rgba(255,255,255,0.15)" strokeDasharray="4 4" />
          <line x1="160" y1="40" x2="160" y2="140" stroke="rgba(255,255,255,0.1)" />
          <line x1="40" y1="90" x2="280" y2="90" stroke="rgba(255,255,255,0.1)" />

          {/* Highlighted Asset Pin */}
          <circle cx="110" cy="70" r="10" fill="#009345" stroke="#30ad6b" strokeWidth="2" />
          <line x1="110" y1="70" x2="210" y2="110" stroke="#009345" strokeWidth="2" />
          <circle cx="210" cy="110" r="6" fill="#38bdf8" />

          <text x="130" y="73" fill="#fff" fontSize="9" fontFamily="monospace" fontWeight="bold">ASSET VALUATION</text>
          <text x="225" y="113" fill="#cbd5e1" fontSize="9" fontFamily="monospace">BENCHMARK</text>
        </svg>
      </div>
    );
  }

  // 7. DEFAULT / CUSTOM ADVISORY
  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center p-6">
      <svg className="w-full h-full" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="160" cy="90" r="50" stroke="#009345" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="160" cy="90" r="25" stroke="#38bdf8" strokeWidth="1" />
        <circle cx="160" cy="90" r="5" fill="#009345" />
        <text x="160" y="155" fill="#cbd5e1" fontSize="9" fontFamily="monospace" textAnchor="middle">BESPOKE FINANCIAL SOLUTIONS</text>
      </svg>
    </div>
  );
}
