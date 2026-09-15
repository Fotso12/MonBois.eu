'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { Trees, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const navT = translations[language].nav;

  return (
    <footer className="bg-wood-950 text-wood-300 border-t border-wood-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-wood-800 text-amber-400 flex items-center justify-center">
                <Trees className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-serif text-white tracking-tight">
                MonBois<span className="text-amber-400">.eu</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-wood-400 leading-relaxed max-w-md">
              {t.brandDesc}
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400">
              <Globe className="w-4 h-4" />
              <span>EU: MonBois.eu | US: MonBois.us</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold font-serif text-white uppercase tracking-wider mb-4 border-b border-wood-800 pb-2">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-amber-300 transition-colors">
                  {navT.home}
                </a>
              </li>
              <li>
                <a href="#search" className="hover:text-amber-300 transition-colors">
                  Catalogue & Recherche
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  {navT.about}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  {navT.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Wood Categories */}
          <div>
            <h4 className="text-sm font-bold font-serif text-white uppercase tracking-wider mb-4 border-b border-wood-800 pb-2">
              {t.catalogTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-wood-400">
              <li>Chêne Européen & Noyer Americain</li>
              <li>Teck & Bois Tropicaux</li>
              <li>Douglas & Pins de Structure</li>
              <li>Érable, Cèdre & Bois de Lutherie</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-wood-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-wood-500 gap-4">
          <p>© {new Date().getFullYear()} MonBois.eu. {t.rights}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-wood-300 transition-colors">{t.legal}</a>
            <a href="#" className="hover:text-wood-300 transition-colors">{t.privacy}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
