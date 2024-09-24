import React from "react";
import "./App.css";
import Category from "./pages/Category";
import { Route, Routes } from "react-router-dom";

// layouts
import Main from "./layouts/Main";
import ContextProvider from "./context/AppContext";

function App() {
  return (
    <>
      <ContextProvider>
        <Main />
        <Routes>
          <Route path="/" element={<Category />} />
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
