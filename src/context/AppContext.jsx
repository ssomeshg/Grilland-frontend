import React, { createContext, useState } from "react";
import getCategory from "../utils/getCategory";
import getSubcategory from "../utils/getSubcategory";

export const AppContext = createContext({
  getCategory,
  getSubcategory,
  activeNav: 1,
  sidebar: true,
  handleSidebar: () => {},
  handleSidebarClose: () => {},
  handleTab: () => {},
});

export default function ContextProvider({ children }) {
  // sidebar Context
  const [activeNav, setActiveNav] = useState(1);

  const handleTab = (id) => {
    setActiveNav(id);
  };

  const [sidebar, setSidebar] = useState(true);

  const handleSidebar = () => {
    if (sidebar) {
      setSidebar(!sidebar);
    }
  };
  const handleSidebarClose = () => {
   
    if (!sidebar) {
      setSidebar(!sidebar);
    }
  };

  // Context Value
  const contextValue = {
    getCategory,
    getSubcategory,
    activeNav,
    sidebar,
    handleSidebarClose,
    handleSidebar,
    handleTab,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
