import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import Bookmarks from "../pages/Bookmarks";

const MainLayouts = () => {
  return (
    <div>
      <div className="h-16">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayouts;
