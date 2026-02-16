import React from 'react';
import { ArrowRight } from 'lucide-react';
import { stripePaymentLink } from '../data/mockData';

const CTAButton = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <a
        href={stripePaymentLink}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-premium group relative w-[280px] h-[64px] flex items-center justify-center rounded-[14px] bg-[#0a0e27]/80 backdrop-blur-sm border border-[#5ec5ff]/30 overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#5ec5ff]/60 hover:shadow-[0_0_30px_rgba(94,197,255,0.15)] no-underline"
      >
        {/* Animated neon border */}
        <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            rx="14"
            ry="14"
            fill="none"
            stroke="#5ec5ff"
            strokeWidth="2"
            pathLength="100"
            className="neon-path-anim"
          />
        </svg>

        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        <span className="flex items-center gap-2 font-bold uppercase tracking-widest text-white text-sm z-10">
          Rejoindre CTRL
          <ArrowRight className="w-5 h-5 text-[#5ec5ff] transition-transform duration-300 group-hover:translate-x-2" />
        </span>
      </a>
    </div>
  );
};

export default CTAButton;
