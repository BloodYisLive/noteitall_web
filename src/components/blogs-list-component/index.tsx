import React from "react";
import BlogCard from "../card-component/blog-card-1";
import styles from "./index.module.css";
interface BlogsListComponentTypes {}

const BlogsListComponent: React.FC<BlogsListComponentTypes> = () => {
  return (
    <div className='my-7'>
      <h1 className={`text-2xl font-bold lg:text-5xl gradient-text`}>
        Trending
      </h1>
      <span className='text-lg '>Featured and highly rated articles</span>
      <div className='grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogsListComponent;
