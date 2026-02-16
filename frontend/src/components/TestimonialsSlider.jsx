import React from 'react';
import { sliderImages } from '../data/mockData';
import CTAButton from './CTAButton';

const TestimonialsSlider = () => {
  const doubledImages = [...sliderImages, ...sliderImages];

  return (
    <section
      className="relative flex w-full mx-auto flex-col items-center gap-[5%] pt-[5%] px-4 md:px-[10%]"
      id="social-proof"
    >
      {/* Heading */}
      <h3 className="text-2xl md:text-3xl lg:text-4xl italic font-black leading-tight tracking-tighter text-center uppercase">
        <span className="block font-bold">
          Ceux qui sont <span className="text-[#5ec5ff]">passés</span>
        </span>
        <span className="block font-bold">
          <span className="text-[#5ec5ff]">à l'action</span> avec moi
        </span>
      </h3>

      {/* Slider Section */}
      <div className="w-full py-12 overflow-hidden">
        <div className="space-y-8">
          {/* Row 1 - Left to Right */}
          <div className="flex w-max animate-marquee">
            {doubledImages.map((img, i) => (
              <img
                key={`r1-${i}`}
                src={img}
                alt={`Témoignage ${(i % 10) + 1}`}
                className="h-[200px] md:h-[280px] w-auto object-cover mx-3 rounded-lg flex-shrink-0 hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            ))}
          </div>

          {/* Row 2 - Right to Left */}
          <div className="flex w-max animate-marquee-reverse">
            {doubledImages.map((img, i) => (
              <img
                key={`r2-${i}`}
                src={img}
                alt={`Témoignage ${(i % 10) + 1}`}
                className="h-[200px] md:h-[280px] w-auto object-cover mx-3 rounded-lg flex-shrink-0 hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>

      <CTAButton />
    </section>
  );
};

export default TestimonialsSlider;
