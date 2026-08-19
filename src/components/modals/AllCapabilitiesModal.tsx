'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BTM_CAPABILITIES } from '@/data/capabilities';
import { Capability } from '@/data/types';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  X,
  Compass,
  ArrowRight,
  BarChart3,
  Code2,
  Layers,
  Cloud,
  PieChart,
  TrendingUp,
  LineChart,
  Scale,
  Cpu,
  Users
} from 'lucide-react';

interface AllCapabilitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCapability: (capability: Capability) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 className="h-5 w-5" />,
  Code2: <Code2 className="h-5 w-5" />,
  Layers: <Layers className="h-5 w-5" />,
  Cloud: <Cloud className="h-5 w-5" />,
  PieChart: <PieChart className="h-5 w-5" />,
  TrendingUp: <TrendingUp className="h-5 w-5" />,
  LineChart: <LineChart className="h-5 w-5" />,
  Scale: <Scale className="h-5 w-5" />,
  Cpu: <Cpu className="h-5 w-5" />,
  Users: <Users className="h-5 w-5" />
};

export function AllCapabilitiesModal({
  isOpen,
  onClose,
  onSelectCapability
}: AllCapabilitiesModalProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const categories = [
    { id: 'all', label: 'All Services (10)' },
    { id: 'analytics', label: 'Data & Analytics' },
    { id: 'tech', label: 'Technology & Engineering' },
    { id: 'financial', label: 'Financial & Quant Modeling' },
    { id: 'advisory', label: 'Valuation & Support' }
  ];

  const filteredCapabilities =
    activeCategory === 'all'
      ? BTM_CAPABILITIES
      : BTM_CAPABILITIES.filter((c) => {
          if (activeCategory === 'analytics') return c.category === 'analytics';
          if (activeCategory === 'tech') return c.category === 'tech' || c.category === 'cloud' || c.category === 'ai';
          if (activeCategory === 'financial') return c.category === 'financial';
          if (activeCategory === 'advisory') return c.category === 'advisory';
          return true;
        });

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#062039]/70 backdrop-blur-sm transition-opacity"
          />

          {/* Dialog Container */}
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white text-left shadow-2xl border border-slate-200"
            >
              {/* Header */}
              <div className="border-b border-slate-200 bg-[#062039] p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Compass className="h-5 w-5 text-[#009345]" />
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
                      BTM Capability Directory
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-lg p-1.5 text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight">
                  Complete BTM Solutions & Services
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  Explore BTM’s full spectrum of specialized financial advisory, data science, and technology capabilities.
                </p>

                {/* Filter Tabs */}
                <div className="mt-4 flex flex-wrap gap-2 pt-2 border-t border-slate-700">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategory(cat.id)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                        activeCategory === cat.id
                          ? 'bg-[#009345] text-white font-semibold shadow-sm'
                          : 'bg-white/10 text-slate-300 hover:bg-white/20'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid Content */}
              <div className="max-h-[60vh] overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCapabilities.map((cap) => {
                  const icon = ICON_MAP[cap.iconName] || <Layers className="h-5 w-5" />;

                  return (
                    <div
                      key={cap.id}
                      onClick={() => {
                        onClose();
                        onSelectCapability(cap);
                      }}
                      className="group rounded-xl border border-slate-200 bg-white p-4.5 hover:border-[#009345] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#062039]/5 text-[#062039] group-hover:bg-[#009345] group-hover:text-white transition-colors">
                            {icon}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#062039] group-hover:text-[#009345] transition-colors">
                              {cap.name}
                            </h4>
                            <span className="text-[10px] font-mono text-slate-400 uppercase">
                              {cap.category}
                            </span>
                          </div>
                        </div>

                        <p className="mt-2.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {cap.tagline}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#009345]">
                        <span>View specifications</span>
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 flex items-center justify-end">
                <Button variant="primary" size="sm" onClick={onClose}>
                  Back to Diagnostic Funnel
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
