import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function armarCarrito(producto, quantity) {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.producto.id === producto.id);
      if (existing) {
        return prevCart.map(item =>
          item.producto.id === producto.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { producto, quantity }];
      }
    });
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, armarCarrito, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
