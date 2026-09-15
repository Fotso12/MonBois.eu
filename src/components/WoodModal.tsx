'use client';

import React from 'react';
import { WoodItem } from '@/data/woods';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { translations } from '@/data/translations';
import { X, CheckCircle2, ShieldCheck, Scale, Compass, Award, Tag, Mail, ShoppingCart } from 'lucide-react';

interface WoodModalProps {
  wood: WoodItem | null;
  onClose: () => void;
  onSelectForQuote: (woodName: string) => void;
}

export const WoodModal: React.FC<WoodModalProps> = ({
  wood,
  onClose,
  onSelectForQuote,
}) => {
  const { language, formatPrice } = useLanguage();
  const { addToCart } = useCart();

  if (!wood) return null;

  const t = translations[language].modal;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-wood-200 relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image & Header */}
        <div className="relative h-64 sm:h-72 w-full bg-wood-900">
          <img
            src={wood.image}
            alt={wood.name[language]}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wood-950 via-wood-950/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-3 py-1 bg-amber-400 text-wood-950 text-xs font-bold uppercase rounded-md mb-2">
              {wood.categoryLabel[language]}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              {wood.name[language]}
            </h3>
            <p className="text-sm text-wood-300 italic">
              {wood.scientificName}
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
          
          {/* Description */}
          <p className="text-wood-800 text-base leading-relaxed">
            {wood.description[language]}
          </p>

          {/* Pricing & Order Highlight Box */}
          <div className="bg-wood-50 rounded-xl p-5 border border-wood-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-wood-500 uppercase tracking-wider">
                {t.pricingTitle}
              </p>
              <p className="text-2xl font-bold text-wood-950 mt-1">
                {formatPrice(wood.priceEur, wood.priceUsd)}
              </p>
              <p className="text-xs text-wood-600 mt-0.5">
                {t.priceEur}: <strong className="text-wood-800">{wood.priceEur} €</strong> | {t.priceUsd}: <strong className="text-wood-800">${wood.priceUsd}</strong>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => {
                  addToCart(wood, 5);
                  onClose();
                }}
                className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-all"
              >
                <ShoppingCart className="w-4 h-4 text-emerald-200" />
                <span>Ajouter au panier</span>
              </button>

              <button
                onClick={() => {
                  onSelectForQuote(wood.name[language]);
                  onClose();
                }}
                className="px-4 py-2.5 bg-wood-800 hover:bg-wood-900 text-amber-300 font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-1.5 transition-all"
              >
                <Mail className="w-4 h-4 text-amber-300" />
                <span>{t.requestQuote}</span>
              </button>
            </div>
          </div>

          {/* Specs Grid */}
          <div>
            <h4 className="text-base font-bold font-serif text-wood-950 mb-3 border-b border-wood-200 pb-2">
              {t.techSpecs}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              
              <div className="flex items-start gap-3 p-3 bg-stone-50 rounded-lg">
                <Compass className="w-5 h-5 text-wood-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-semibold text-wood-500">{t.origin}</span>
                  <span className="font-medium text-wood-900">{wood.origin[language]}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-stone-50 rounded-lg">
                <Scale className="w-5 h-5 text-wood-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-semibold text-wood-500">{t.density}</span>
                  <span className="font-medium text-wood-900">{wood.density}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-stone-50 rounded-lg">
                <Tag className="w-5 h-5 text-wood-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-semibold text-wood-500">{t.hardness}</span>
                  <span className="font-medium text-wood-900">{wood.hardness[language]}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-stone-50 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-wood-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-semibold text-wood-500">{t.sustainability}</span>
                  <span className="font-medium text-wood-900">{wood.sustainability}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Uses & Packaging */}
          <div className="space-y-4">
            <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4">
              <h5 className="text-xs font-bold text-amber-900 uppercase tracking-wide mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                {t.uses}
              </h5>
              <p className="text-sm text-wood-900">
                {wood.uses[language]}
              </p>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4">
              <h5 className="text-xs font-bold text-stone-800 uppercase tracking-wide mb-1 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-wood-700" />
                {t.packaging}
              </h5>
              <p className="text-xs text-stone-600">
                {t.packagingDesc}
              </p>
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-stone-300 hover:bg-stone-400 text-stone-900 font-semibold text-sm rounded-lg transition-colors"
          >
            {t.close}
          </button>
        </div>

      </div>
    </div>
  );
};
