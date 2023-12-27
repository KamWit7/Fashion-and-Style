import React, { createContext, useState } from 'react';
import { API } from '@api';
import { useAuth } from '../AuthContext/useAuth';

interface CartContextProps {
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  setCart: React.Dispatch<React.SetStateAction<API.CardType['items']>>;
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

    setCart((prev) => {
      const q = prev.find((item) => item.productId._id === productId)?.quantity;

      if (!q) {
        return [
          ...prev,
          {
            productId: product,
            quantity: 1,
          },
        ];
      }

      return prev.map((item) => {
        if (item.productId._id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });
    });
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item.productId._id !== productId);

    setCart(updatedCart);
  };

  const removeFromCartAuth = async (productId: string) => {
    const cartProducts = await API.cart.post({ productId, quantity: -1 });

    setCart(cartProducts.items);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart: token ? addToCartAuth : addToCart,
        removeFromCart: token ? removeFromCartAuth : removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
