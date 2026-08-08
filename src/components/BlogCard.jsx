import React from "react";
import { Link } from "react-router";
import placeHolderImage from "../assets/404.jpg";

const BlogCard = ({ blog }) => {
  const { cover_image, title, description, published_at, id } = blog;
  return (
    <Link
      to={`blog/${id}`}
      rel="noopener noreferrer"
      href="#"
      className="max-w-sm mx-auto group transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline  "
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500"
        src={cover_image || placeHolderImage}
      />
      <div className="p-6 space-y-2" bis_skin_checked="1">
        <h3 className="text-2xl font-semibold group-hover:underline text-black group-focus:underline">
          {title}
        </h3>
        <span className="text-xs text-black">
          {new Date(published_at).toLocaleDateString()}
        </span>
        <p className="text-black">{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
