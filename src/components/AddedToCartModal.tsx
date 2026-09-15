'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { CheckCircle2, ShoppingBag, X, ArrowRight } from 'lucide-react';

export const AddedToCartModal: React.FC = () => {
  const {
    lastAddedItem,
    isAddedModalOpen,
    closeAddedModal,
    setIsCartOpen,
    totalItemsCount,
  } = useCart();

  const { language, currency, formatPrice } = useLanguage();

  if (!isAddedModalOpen || !lastAddedItem) return null;

  const itemPrice = currency === 'EUR' ? lastAddedItem.wood.priceEur : lastAddedItem.wood.priceUsd;
  const itemTotal = itemPrice * lastAddedItem.volume;
  const currencySymbol = currency === 'EUR' ? '€' : '$';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-emerald-200 relative animate-in zoom-in-95 duration-200">
        
        {/* Close icon */}
        <button
          onClick={closeAddedModal}
          className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Success Header */}
        <div className="p-6 bg-emerald-50 border-b border-emerald-100 text-center space-y-2">
          <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold font-serif text-emerald-950">
            Article ajouté au panier !
          </h3>
          <p className="text-xs text-emerald-800">
            Votre sélection a bien été enregistrée dans votre panier.
          </p>
        </div>

        {/* Product Details Card */}
        <div className="p-6 space-y-5">
          <div className="flex items-center gap-4 p-3 bg-wood-50 rounded-xl border border-wood-200">
            <img
              src={lastAddedItem.wood.image}
              alt={lastAddedItem.wood.name[language]}
              className="w-16 h-16 rounded-lg object-cover border border-wood-300 shadow-sm shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-wood-950 truncate">
                {lastAddedItem.wood.name[language]}
              </h4>
              <p className="text-xs text-wood-600">
                Quantité : <strong className="text-wood-900">{lastAddedItem.volume} m³ / unité(s)</strong>
              </p>
              <p className="text-xs font-bold text-amber-800 mt-0.5">
                {formatPrice(lastAddedItem.wood.priceEur, lastAddedItem.wood.priceUsd)}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-1">
            <button
              onClick={() => {
                closeAddedModal();
                setIsCartOpen(true);
              }}
              className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-sm shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <ShoppingBag className="w-4 h-4 text-emerald-200" />
              <span>Voir mon panier ({totalItemsCount} articles)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={closeAddedModal}
              className="w-full py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold rounded-xl text-xs transition-colors"
            >
              Continuer mes achats
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
