import React from "react";
import { useLoaderData } from "react-router";
import placeHolderImage from "../assets/404.jpg";
const Content = () => {
  const blog = useLoaderData();
  const { cover_image, title, description, published_at, id, tags = [] } = blog;
  return (
    <div
      rel="noopener noreferrer"
      href="#"
      className=" mx-auto group border p-2 border-opacity-30 hover:no-underline focus:no-underline  "
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-80 bg-gray-500"
        src={cover_image || placeHolderImage}
      />
      <div bis_skin_checked="1">
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
          {tags.map((tag) => (
            <a
              key={tag}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline text-gray-900"
            >
              #{tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
