import React, { createContext, useState } from 'react';

export const NewItemContext = createContext();

export const NewItemProvider = ({ children }) => {
  const [scanned, setScanned] = useState(false);
  const [newItem, setNewItem] = useState(false);
  return (
    <NewItemContext.Provider value={{
      scanned, setScanned, newItem, setNewItem,
    }}
    >
      {children}
    </NewItemContext.Provider>
  );
};
