'use client';

import React from 'react';
import { ChevronUp } from 'lucide-react';

interface FooterProps {
  onNavigateToStage?: (stage: number) => void;
  onOpenCapabilities?: () => void;
}

export function Footer({ onNavigateToStage, onOpenCapabilities }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenCapabilities) {
      onOpenCapabilities();
    } else if (onNavigateToStage) {
      onNavigateToStage(2);
    }
  };

  const handleSolutionsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateToStage) {
      onNavigateToStage(4);
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateToStage) {
      onNavigateToStage(5);
    } else {
      const el = document.getElementById('stage-5-connect');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#2e3848] text-slate-300">
      {/* Top White Curved Card Area matching BTM Financial Design */}
      <div className="bg-white rounded-b-[40px] md:rounded-b-[70px] lg:rounded-b-[90px] shadow-sm pt-14 pb-16 px-6 sm:px-10 lg:px-16 text-slate-600">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          
          {/* SERVICES (2 Sub-Columns) - 6 cols on md/lg */}
          <div className="md:col-span-6 lg:col-span-6">
            <h3 className="text-sm font-extrabold tracking-wider text-[#111827] uppercase mb-6 font-sans">
              SERVICES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-[13.5px] leading-relaxed text-slate-500">
              {/* Column 1 */}
              <ul className="space-y-3">
                <li>
                  <a
                    href="#services"
                    onClick={handleServicesClick}
                    className="hover:text-[#009345] transition-colors duration-200 block"
                  >
                    Application Services
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={handleServicesClick}
                    className="hover:text-[#009345] transition-colors duration-200 block"
                  >
                    Data &amp; Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={handleServicesClick}
                    className="hover:text-[#009345] transition-colors duration-200 block"
                  >
                    Technology Consulting
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={handleServicesClick}
                    className="hover:text-[#009345] transition-colors duration-200 block"
                  >
                    Cloud Computing
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={handleServicesClick}
                    className="hover:text-[#009345] transition-colors duration-200 block"
                  >
                    Structured Finance
                  </a>
                </li>
              </ul>

              {/* Column 2 */}
              <ul className="space-y-3">
                <li>
                  <a
                    href="#services"
                    onClick={handleServicesClick}
                    className="hover:text-[#009345] transition-colors duration-200 block"
                  >
                    Quant Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={handleServicesClick}
                    className="hover:text-[#009345] transition-colors duration-200 block"
                  >
                    Fixed Income &amp; Equity Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={handleServicesClick}
                    className="hover:text-[#009345] transition-colors duration-200 block"
                  >
                    Valuation and Advisory Services
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={handleServicesClick}
                    className="hover:text-[#009345] transition-colors duration-200 block"
                  >
                    Artificial Intelligence &amp; Machine Learning
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={handleServicesClick}
                    className="hover:text-[#009345] transition-colors duration-200 block"
                  >
                    Specialized Support Team
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* COMPANY Column - 3 cols */}
          <div className="md:col-span-3 lg:col-span-2 md:border-r md:border-slate-200 md:pr-4">
            <h3 className="text-sm font-extrabold tracking-wider text-[#111827] uppercase mb-6 font-sans">
              COMPANY
            </h3>
            <ul className="space-y-3 text-[13.5px] leading-relaxed text-slate-500">
              <li>
                <a
                  href="#industries"
                  onClick={handleServicesClick}
                  className="hover:text-[#009345] transition-colors duration-200 block"
                >
                  Industries
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  onClick={handleSolutionsClick}
                  className="hover:text-[#009345] transition-colors duration-200 block"
                >
                  Solutions
                </a>
              </li>
              <li>
                <span className="hover:text-[#009345] transition-colors duration-200 block cursor-pointer">
                  Terms Of Use
                </span>
              </li>
              <li>
                <span className="hover:text-[#009345] transition-colors duration-200 block cursor-pointer">
                  Privacy Policy
                </span>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={handleContactClick}
                  className="hover:text-[#009345] transition-colors duration-200 block"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT BRAND & ADDRESS COLUMN - 3-4 cols */}
          <div className="md:col-span-3 lg:col-span-4 flex flex-col justify-between pl-0 lg:pl-4 space-y-6">
            {/* Logo */}
            <div>
              <img
                src="/images/logo.jpg"
                alt="BTM FINANCIAL - INNOVATION AT WORK"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Office Locations */}
            <div className="space-y-4 text-xs leading-relaxed text-slate-600 font-normal">
              {/* US Location */}
              <div className="flex items-start gap-2.5">
                <span className="text-base select-none shrink-0" aria-label="United States" role="img">
                  🇺🇸
                </span>
                <span className="text-[12.5px] text-slate-600">
                  4 Canterbury Road, Denville, NJ -07834, United States
                </span>
              </div>

              {/* India Location */}
              <div className="flex items-start gap-2.5">
                <span className="text-base select-none shrink-0" aria-label="India" role="img">
                  🇮🇳
                </span>
                <span className="text-[12.5px] text-slate-600 leading-snug">
                  Unit No. 807, Tower-B4, Spaze I Tech Park, Sector-49, Sohna Road, Gurgaon Haryana, India (122018)
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright, Site Credits and Scroll-to-Top Bar */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Copyright Text */}
        <div className="text-center md:text-left text-xs text-slate-400 font-normal">
          &copy; 2021 BTM Financial. All rights reserved.
        </div>

        {/* Right Bottom: Site Credit Logos & Scroll to Top */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center md:justify-end">
          {/* Site Credit Badge (FabulousMedia + GoCommercially) */}
          <div className="flex items-center gap-2.5 px-3 py-1.5 border border-white/20 rounded-[10px] bg-white/[0.03] backdrop-blur-[10px] w-fit shadow-xs">
            <a
              href="https://play.fabulousmedia.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FabulousMedia"
              className="flex items-center justify-center bg-white px-1.5 py-1 rounded-[6px] opacity-60 hover:opacity-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(253,181,20,0.5)]"
            >
              <img
                src="https://play.fabulousmedia.in/sitecredit/images/fabulousmedia.svg"
                alt="FabulousMedia"
                className="h-3 sm:h-3.5 w-auto block object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://www.infabio.com/fabulous-logo.webp';
                }}
              />
            </a>

            <div className="w-[1px] h-3 bg-white/20" />

            <a
              href="https://gocommercially.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GoCommercially"
              className="flex items-center justify-center bg-white px-1.5 py-1 rounded-[6px] opacity-60 hover:opacity-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(253,181,20,0.5)]"
            >
              <img
                src="https://play.fabulousmedia.in/sitecredit/images/gocommercially.svg"
                alt="GoCommercially"
                className="h-3 sm:h-3.5 w-auto block object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://www.infabio.com/gocommercially-logo.webp';
                }}
              />
            </a>
          </div>

          {/* Scroll To Top Button */}
          <button
            onClick={scrollToTop}
            type="button"
            aria-label="Scroll to top"
            className="h-9 w-9 rounded-full border border-slate-500/40 hover:border-white text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 bg-slate-800/40 hover:bg-slate-700/60 shadow-inner shrink-0 cursor-pointer"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
