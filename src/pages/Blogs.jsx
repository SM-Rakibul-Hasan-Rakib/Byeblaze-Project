import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BlogCard from "../components/BlogCard";
// import { json } from "express";

const Blogs = () => {
  const blogs = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 16;
  const totalPages = Math.ceil(blogs.length / postsPerPage);
  const firstVisiblePage = Math.floor((currentPage - 1) / 3) * 3 + 1;
  const visiblePages = Array.from(
    { length: Math.min(3, totalPages - firstVisiblePage + 1) },
    (_, index) => firstVisiblePage + index,
  );
  const pageBlogs = blogs.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );

  const changePage = (page) => {
    setCurrentPage(page);
    document.querySelector("main")?.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className=" text-gray-100">
      <div
        className="container mx-auto max-w-6xl space-y-6 p-6 pb-28 sm:space-y-12 md:pb-6"
        bis_skin_checked="1"
      >
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900"
        >
          <img
            src={pageBlogs[0].cover_image}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5" bis_skin_checked="1">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {pageBlogs[0].title}
            </h3>
            <span className="text-xs text-gray-400">
              {new Date(pageBlogs[0].created_at).toLocaleDateString()}
            </span>
            <p>{pageBlogs[0].description}</p>
          </div>
        </a>
        <div
          className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          bis_skin_checked="1"
        >
          {pageBlogs.slice(1).map((blog) => (
            <BlogCard blog={blog} key={blog.id}></BlogCard>
          ))}
        </div>
        <div
          className="flex justify-center space-x-1 pt-2 text-gray-100"
          bis_skin_checked="1"
        >
          <button
            title="previous"
            type="button"
            disabled={currentPage === 1}
            onClick={() => changePage(currentPage - 1)}
            className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800 disabled:opacity-40"
          >
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {visiblePages.map((page) => (
              <button
                key={page}
                type="button"
                title={`Page ${page}`}
                onClick={() => changePage(page)}
                className={`inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-gray-900 ${
                  currentPage === page
                    ? "text-violet-400 border-violet-400 font-semibold"
                    : "border-gray-800"
                }`}
              >
                {page}
              </button>
            ))}

          <button
            title="next"
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => changePage(currentPage + 1)}
            className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800 disabled:opacity-40"
          >
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
