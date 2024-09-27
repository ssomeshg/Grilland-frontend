import React from "react";
import "./App.css";
import Category from "./pages/category/Category";
import { Route, Routes } from "react-router-dom";

// layouts
import Main from "./layouts/Main";
import ContextProvider from "./context/AppContext";
import SubCategory from "./pages/subcategory/SubCategory";

function App() {
  return (
    <ContextProvider>
      <Main />
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path='/subcategory' element={<SubCategory/> }/>
      </Routes>
    </ContextProvider>
  );
}

export default App;
