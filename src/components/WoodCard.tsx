'use client';

import React from 'react';
import { WoodItem } from '@/data/woods';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { translations } from '@/data/translations';
import { Eye, ShoppingCart } from 'lucide-react';

interface WoodCardProps {
  wood: WoodItem;
  onOpenModal: (wood: WoodItem) => void;
}

export const WoodCard: React.FC<WoodCardProps> = ({ wood, onOpenModal }) => {
  const { language, formatPrice } = useLanguage();
  const { addToCart } = useCart();
  const t = translations[language].catalog;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-wood-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      
      {/* Image Header */}
      <div className="relative h-44 w-full bg-wood-900 overflow-hidden">
        <img
          src={wood.image}
          alt={wood.name[language]}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-0.5 bg-wood-950/80 backdrop-blur-sm text-amber-300 text-[11px] font-semibold rounded border border-wood-700">
            {wood.categoryLabel[language]}
          </span>
        </div>

        <div className="absolute top-3 right-3">
          <span className={`px-2 py-0.5 text-[10px] font-bold rounded shadow-sm ${
            wood.inStock 
              ? 'bg-emerald-600 text-white' 
              : 'bg-amber-600 text-white'
          }`}>
            {wood.inStock ? t.inStock : t.onDemand}
          </span>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-2.5 left-3 right-3">
          <h3 className="text-lg font-bold font-serif text-white group-hover:text-amber-300 transition-colors line-clamp-1">
            {wood.name[language]}
          </h3>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        
        {/* Specs summary */}
        <div className="flex justify-between text-xs text-wood-600">
          <span>{wood.origin[language]}</span>
          <span className="font-semibold text-wood-800">{wood.density}</span>
        </div>

        {/* Footer: Price & Action Buttons */}
        <div className="pt-2 border-t border-wood-100 flex items-center justify-between gap-2">
          <div>
            <span className="block text-[9px] font-bold text-wood-400 uppercase">Tarif</span>
            <span className="text-sm font-extrabold text-wood-950">
              {formatPrice(wood.priceEur, wood.priceUsd)}
            </span>
          </div>

          <div className="flex gap-1.5">
            <button
              onClick={() => onOpenModal(wood)}
              className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-bold transition-all border border-stone-300"
              title={t.viewDetails}
            >
              <Eye className="w-4 h-4" />
            </button>

            <button
              onClick={() => addToCart(wood, 5)}
              className="flex items-center gap-1 px-3 py-2 bg-wood-800 hover:bg-wood-900 text-amber-300 rounded-lg text-xs font-bold transition-all shadow-sm"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Panier</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
