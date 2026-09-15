'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { Trees, Globe, Mail, DollarSign, Euro, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, currency, toggleCurrency } = useLanguage();
  const t = translations[language].nav;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-wood-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-wood-800 text-wood-100 flex items-center justify-center shadow-md group-hover:bg-wood-700 transition-colors shrink-0">
              <Trees className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold font-serif text-wood-950 tracking-tight block">
                MonBois<span className="text-wood-600">.eu</span>
              </span>
              <span className="block text-[10px] sm:text-xs text-wood-600 font-medium -mt-1">
                Europe & America Timber
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a
              href="#hero"
              className="text-wood-800 hover:text-wood-600 font-medium transition-colors text-sm"
            >
              {t.home}
            </a>
            <a
              href="#search"
              className="text-wood-800 hover:text-wood-600 font-medium transition-colors text-sm"
            >
              Catalogue
            </a>
            <a
              href="#about"
              className="text-wood-800 hover:text-wood-600 font-medium transition-colors text-sm"
            >
              {t.about}
            </a>
            <a
              href="#contact"
              className="text-wood-800 hover:text-wood-600 font-medium transition-colors text-sm"
            >
              {t.contact}
            </a>
          </nav>

          {/* Action Controls (Email button, Currency, Language Switcher) */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Direct Email Action Button */}
            <a
              href="mailto:contact@monbois.eu"
              className="flex items-center gap-2 px-3.5 py-2 bg-wood-100 text-wood-900 hover:bg-wood-200 rounded-lg text-sm font-semibold transition-colors border border-wood-300"
            >
              <Mail className="w-4 h-4 text-wood-700" />
              <span>{t.emailBtn}</span>
            </a>

            {/* Currency Switcher */}
            <button
              onClick={toggleCurrency}
              title="Changer la devise"
              className="flex items-center gap-1.5 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-sm font-semibold transition-colors border border-stone-300"
            >
              {currency === 'EUR' ? (
                <>
                  <Euro className="w-4 h-4 text-emerald-600" />
                  <span>EUR (€)</span>
                </>
              ) : (
                <>
                  <DollarSign className="w-4 h-4 text-blue-600" />
                  <span>USD ($)</span>
                </>
              )}
            </button>

            {/* Language Switcher with Icon */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3.5 py-2 bg-wood-800 hover:bg-wood-900 text-white rounded-lg text-sm font-semibold shadow-sm transition-all"
            >
              <Globe className="w-4 h-4 text-amber-300" />
              <span>{language === 'fr' ? '🇫🇷 FR | EN' : '🇬🇧 EN | FR'}</span>
            </button>
          </div>

          {/* Mobile menu button and quick controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleCurrency}
              className="px-2.5 py-1.5 bg-stone-100 text-stone-900 rounded-lg text-xs font-bold border border-stone-300 flex items-center gap-1"
              title="Change Currency"
            >
              {currency === 'EUR' ? <Euro className="w-3.5 h-3.5 text-emerald-600" /> : <DollarSign className="w-3.5 h-3.5 text-blue-600" />}
              <span>{currency}</span>
            </button>

            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 bg-wood-800 text-amber-300 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm"
              title="Changer la langue"
            >
              <Globe className="w-3.5 h-3.5 text-amber-300" />
              <span>{language.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-wood-900 hover:bg-wood-100 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-wood-200 px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="text-wood-900 font-semibold py-2.5 px-3 rounded-lg hover:bg-wood-50 border-b border-stone-100"
            >
              {t.home}
            </a>
            <a
              href="#search"
              onClick={() => setMobileMenuOpen(false)}
              className="text-wood-900 font-semibold py-2.5 px-3 rounded-lg hover:bg-wood-50 border-b border-stone-100"
            >
              Catalogue
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-wood-900 font-semibold py-2.5 px-3 rounded-lg hover:bg-wood-50 border-b border-stone-100"
            >
              {t.about}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-wood-900 font-semibold py-2.5 px-3 rounded-lg hover:bg-wood-50 border-b border-stone-100"
            >
              {t.contact}
            </a>
          </nav>
          
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="mailto:contact@monbois.eu"
              className="flex items-center justify-center gap-2 py-3 bg-wood-100 text-wood-900 rounded-xl font-bold border border-wood-300 text-sm"
            >
              <Mail className="w-4 h-4 text-wood-700" />
              <span>{t.emailBtn} (contact@monbois.eu)</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={toggleCurrency}
                className="flex items-center justify-center gap-1.5 py-2.5 bg-stone-100 text-stone-900 rounded-xl font-bold border border-stone-300 text-xs"
              >
                {currency === 'EUR' ? <Euro className="w-4 h-4 text-emerald-600" /> : <DollarSign className="w-4 h-4 text-blue-600" />}
                <span>{currency === 'EUR' ? 'EUR (€)' : 'USD ($)'}</span>
              </button>
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-1.5 py-2.5 bg-wood-800 text-amber-300 rounded-xl font-bold text-xs shadow-sm"
              >
                <Globe className="w-4 h-4 text-amber-300" />
                <span>{language === 'fr' ? 'English (EN)' : 'Français (FR)'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
