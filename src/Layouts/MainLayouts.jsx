import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import Loader from "../../Loader";

const MainLayouts = () => {
  const navigation = useNavigation();

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      {navigation.state === "loading" && <Loader />}
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
