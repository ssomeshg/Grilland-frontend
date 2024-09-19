import {react, useState } from "react";
 import "./App.css";
import Sidebar from "./layouts/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <Dashboard/>
      </div>
    </>
  );
}

export default App;
