'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { Shield, Globe2, Flame, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="py-20 bg-wood-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-wood-900 rounded-full border border-wood-700">
            MonBois.eu
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-amber-50 mt-4 mb-4">
            {t.title}
          </h2>
          <p className="text-wood-200 text-base sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-serif text-white border-l-4 border-amber-500 pl-4">
              {t.storyTitle}
            </h3>
            <p className="text-wood-200 leading-relaxed text-sm sm:text-base">
              {t.storyDesc1}
            </p>
            <p className="text-wood-200 leading-relaxed text-sm sm:text-base">
              {t.storyDesc2}
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-sm text-wood-100">
                <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Fourniture en grumes, plots séchés, avivés et éléments sur-mesure</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-wood-100">
                <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Normes phytosanitaires NIMP15 pour l'exportation vers l'Amérique du Nord</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-wood-100">
                <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Service sur-mesure pour architectes, parqueteurs et industriels</span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-wood-800">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=1000"
                alt="Timber warehouse and processing"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wood-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-wood-900/90 backdrop-blur-md rounded-xl border border-wood-700">
                <p className="text-xs text-amber-400 font-bold uppercase">Engagement Qualité & Traçabilité</p>
                <p className="text-sm text-white font-medium mt-1">Chaque pièce expédiée fait l'objet d'un contrôle rigoureux de l'hygrométrie et de la qualité du fil.</p>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-wood-900/80 rounded-xl p-6 border border-wood-800 hover:border-wood-600 transition-colors">
            <div className="w-12 h-12 bg-wood-800 rounded-lg flex items-center justify-center text-amber-400 mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold font-serif text-white mb-2">
              {t.card1Title}
            </h4>
            <p className="text-xs sm:text-sm text-wood-300 leading-relaxed">
              {t.card1Desc}
            </p>
          </div>

          <div className="bg-wood-900/80 rounded-xl p-6 border border-wood-800 hover:border-wood-600 transition-colors">
            <div className="w-12 h-12 bg-wood-800 rounded-lg flex items-center justify-center text-amber-400 mb-4">
              <Globe2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold font-serif text-white mb-2">
              {t.card2Title}
            </h4>
            <p className="text-xs sm:text-sm text-wood-300 leading-relaxed">
              {t.card2Desc}
            </p>
          </div>

          <div className="bg-wood-900/80 rounded-xl p-6 border border-wood-800 hover:border-wood-600 transition-colors">
            <div className="w-12 h-12 bg-wood-800 rounded-lg flex items-center justify-center text-amber-400 mb-4">
              <Flame className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold font-serif text-white mb-2">
              {t.card3Title}
            </h4>
            <p className="text-xs sm:text-sm text-wood-300 leading-relaxed">
              {t.card3Desc}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
