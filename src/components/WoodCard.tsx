'use client';

import React from 'react';
import { WoodItem } from '@/data/woods';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { Eye, ShoppingCart } from 'lucide-react';

interface WoodCardProps {
  wood: WoodItem;
  onOpenModal: (wood: WoodItem) => void;
  onOpenOrder: (wood: WoodItem) => void;
}

export const WoodCard: React.FC<WoodCardProps> = ({ wood, onOpenModal, onOpenOrder }) => {
  const { language, formatPrice } = useLanguage();
  const t = translations[language].catalog;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-wood-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      
      {/* Image Header */}
      <div className="relative h-48 w-full bg-wood-900 overflow-hidden">
        <img
          src={wood.image}
          alt={wood.name[language]}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2.5 py-1 bg-wood-950/80 backdrop-blur-sm text-amber-300 text-xs font-semibold rounded-md border border-wood-700">
            {wood.categoryLabel[language]}
          </span>
        </div>

        <div className="absolute top-3 right-3">
          <span className={`px-2.5 py-1 text-xs font-bold rounded-md shadow-sm ${
            wood.inStock 
              ? 'bg-emerald-600 text-white' 
              : 'bg-amber-600 text-white'
          }`}>
            {wood.inStock ? t.inStock : t.onDemand}
          </span>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-xl font-bold font-serif text-white group-hover:text-amber-300 transition-colors line-clamp-1">
            {wood.name[language]}
          </h3>
          <p className="text-xs text-wood-300 italic line-clamp-1">
            {wood.scientificName}
          </p>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Description snippet */}
        <p className="text-xs sm:text-sm text-wood-700 line-clamp-2 leading-relaxed">
          {wood.description[language]}
        </p>

        {/* Specs summary */}
        <div className="grid grid-cols-2 gap-2 text-xs py-2 border-y border-wood-100 text-wood-600">
          <div>
            <span className="block font-semibold text-wood-800">{t.density}:</span>
            <span>{wood.density}</span>
          </div>
          <div>
            <span className="block font-semibold text-wood-800">{t.origin}:</span>
            <span className="truncate block">{wood.origin[language]}</span>
          </div>
        </div>

        {/* Footer: Price & Action Buttons */}
        <div className="pt-2 flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-wood-400 uppercase">
              {t.priceLabel}
            </span>
            <span className="text-base sm:text-lg font-extrabold text-wood-950">
              {formatPrice(wood.priceEur, wood.priceUsd)}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => onOpenModal(wood)}
              className="flex items-center justify-center gap-1 px-2.5 py-2 bg-wood-100 hover:bg-wood-200 text-wood-900 rounded-lg text-xs font-bold transition-all border border-wood-300"
            >
              <Eye className="w-3.5 h-3.5 text-wood-700" />
              <span>{t.viewDetails}</span>
            </button>

            <button
              onClick={() => onOpenOrder(wood)}
              className="flex items-center justify-center gap-1 px-2.5 py-2 bg-wood-800 hover:bg-wood-900 text-amber-300 rounded-lg text-xs font-bold transition-all shadow-sm"
            >
              <ShoppingCart className="w-3.5 h-3.5 text-amber-300" />
              <span>{t.orderBtn}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
