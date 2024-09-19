import React from "react";

// layouts
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import Main from "../layouts/Main";

function Dashboard() {
  return (
    <>
      <div className="bg-white relative">
        <Header/>
        <Sidebar />
        <Main/>
      </div>
    </>
  );
}

export default Dashboard;
