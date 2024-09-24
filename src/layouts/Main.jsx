import React, { useState } from "react";

// layouts
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";



function Main() {

  return (
    <div className="bg-white">
      <Header />
      <Sidebar />
    </div>
  );
}

export default Main;
