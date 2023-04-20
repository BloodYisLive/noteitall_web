import Image from "next/image";
import React from "react";
import Chip from "../chip-component";
import { Blog } from "@/types/blogs-type";

export interface ISecondaryBlogCard {
  item: Blog;
}

const SecondaryBlogCard: React.FC<ISecondaryBlogCard> = (props) => {
  const { item } = props;
  return (
    <div className='flex flex-row justify-start items-center my-8'>
      <div className='h-[100px] lg:h-[134px] w-[100px] md:w-[150px] lg:w-[200px] shrink-0 relative'>
        <Image
          // src='https://genz-nextjs-v2.vercel.app/assets/imgs/page/homepage1/news2.png'
          src={item.thumbnail}
          alt='news'
          fill
          className='rounded-lg absolute'
        />
      </div>
      <div className='px-6'>
        <div className='flex items-center pb-2'>
          <Image
            // src='https://genz-nextjs-v2.vercel.app/assets/imgs/page/homepage1/author.png'
            src={item.author.profilePic}
            width={20}
            height={20}
            alt={item.author.name}
            className='rounded-[50%]'
          />
          <span className={"text-sm px-2"}>{item.author.name}</span>
        </div>
        <h1 className='clamp__text text-base text-textSecondary lg:text-xl font-bold '>
          {item.title}
        </h1>
        <span className='clamp__text max-lg:hidden text-base '>
          {item.description}
        </span>
        <div className='flex justify-start items-center text-xs pt-2'>
          <span className='hover:text-primary cursor-pointer pr-2'>
            #Design #Movie
          </span>
          <span className='px-2'>{item.readTime} mins read</span>
          <Chip containerStyle='hidden md:block' label={item.tags[0]} />
        </div>
      </div>
    </div>
  );
};

export default SecondaryBlogCard;
