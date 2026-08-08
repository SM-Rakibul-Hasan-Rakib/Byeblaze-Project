import React from "react";
import { Link } from "react-router";
import wave from "../assets/wave.svg";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100dvh-116px)] w-full overflow-hidden bg-base-200">
      <div className="relative z-10 flex min-h-[calc(100dvh-116px)] flex-col items-center justify-center px-4 pb-40 text-center">
        <h1 className="text-4xl font-bold md:text-6xl">
          Welcome to{" "}
          <span className="text-6xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
            ByteBlaze
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg">
          Provident cupiditate voluptatem et in...
        </p>

        <div className="mt-10 flex justify-center gap-3">
          <Link
            to="/blogs"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 bg-primary transition duration-200 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
            <span className="absolute inset-0 h-full w-full border-2 border-secondary bg-white group-hover:bg-primary" />
            <span className="relative text-black group-hover:text-white">
              Blogs
            </span>
          </Link>

          <Link
            to="/bookmarks"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 bg-primary transition duration-200 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
            <span className="absolute inset-0 h-full w-full border-2 border-secondary bg-white group-hover:bg-primary" />
            <span className="relative text-black group-hover:text-white">
              Bookmarks
            </span>
          </Link>
        </div>
      </div>

      <img
        src={wave}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-0 h-28 w-full object-cover md:h-auto"
      />
    </section>
  );
};

export default Hero;
