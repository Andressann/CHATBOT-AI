import React, { createContext, useState, useEffect } from 'react';
import { getUser, setUser as saveUser, logout as clearUser } from '../authService';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = getUser();
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (user) => {
    setUser(user);
    saveUser(user);
  };

  const logout = () => {
    setUser(null);
    clearUser();
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};


