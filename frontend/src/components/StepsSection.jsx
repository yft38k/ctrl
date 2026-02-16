import React from 'react';
import { steps } from '../data/mockData';
import { Search, Package, Send, RefreshCw } from 'lucide-react';
import CTAButton from './CTAButton';

const iconMap = {
  search: Search,
  package: Package,
  send: Send,
  refresh: RefreshCw,
};

const StepsSection = () => {
  return (
    <section
      className="mt-5 flex w-full flex-col gap-6 items-center p-[2%]"
      id="steps"
    >
      {/* Heading */}
      <h3 className="text-2xl md:text-3xl lg:text-4xl italic font-black leading-tight tracking-tighter text-center uppercase">
        <span className="block font-bold">
          Ton plan <span className="text-[#5ec5ff]">simple</span>
        </span>
        <span className="block font-bold">
          en <span className="text-[#5ec5ff]">4 étapes</span>
        </span>
      </h3>

      {/* Steps */}
      <div className="w-full max-w-2xl p-2 space-y-6">
        {steps.map((step) => {
          const Icon = iconMap[step.icon];
          return (
            <div
              key={step.number}
              className="relative flex items-center group transition-all duration-500"
            >
              {/* Background number */}
              <div
                className="absolute left-0 sm:-left-8 text-6xl sm:text-8xl italic font-black pointer-events-none select-none opacity-20 group-hover:opacity-40 transition-all duration-500"
                style={{
                  WebkitTextStroke: '2px #5ec5ff',
                  color: 'transparent',
                  transform: 'translateX(-10%)',
                }}
              >
                {step.number}
              </div>

              {/* Card */}
              <div className="relative flex-1 ml-12 sm:ml-10 overflow-hidden rounded-[2rem] border border-[#5ec5ff]/20 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:border-[#5ec5ff]/40 hover:shadow-[0_0_30px_rgba(94,197,255,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5ec5ff]/10 via-transparent to-transparent opacity-50" />
                <div className="relative flex flex-col sm:flex-row items-center sm:items-start p-4 sm:p-6 space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#5ec5ff]/10 rounded-2xl border border-[#5ec5ff]/30">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#5ec5ff] drop-shadow-[0_0_8px_rgba(94,197,255,0.5)]" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black tracking-widest text-white uppercase">
                      {step.title}
                    </h3>
                    <p className="font-medium leading-relaxed text-gray-400">
                      {step.description}{' '}
                      <span className="text-[#5ec5ff]">{step.highlight}</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <div className="flex items-center gap-2 px-5 py-2 text-[10px] font-black tracking-[0.2em] text-[#5ec5ff] border border-[#5ec5ff]/30 rounded-full uppercase bg-[#5ec5ff]/5">
            <span className="w-1.5 h-1.5 bg-[#5ec5ff] rounded-full animate-pulse" />
            Faible Budget
          </div>
          <div className="flex items-center gap-2 px-5 py-2 text-[10px] font-black tracking-[0.2em] text-[#5ec5ff] border border-[#5ec5ff]/30 rounded-full uppercase bg-[#5ec5ff]/5">
            <span className="w-1.5 h-1.5 bg-[#5ec5ff] rounded-full animate-pulse" />
            100% Anonyme
          </div>
        </div>
      </div>

      <CTAButton />
    </section>
  );
};

export default StepsSection;
