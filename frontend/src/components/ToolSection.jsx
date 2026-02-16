import React from 'react';
import { toolAvatars } from '../data/mockData';
import CTAButton from './CTAButton';

const ToolSection = () => {
  return (
    <section
      className="mt-5 flex w-full flex-col gap-6 items-center p-[2%]"
      id="tools"
    >
      {/* Heading */}
      <h3 className="text-2xl md:text-3xl lg:text-4xl italic font-black leading-tight tracking-tighter text-center uppercase">
        <span className="block font-bold">
          L'outil qui <span className="text-[#5ec5ff]">te place</span>
        </span>
        <span className="block font-bold">
          <span className="text-[#5ec5ff]">devant </span>99% des vendeurs
        </span>
      </h3>

      {/* Animated Arrows */}
      <img
        src="https://lbcx.fr/images/arrows-animated.gif"
        alt="Arrow"
        className="w-[100px] h-[100px] mt-2 mb-2"
      />

      {/* Avatar Earnings Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto p-8">
        {toolAvatars.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center group transition-all duration-700"
          >
            {/* Avatar with spinning border */}
            <div className="relative flex items-center justify-center w-40 h-40 mb-8">
              <div className="absolute inset-[-20%] rounded-full bg-[#5ec5ff]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div
                className="absolute inset-0 rounded-full border border-[#5ec5ff]/10"
                style={{ animation: `spin ${20 + i * 5}s linear infinite${i === 1 ? ' reverse' : ''}` }}
              />
              <div
                className="absolute inset-3 rounded-full border-t-2 border-l-2 border-[#5ec5ff]/40"
                style={{ animation: `spin ${8 + i * 2}s cubic-bezier(0.4,0,0.2,1) infinite${i === 2 ? ' reverse' : ''}` }}
              />
              <div className="relative w-28 h-28 overflow-hidden rounded-full border border-[#5ec5ff]/50 bg-[#05001a] shadow-[0_0_30px_rgba(94,197,255,0.2)]">
                <img
                  src={item.image}
                  alt="Avatar"
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
              </div>
            </div>

            {/* Amount */}
            <div className="relative">
              <div className="text-5xl font-[1000] tracking-tighter text-green-400 italic leading-none drop-shadow-[0_0_15px_rgba(74,222,128,0.3)]">
                {item.amount}
              </div>
              <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-green-400 to-transparent transition-all duration-700 mt-2 mx-auto" />
            </div>

            {/* Period */}
            <div className="mt-4 text-[14px] uppercase tracking-[0.5em] text-[#5ec5ff] font-black opacity-40 group-hover:opacity-100 transition-opacity">
              {item.period}
            </div>
          </div>
        ))}
      </div>

      <CTAButton />
    </section>
  );
};

export default ToolSection;
