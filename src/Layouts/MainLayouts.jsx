import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayouts = () => {
  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <div className="h-16 shrink-0">
        <Navbar />
      </div>
      <main className="min-h-0 flex-1 overflow-y-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayouts;
