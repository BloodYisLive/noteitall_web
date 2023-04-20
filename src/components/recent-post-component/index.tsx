import { popularTags } from "@/json/popularTags";
import React from "react";
import SecondaryBlogCard from "../card-component/blog-card-2";
import PopularTagsCard from "../card-component/popular-tags-card";
import { Blog } from "@/types/blogs-type";

interface IRecentPostComponent {
  data: Array<Blog>;
}

const RecentPostComponent: React.FC<IRecentPostComponent> = (props) => {
  const { data } = props;
  return (
    <div className='my-7'>
      <h1 className={`section-title gradient-text`}>Recent posts</h1>
      <span className='text-lg '>Don&apos;t miss the latest trends</span>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='w-[100%] md:w-[60%]'>
          {data.map((item, _) => {
            return <SecondaryBlogCard key={item.id} item={item} />;
          })}
        </div>
        <div className='w-[100%] md:w-[35%]'>
          <PopularTagsCard data={popularTags} />
        </div>
      </div>
    </div>
  );
};

export default RecentPostComponent;
