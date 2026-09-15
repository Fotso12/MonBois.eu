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
      <div className="absolute inset-0 bg-gradient-to-r from-wood-950 via-wood-950/90 to-wood-900/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wood-800/80 border border-wood-600/50 text-amber-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm">
            <Award className="w-4 h-4 text-amber-400" />
            <span>{t.tagline}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-amber-50 tracking-tight leading-tight mb-6">
            {t.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-wood-200 leading-relaxed mb-8">
            {t.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <a
              href="#search"
              className="flex items-center justify-center gap-2 px-7 py-4 bg-amber-500 hover:bg-amber-400 text-wood-950 font-bold rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all text-base"
            >
              <span>{t.exploreBtn}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-7 py-4 bg-wood-800/80 hover:bg-wood-800 text-amber-100 font-semibold rounded-xl border border-wood-600/60 backdrop-blur-sm transition-all text-base"
            >
              <span>{t.contactBtn}</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-wood-800/80 text-wood-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-wood-800/60 rounded-lg text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base sm:text-lg font-bold text-white">{t.stat1Number}</p>
                <p className="text-xs text-wood-300 capitalize">{t.stat1Text}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-wood-800/60 rounded-lg text-amber-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base sm:text-lg font-bold text-white">{t.stat2Number}</p>
                <p className="text-xs text-wood-300 capitalize">{t.stat2Text}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-wood-800/60 rounded-lg text-amber-400">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base sm:text-lg font-bold text-white">{t.stat3Number}</p>
                <p className="text-xs text-wood-300 capitalize">{t.stat3Text}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
