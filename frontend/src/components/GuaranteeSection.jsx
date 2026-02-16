import React from 'react';
import { guaranteeItems } from '../data/mockData';
import { ShieldCheck, Headphones, RefreshCw } from 'lucide-react';

const icons = [ShieldCheck, Headphones, RefreshCw];

const GuaranteeSection = () => {
  return (
    <section
      className="mt-5 flex w-full flex-col gap-6 items-center p-[2%] py-16"
      id="guarantee"
    >
      {/* Heading */}
      <h3 className="text-2xl md:text-3xl lg:text-4xl italic font-black leading-tight tracking-tighter text-center uppercase">
        <span className="block font-bold">
          Notre <span className="text-[#5ec5ff]">garantie</span>
        </span>
        <span className="block font-bold">
          <span className="text-[#5ec5ff]">en béton</span>
        </span>
      </h3>

      {/* Guarantee Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8 px-4">
        {guaranteeItems.map((item, i) => {
          const Icon = icons[i];
          return (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[2rem] border border-[#5ec5ff]/20 bg-white/[0.03] backdrop-blur-md p-8 transition-all duration-500 hover:border-[#5ec5ff]/40 hover:shadow-[0_0_30px_rgba(94,197,255,0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5ec5ff]/5 via-transparent to-transparent opacity-50" />
              <div className="relative z-10">
                <div className="flex items-center justify-center w-14 h-14 bg-[#5ec5ff]/10 rounded-2xl border border-[#5ec5ff]/30 mb-6">
                  <Icon className="w-7 h-7 text-[#5ec5ff] drop-shadow-[0_0_8px_rgba(94,197,255,0.5)]" />
                </div>
                <h4 className="text-lg font-black tracking-wider text-white uppercase mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GuaranteeSection;
