import Image from "next/image";
import React from "react";

export interface IBlogCard {}
const BlogCard: React.FC<IBlogCard> = (props) => {
  const {} = props;
  return (
    <div className='group rounded-md border border-borderColor p-5 transition-all hover:-translate-y-0.5'>
      <div className='relative w-[100%] h-[13rem] mb-4 cursor-pointer'>
        <Image
          src='https://genz-nextjs-v2.vercel.app/assets/imgs/page/homepage1/news2.png'
          alt='news'
          fill
          className='rounded-lg'
        />
      </div>
      <div>
        <div className='flex justify-between items-center'>
          <span className='hover:text-primary cursor-pointer'>
            #Design #Movie
          </span>
          <span>6 mins read</span>
        </div>
        <h1 className='text-xl font-bold mt-5 text-[#b9e0f2] group-hover:text-secondary cursor-pointer'>
          Self-observation is the first step of inner unfolding
        </h1>
        <div className='flex justify-between items-center'>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
