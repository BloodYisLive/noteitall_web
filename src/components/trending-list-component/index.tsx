import _ from "lodash";
import React from "react";
import BlogCard from "../card-component/blog-card-1";
import { Blog } from "@/types/blogs-type";

export interface TrendingListComponentTypes {
  data: Array<Blog>;
}

const TrendingListComponent: React.FC<TrendingListComponentTypes> = (props) => {
  const { data } = props;
  return (
    <>
      {!_.isEmpty(data) ? (
        <div className='my-7'>
          <h1 className={`section-title gradient-text`}>Trending</h1>
          <span className='text-lg '>Featured and highly rated articles</span>
          <div className='grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3'>
            {data.map((item, _) => {
              return <BlogCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

TrendingListComponent.defaultProps = {
  data: [],
};

export default TrendingListComponent;
