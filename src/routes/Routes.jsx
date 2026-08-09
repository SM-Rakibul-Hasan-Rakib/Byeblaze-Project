import MainLayouts from "../Layouts/MainLayouts.jsx";
import Blog from "../pages/Blog.jsx";
import Blogs from "../pages/Blogs.jsx";
import Bookmarks from "../pages/Bookmarks.jsx";
// import ErrorPage from "../pages/ErrorPage.jsx";
import { createBrowserRouter } from "react-router";
import Home from "../pages/Home.jsx";
import Author from "../components/Author.jsx";
import Content from "../components/Content.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: async () => {
          const res = await fetch(
            "https://dev.to/api/articles?per_page=500&top=10",
          );
          if (!res.ok)
            throw new Response("Failed to load blogs", { status: res.status });
          return res.json();
        },
      },
      {
        path: "/blogs/blog/:id",
        element: <Blog />,
        loader: async ({ params }) => {
          const res = await fetch(`https://dev.to/api/articles/${params.id}`);
          if (!res.ok)
            throw new Response("Blog not found", { status: res.status });
          return res.json();
        },
        // MOVE children OUTSIDE of the loader function
        children: [
          {
            index: true, // This makes <Content /> the default view
            element: <Content />,
          },
          {
            path: "author", // Changed from index: "author" to path: "author"
            element: <Author />,
          },
        ],
      },
      { path: "/bookmarks", element: <Bookmarks /> },
    ],
  },
]);
