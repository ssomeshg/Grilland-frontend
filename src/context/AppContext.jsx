import React, { createContext } from "react";
import getCategory from "../utils/getCategory";

export const AppContext = createContext({ getCategory });

export default function ContextProvider({ children }) {
  const contextValue = {
    getCategory,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}
