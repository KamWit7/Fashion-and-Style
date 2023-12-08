import { useContext } from 'react';
import { CartContext } from '.';

export const useCart = () => {
  const cartCtx = useContext(CartContext);

  if (cartCtx === null) {
    throw Error('useAuth must be used inside AuthProvider');
  }
  return cartCtx;
};
