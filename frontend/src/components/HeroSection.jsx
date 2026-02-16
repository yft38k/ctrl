import React from 'react';
import { stripePaymentLink } from '../data/mockData';
import CTAButton from './CTAButton';

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[80vh] flex flex-col items-center justify-center pt-24 pb-12 px-4 overflow-hidden"
      id="hero-section"
    >
      {/* Purple glow orb */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-purple-600/30 blur-[80px]" />

      {/* Logo Text */}
      <div className="relative z-10 mb-6">
        <h1 className="text-[80px] md:text-[120px] lg:text-[160px] font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-blue-200 to-blue-400 drop-shadow-[0_0_40px_rgba(94,197,255,0.3)]" style={{ fontStyle: 'italic' }}>
          CTRL
        </h1>
      </div>

      {/* Headline */}
      <div className="text-center pt-[3vh] relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight uppercase">
          <span className="block text-xl md:text-2xl lg:text-3xl font-light text-white">
            Je te dévoile enfin :
          </span>
          <span className="block font-bold text-white mt-2">
            Comment je gagne ma vie juste en
          </span>
          <span className="block font-light text-white">
            postant des photos sur Vinted
          </span>
        </h2>
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-4 mt-10 max-md:flex-col items-center relative z-10">
        {/* Discord Button */}
        <a
          href="https://discord.gg/ctrlfr"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[280px] h-[64px] flex items-center justify-center rounded-[14px] bg-[#5865F2] text-white font-bold uppercase tracking-wider border border-[#5865F2] hover:bg-[#4752C4] hover:scale-105 transition-all duration-300"
        >
          <span className="flex items-center gap-2">
            Rejoindre le Discord
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </span>
        </a>

        <CTAButton />
      </div>
    </section>
  );
};

export default HeroSection;
