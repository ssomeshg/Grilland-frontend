import React, { createContext, useState } from "react";
import getCategory from "../utils/getCategory";

export const AppContext = createContext({
  getCategory,
  handleSidebar: () => {},
});

export default function ContextProvider({ children }) {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    alert("sidebar");
    if (!sidebar) {
      setSidebar(true);
    }
  };

  const contextValue = {
    getCategory,
    handleSidebar,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
