import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "../data/data";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "suppstore_cart_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((ci) => ci.product.id === product.id);
      if (existing) {
        return prev.map((ci) =>
          ci.product.id === product.id
            ? { ...ci, quantity: Math.min(99, ci.quantity + quantity) }
            : ci
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const removeItem = (productId: number) => {
    setItems((prev) => prev.filter((ci) => ci.product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setItems((prev) =>
      prev
        .map((ci) =>
          ci.product.id === productId ? { ...ci, quantity: Math.max(1, Math.min(99, quantity)) } : ci
        )
        .filter((ci) => ci.quantity > 0)
    );
  };

  const clearCart = () => setItems([]);

  const { totalItems, totalPrice } = useMemo(() => {
    const totalItemsCalc = items.reduce((sum, ci) => sum + ci.quantity, 0);
    const totalPriceCalc = items.reduce((sum, ci) => sum + ci.quantity * ci.product.price, 0);
    return { totalItems: totalItemsCalc, totalPrice: totalPriceCalc };
  }, [items]);

  const value: CartContextValue = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}


