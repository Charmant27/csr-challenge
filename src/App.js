import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Dashboard />
    </>
  );
};

export default App;
