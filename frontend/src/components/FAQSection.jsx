import React, { useState } from 'react';
import { faqItems } from '../data/mockData';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      className="mt-5 flex w-full flex-col gap-6 items-center p-[2%] py-16"
      id="faq"
    >
      {/* Heading */}
      <h3 className="text-2xl md:text-3xl lg:text-4xl italic font-black leading-tight tracking-tighter text-center uppercase">
        <span className="block font-bold">
          Questions <span className="text-[#5ec5ff]">fréquentes</span>
        </span>
      </h3>

      {/* FAQ Items */}
      <div className="w-full max-w-2xl space-y-4 mt-8 px-4">
        {faqItems.map((item, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-[1.5rem] border border-[#5ec5ff]/20 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:border-[#5ec5ff]/30"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="text-base font-bold text-white pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[#5ec5ff] flex-shrink-0 transition-transform duration-300 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
