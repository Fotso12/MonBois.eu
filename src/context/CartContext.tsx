'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { WoodItem } from '@/data/woods';

export interface CartItem {
  wood: WoodItem;
  volume: number; // in m³ or quantity
}

interface CartContextType {
  items: CartItem[];
  addToCart: (wood: WoodItem, volume?: number) => void;
  removeFromCart: (woodId: string) => void;
  updateVolume: (woodId: string, volume: number) => void;
  clearCart: () => void;
  totalItemsCount: number;
  totalPriceEur: number;
  totalPriceUsd: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  toggleCart: () => void;
  
  // Added to Cart Confirmation Modal State
  lastAddedItem: CartItem | null;
  isAddedModalOpen: boolean;
  closeAddedModal: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const [lastAddedItem, setLastAddedItem] = useState<CartItem | null>(null);
  const [isAddedModalOpen, setIsAddedModalOpen] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('monbois_cart');
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load cart', e);
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('monbois_cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (wood: WoodItem, volume = 5) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.wood.id === wood.id);
      if (existing) {
        return prev.map((item) =>
          item.wood.id === wood.id ? { ...item, volume: item.volume + volume } : item
        );
      }
      return [...prev, { wood, volume }];
    });

    // Set last added item and open confirmation modal
    setLastAddedItem({ wood, volume });
    setIsAddedModalOpen(true);
  };

  const removeFromCart = (woodId: string) => {
    setItems((prev) => prev.filter((item) => item.wood.id !== woodId));
  };

  const updateVolume = (woodId: string, volume: number) => {
    if (volume <= 0) {
      removeFromCart(woodId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.wood.id === woodId ? { ...item, volume } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const closeAddedModal = () => {
    setIsAddedModalOpen(false);
  };

  const totalItemsCount = items.length;
  const totalPriceEur = items.reduce((sum, item) => sum + item.wood.priceEur * item.volume, 0);
  const totalPriceUsd = items.reduce((sum, item) => sum + item.wood.priceUsd * item.volume, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateVolume,
        clearCart,
        totalItemsCount,
        totalPriceEur,
        totalPriceUsd,
        isCartOpen,
        setIsCartOpen,
        toggleCart,
        lastAddedItem,
        isAddedModalOpen,
        closeAddedModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
