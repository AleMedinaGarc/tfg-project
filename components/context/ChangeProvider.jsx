import React, { createContext, useState } from 'react';

export const ChangeContext = createContext();

export const ChangeProvider = ({ children }) => {
  const [didChange, setDidChange] = useState(false);
  return (
    <ChangeContext.Provider value={{ didChange, setDidChange }}>
      {children}
    </ChangeContext.Provider>
  );
};
