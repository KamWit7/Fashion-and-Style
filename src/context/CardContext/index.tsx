import React, { createContext, useState } from 'react';
import { API } from '@api';
import { useAuth } from '../AuthContext/useAuth';

interface CartContextProps {
  addToCart: (productId: string) => void;
  //   removeFromCart: (productId: string) => void;
  cart: API.CardType['items'];
}

const CartContext = createContext<CartContextProps | null>(null);

const CartProvider = ({ children }: React.PropsWithChildren) => {
  const { token } = useAuth();
  const [cart, setCart] = useState<API.CardType['items']>([]);

  const addToCartAuth = async (productId: string) => {
    const cartProducts = await API.cart.post({ productId });

    setCart(cartProducts.items);
  };

  const addToCart = async (productId: string) => {
    const { product } = await API.products.getById(productId);

    setCart((prev) => [
      ...prev,
      {
        productId: product,
        quantity: 1,
      },
    ]);
  };

  //   const removeFromCart = (productId: string) => {
  //     const updatedCart = cart.filter((item) => item.id !== itemId);
  //     setCart(updatedCart);
  //   };

  return (
    <CartContext.Provider value={{ cart, addToCart: token ? addToCartAuth : addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
