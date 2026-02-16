import React from 'react';
import CTAButton from './CTAButton';

const Footer = () => {
  return (
    <footer className="relative w-full py-16 mt-10">
      {/* Top CTA area */}
      <div className="flex flex-col items-center gap-8 mb-16">
        <CTAButton />
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 pt-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <span className="text-2xl font-black italic tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-blue-200 to-blue-400 opacity-60">
            CTRL
          </span>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-gray-300 transition-colors">CGV</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Politique de confidentialité</a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-600">
            © 2025 CTRL. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
