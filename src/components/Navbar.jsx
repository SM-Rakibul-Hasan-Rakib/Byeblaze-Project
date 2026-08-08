import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  // localStorage থেকে আগের theme নিয়ে আসবে
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Theme change হলে localStorage + HTML data-theme update
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold text-primary" : "font-bold"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive ? "font-bold text-primary" : "font-bold"
          }
        >
          Blogs
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/bookmarks"
          className={({ isActive }) =>
            isActive ? "font-bold text-primary" : "font-bold"
          }
        >
          Bookmarks
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      {/* ================= DESKTOP / TOP NAVBAR ================= */}
      <div className="navbar bg-base-100 shadow-sm px-4 md:px-8 sticky top-0 z-50">
        {/* Logo */}
        <div className="flex-1">
          <Link
            to="/"
            className="text-2xl md:text-3xl  font-extrabold text-secondary"
          >
            Byte<span className="text-primary">Blaze</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal gap-2">{navLinks}</ul>
        </div>

        {/* Theme Toggle */}
        <div className="ml-2 md:ml-6">
          <label className="swap swap-rotate cursor-pointer">
            <input
              type="checkbox"
              checked={theme === "synthwave"}
              onChange={handleToggle}
            />

            {/* Sun */}
            <svg
              className="swap-off h-7 w-7 fill-current"
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>

            {/* Moon */}
            <svg
              className="swap-on h-7 w-7 fill-current"
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>
        </div>
      </div>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-base-100 border-t border-base-300 shadow-[0_-4px_15px_rgba(0,0,0,0.1)]">
        <ul className="flex justify-around items-center py-2">
          {/* Home */}
          <li className="flex-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 py-2 text-xs ${
                  isActive ? "text-primary font-bold" : "text-base-content/70"
                }`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l9-9 9 9M5 10v10h14V10"
                />
              </svg>

              <span>Home</span>
            </NavLink>
          </li>

          {/* Blogs */}
          <li className="flex-1">
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 py-2 text-xs ${
                  isActive ? "text-primary font-bold" : "text-base-content/70"
                }`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 4h2a2 2 0 012 2v12a2 2 0 01-2 2h-2"
                />
              </svg>

              <span>Blogs</span>
            </NavLink>
          </li>

          {/* Bookmarks */}
          <li className="flex-1">
            <NavLink
              to="/bookmarks"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 py-2 text-xs ${
                  isActive ? "text-primary font-bold" : "text-base-content/70"
                }`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-4-7 4V5z"
                />
              </svg>

              <span>Bookmarks</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
