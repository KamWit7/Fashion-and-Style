import { useContext } from 'react';
import { AuthContext } from '.';

export const useAuth = () => {
  const authCtx = useContext(AuthContext);

  if (authCtx === null) {
    throw Error('useAuth must be used inside AuthProvider');
  }
  return authCtx;
};
