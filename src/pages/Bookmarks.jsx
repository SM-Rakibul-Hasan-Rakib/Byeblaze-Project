import { useState } from "react";
import { Link } from "react-router";
import { clearBlogs, deleteBlog, getBlogs } from "../utils";
import placeHolderImage from "../assets/404.jpg";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState(getBlogs);

  const handleRemove = (id) => {
    deleteBlog(id);
    setBookmarks(getBlogs());
  };

  const handleClearAll = () => {
    clearBlogs();
    setBookmarks([]);
  };

  return (
    <section className="min-h-full bg-base-200/40 p-5 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Reading list
            </p>
            <h1 className="text-3xl font-bold sm:text-4xl">Your bookmarks</h1>
            <p className="mt-2 text-base-content/65">
              {bookmarks.length} saved{" "}
              {bookmarks.length === 1 ? "article" : "articles"}
            </p>
          </div>

          {bookmarks.length > 0 && (
            <button
              type="button"
              onClick={handleClearAll}
              className="inline-flex min-h-9 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold shadow-md transition hover:bg-rose-700 hover:shadow-lg"
              style={{ backgroundColor: "#e11d48", color: "#ffffff" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16m-10 4v6m4-6v6M9 7l1-3h4l1 3m-8 0 1 13h8l1-13" />
              </svg>
              Clear all
            </button>
          )}
        </div>

        {bookmarks.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-base-300 bg-base-100 px-6 py-16 text-center shadow-sm">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-8 w-8"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 4.75A1.75 1.75 0 0 1 7.75 3h8.5A1.75 1.75 0 0 1 18 4.75V21l-6-3.5L6 21V4.75Z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold">No saved articles yet</h2>
            <p className="mx-auto mt-2 max-w-md text-base-content/65">
              Bookmark articles you want to return to and they will stay here.
            </p>
            <Link to="/blogs" className="btn btn-primary mt-6">
              Explore blogs
            </Link>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2"
            style={{ columnGap: "2rem", rowGap: "2rem" }}
          >
            {bookmarks.map((blog) => (
              <article
                key={blog.id}
                className="group rounded-2xl border border-base-300 bg-base-100 p-3 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <Link
                  to={`/blogs/blog/${blog.id}`}
                  className="block overflow-hidden rounded-xl"
                >
                  <img
                    src={blog.cover_image || placeHolderImage}
                    alt=""
                    className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="px-2 pb-1 pt-5">
                    <p className="text-xs font-medium text-base-content/55">
                      {blog.published_at
                        ? new Date(blog.published_at).toLocaleDateString()
                        : "Saved article"}
                    </p>
                    <h2 className="mt-2 line-clamp-2 text-xl font-bold leading-snug transition-colors group-hover:text-primary">
                      {blog.title}
                    </h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-base-content/65">
                      {blog.description}
                    </p>
                  </div>
                </Link>
                <div className="mt-4 flex items-center justify-between rounded-xl bg-base-200/70 px-4 py-3">
                  <span className="text-xs font-medium text-base-content/60">
                    Saved to your list
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemove(blog.id)}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold shadow-md transition hover:bg-rose-700 hover:shadow-lg"
                    style={{ backgroundColor: "#e11d48", color: "#ffffff" }}
                    aria-label={`Remove ${blog.title} from bookmarks`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 7h16m-10 4v6m4-6v6M9 7l1-3h4l1 3m-8 0 1 13h8l1-13"
                      />
                    </svg>
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Bookmarks;
