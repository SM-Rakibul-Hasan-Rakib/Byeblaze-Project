export const getBlogs = () => {
  let blogs = [];
  const storeBlogs = localStorage.getItem("blogs");
  if (storeBlogs) {
    blogs = JSON.parse(storeBlogs);
  }

  return blogs;
};
