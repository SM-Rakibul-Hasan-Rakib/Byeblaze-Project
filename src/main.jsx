import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";
import Bookmarks from "./pages/Bookmarks.jsx";
import MainLayouts from "./Layouts/MainLayouts.jsx";
import Blog from "./pages/Blog.jsx";
import { router } from "./routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
