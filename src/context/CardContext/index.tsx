import React, { createContext, useState } from 'react';
import { API } from '@api';
import { useAuth } from '../AuthContext/useAuth';

interface CartContextProps {
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  setCart: React.Dispatch<React.SetStateAction<Pick<API.CardType, 'total' | 'items'>>>;
  cart: Pick<API.CardType, 'total' | 'items'>;
}

const CartContext = createContext<CartContextProps | null>(null);

const CartProvider = ({ children }: React.PropsWithChildren) => {
  const { token } = useAuth();
  const [cart, setCart] = useState<Pick<API.CardType, 'total' | 'items'>>({ total: 0, items: [] });

  const addToCartAuth = async (productId: string) => {
    const { items, total } = await API.cart.post({ productId });

    setCart({ items, total });
  };

  const addToCart = async (productId: string) => {
    const { product } = await API.products.getById(productId);

    setCart((prev) => {
      const q = prev.items.find((item) => item.productId._id === productId)?.quantity;

      if (!q) {
        return {
          items: [
            ...prev.items,
            {
              productId: product,
              quantity: 1,
            },
          ],
          total: 0,
        };
      }

      return {
        items: prev.items.map((item) => {
          if (item.productId._id === productId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }

          return item;
        }),
        total: 0,
      };
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => {
      let total = prev.total;
      const updatedItems = cart.items.filter((item) => {
        if (item.productId._id !== productId) {
          total = -(item.quantity * item.productId.price);

          return false;
        }
        return true;
      });

      return { items: updatedItems, total };
    });
  };

  const removeFromCartAuth = async (productId: string) => {
    const { items, total } = await API.cart.post({ productId, quantity: -1 });

    setCart({ items, total });
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
