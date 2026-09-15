'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { X, Trash2, ShoppingBag, ArrowRight, Trees, Plus, Minus } from 'lucide-react';

interface CartDrawerProps {
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onProceedToCheckout }) => {
  const {
    items,
    removeFromCart,
    updateVolume,
    clearCart,
    totalPriceEur,
    totalPriceUsd,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const { language, currency, formatPrice } = useLanguage();

  if (!isCartOpen) return null;

  const totalPrice = currency === 'EUR' ? totalPriceEur : totalPriceUsd;
  const currencySymbol = currency === 'EUR' ? '€' : '$';

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-stone-200">
          
          {/* Header */}
          <div className="p-6 bg-wood-950 text-white flex items-center justify-between border-b border-wood-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-wood-950 flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif text-white">Mon Panier</h3>
                <p className="text-xs text-wood-300">
                  {items.length} {items.length > 1 ? 'essences sélectionnées' : 'essence sélectionnée'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-wood-300 hover:text-white rounded-lg hover:bg-wood-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length > 0 ? (
              items.map((item) => (
                <div
                  key={item.wood.id}
                  className="flex gap-4 p-3 bg-wood-50 rounded-xl border border-wood-200 items-center justify-between"
                >
                  <img
                    src={item.wood.image}
                    alt={item.wood.name[language]}
                    className="w-16 h-16 rounded-lg object-cover border border-wood-300 shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-wood-950 truncate">
                      {item.wood.name[language]}
                    </h4>
                    <p className="text-xs text-wood-600 truncate">
                      {formatPrice(item.wood.priceEur, item.wood.priceUsd)}
                    </p>

                    {/* Volume Controls (- / +) */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-stone-300 rounded-lg bg-white">
                        <button
                          onClick={() => updateVolume(item.wood.id, item.volume - 1)}
                          className="p-1 text-stone-600 hover:text-stone-900"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-bold text-wood-950">
                          {item.volume} m³
                        </span>
                        <button
                          onClick={() => updateVolume(item.wood.id, item.volume + 1)}
                          className="p-1 text-stone-600 hover:text-stone-900"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="block text-sm font-extrabold text-wood-950">
                      {((currency === 'EUR' ? item.wood.priceEur : item.wood.priceUsd) * item.volume).toLocaleString()}{' '}
                      {currencySymbol}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.wood.id)}
                      className="text-red-500 hover:text-red-700 p-1 mt-1 inline-block"
                      title="Supprimer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 space-y-4 text-stone-400">
                <Trees className="w-12 h-12 mx-auto text-stone-300" />
                <p className="text-sm font-medium text-stone-600">Votre panier est vide</p>
                <p className="text-xs text-stone-400">
                  Découvrez nos essences dans le catalogue et ajoutez-les à votre commande.
                </p>
              </div>
            )}
          </div>

          {/* Footer Subtotal & Checkout CTA */}
          {items.length > 0 && (
            <div className="p-6 bg-stone-50 border-t border-stone-200 space-y-4">
              <div className="flex items-center justify-between text-base font-bold text-wood-950">
                <span>Sous-total estimé :</span>
                <span className="text-2xl text-emerald-800">
                  {totalPrice.toLocaleString()} {currencySymbol}
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={clearCart}
                  className="px-4 py-3 bg-stone-200 hover:bg-stone-300 text-stone-700 font-semibold rounded-xl text-xs"
                >
                  Vider
                </button>

                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    onProceedToCheckout();
                  }}
                  className="flex-1 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm transition-all"
                >
                  <span>Procéder au paiement</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
