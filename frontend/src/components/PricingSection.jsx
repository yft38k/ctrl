import React from 'react';
import { pricingFeatures, stripePaymentLink } from '../data/mockData';
import { Check, ArrowRight } from 'lucide-react';

const PricingSection = () => {
  return (
    <section
      className="mt-5 flex w-full flex-col gap-6 items-center p-[2%] py-16"
      id="pricing"
    >
      {/* Heading */}
      <h3 className="text-2xl md:text-3xl lg:text-4xl italic font-black leading-tight tracking-tighter text-center uppercase">
        <span className="block font-bold">
          <span className="text-[#5ec5ff]">Tout</span> ce dont
        </span>
        <span className="block font-bold">
          tu as <span className="text-[#5ec5ff]">besoin</span> !
        </span>
      </h3>

      {/* Pricing Card */}
      <div className="flex justify-center mt-3">
        <div className="group relative w-[380px] min-h-[700px] rounded-[24px] border border-white/10 bg-[#020618] p-8 shadow-2xl overflow-hidden transition-all duration-500 hover:border-[#5ec5ff]/30 hover:shadow-[0_0_60px_rgba(94,197,255,0.1)]">
          {/* Gradient background */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5" />

          {/* Neon border SVG */}
          <svg className="absolute inset-0 z-20 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 5px rgba(96, 165, 250, 0.2))' }}>
            <defs>
              <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
            </defs>
            <rect
              x="1" y="1"
              width="calc(100% - 2px)"
              height="calc(100% - 2px)"
              rx="23" fill="none"
              stroke="url(#neonGrad)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              className="opacity-40"
            />
          </svg>

          {/* Price */}
          <div className="relative z-10 mt-4 text-center">
            <h3 className="text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
              150€
            </h3>
            <p className="text-sm text-gray-500 mt-2 font-medium">Paiement unique • Accès à vie</p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8" />

          {/* Features List */}
          <div className="relative z-10 space-y-5">
            {pricingFeatures.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 group/item">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5ec5ff]/10 border border-[#5ec5ff]/30 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-[#5ec5ff]" />
                </div>
                <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="relative z-10 mt-10">
            <a
              href={stripePaymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-[56px] flex items-center justify-center rounded-[14px] bg-gradient-to-r from-[#5ec5ff]/20 to-purple-500/20 border border-[#5ec5ff]/30 text-white font-bold uppercase tracking-widest text-sm hover:from-[#5ec5ff]/30 hover:to-purple-500/30 hover:border-[#5ec5ff]/50 hover:shadow-[0_0_30px_rgba(94,197,255,0.2)] transition-all duration-300 group/cta no-underline"
            >
              Rejoindre CTRL
              <ArrowRight className="w-5 h-5 ml-2 text-[#5ec5ff] group-hover/cta:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
