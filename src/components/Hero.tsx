'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { ShieldCheck, Truck, Award, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section id="hero" className="relative bg-wood-950 text-white overflow-hidden">
      {/* Background overlay with warm texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&q=80&w=1920')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-wood-950 via-wood-950/95 to-wood-900/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
        <div className="max-w-3xl">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-wood-800/80 border border-wood-600/50 text-amber-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm">
            <Award className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="truncate">{t.tagline}</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-amber-50 tracking-tight leading-tight mb-5 sm:mb-6">
            {t.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-wood-200 leading-relaxed mb-8">
            {t.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-12 sm:mb-14">
            <a
              href="#search"
              className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-amber-500 hover:bg-amber-400 text-wood-950 font-bold rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all text-sm sm:text-base"
            >
              <span>{t.exploreBtn}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-wood-800/80 hover:bg-wood-800 text-amber-100 font-semibold rounded-xl border border-wood-600/60 backdrop-blur-sm transition-all text-sm sm:text-base"
            >
              <span>{t.contactBtn}</span>
            </a>
          </div>

          {/* Trust Highlights - Responsive Grid (1 col on mobile, 3 cols on sm+) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-wood-800/80 text-wood-200">
            <div className="flex items-center gap-3 bg-wood-900/40 p-3 sm:p-0 rounded-xl sm:bg-transparent">
              <div className="p-2.5 bg-wood-800/80 rounded-lg text-amber-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base sm:text-lg font-bold text-white leading-tight">{t.stat1Number}</p>
                <p className="text-xs text-wood-300 capitalize">{t.stat1Text}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-wood-900/40 p-3 sm:p-0 rounded-xl sm:bg-transparent">
              <div className="p-2.5 bg-wood-800/80 rounded-lg text-amber-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base sm:text-lg font-bold text-white leading-tight">{t.stat2Number}</p>
                <p className="text-xs text-wood-300 capitalize">{t.stat2Text}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-wood-900/40 p-3 sm:p-0 rounded-xl sm:bg-transparent">
              <div className="p-2.5 bg-wood-800/80 rounded-lg text-amber-400 shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base sm:text-lg font-bold text-white leading-tight">{t.stat3Number}</p>
                <p className="text-xs text-wood-300 capitalize">{t.stat3Text}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
