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
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setHeaders } = APIRoutsManager.getInstance();

  useEffect(() => {
    const storedToken = localStorage.getItem('bearerToken');

    if (storedToken) {
      setToken(storedToken);
    }
  }, [setHeaders]);

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
