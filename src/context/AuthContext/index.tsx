import React, { createContext, useState, useEffect } from 'react';
import { redirect } from 'react-router-dom';

interface AuthContextType {
  token: string | null;
  login: (newToken: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('bearerToken');

    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = (newToken: string) => {
    localStorage.setItem('bearerToken', newToken);
    setToken(newToken);
    redirect('/');
  };

  const logout = () => {
    localStorage.removeItem('bearerToken');
    setToken(null);
    redirect('/');
  };

  return <AuthContext.Provider value={{ token, login, logout }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
