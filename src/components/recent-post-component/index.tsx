import { popularTags } from "@/json/popularTags";
import React from "react";
import SecondaryBlogCard from "../card-component/blog-card-2";
import PopularTagsCard from "../card-component/popular-tags-card";

interface IRecentPostComponent {}

const RecentPostComponent: React.FC<IRecentPostComponent> = (props) => {
  const {} = props;
  return (
    <div className='my-7'>
      <h1 className={`section-title gradient-text`}>Recent posts</h1>
      <span className='text-lg '>Don't miss the latest trends</span>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='w-[100%] md:w-[60%]'>
          <SecondaryBlogCard />
          <SecondaryBlogCard />
        </div>
        <div className='w-[100%] md:w-[40%]'>
          <PopularTagsCard data={popularTags} />
        </div>
      </div>
    </div>
  );
};

export default RecentPostComponent;
