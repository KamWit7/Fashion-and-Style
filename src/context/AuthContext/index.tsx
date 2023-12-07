import APIRoutsManager from '@api/APIRoutesManager';
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  token: string | null;
  login: (newToken: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const { setHeaders } = APIRoutsManager.getInstance();

  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('bearerToken');

    if (storedToken) {
      setToken(storedToken);
      setHeaders({
        Authorization: `Barer ${storedToken}`,
      });
    }
  }, [setHeaders]);

  console.log('header',APIRoutsManager.getInstance().headers);

  const login = (newToken: string) => {
    localStorage.setItem('bearerToken', newToken);
    setToken(newToken);
    setHeaders({
      Authorization: `Barer ${newToken}`,
    });
    navigate('/');
  };

  const logout = () => {
    localStorage.removeItem('bearerToken');
    setToken(null);
    navigate('/');
  };

  return <AuthContext.Provider value={{ token, login, logout }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
