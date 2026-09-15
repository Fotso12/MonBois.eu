'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'fr' | 'en';
export type Currency = 'EUR' | 'USD';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  toggleCurrency: () => void;
  formatPrice: (priceEur: number, priceUsd: number) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');
  const [currency, setCurrency] = useState<Currency>('EUR');

  // Load saved preference if available
  useEffect(() => {
    const savedLang = localStorage.getItem('monbois_lang') as Language;
    if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
    const savedCurr = localStorage.getItem('monbois_curr') as Currency;
    if (savedCurr && (savedCurr === 'EUR' || savedCurr === 'USD')) {
      setCurrency(savedCurr);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('monbois_lang', lang);
  };

  const toggleLanguage = () => {
    const nextLang = language === 'fr' ? 'en' : 'fr';
    handleSetLanguage(nextLang);
  };

  const handleSetCurrency = (curr: Currency) => {
    setCurrency(curr);
    localStorage.setItem('monbois_curr', curr);
  };

  const toggleCurrency = () => {
    const nextCurr = currency === 'EUR' ? 'USD' : 'EUR';
    handleSetCurrency(nextCurr);
  };

  const formatPrice = (priceEur: number, priceUsd: number): string => {
    if (currency === 'EUR') {
      return `${priceEur.toLocaleString(language === 'fr' ? 'fr-FR' : 'en-US')} € / m³`;
    }
    return `$${priceUsd.toLocaleString(language === 'fr' ? 'fr-FR' : 'en-US')} / m³`;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        toggleLanguage,
        currency,
        setCurrency: handleSetCurrency,
        toggleCurrency,
        formatPrice,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
