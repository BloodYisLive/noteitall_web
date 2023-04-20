import moment from "moment";
import Image from "next/image";
import React from "react";
import { Blog } from "../trending-list-component";

export interface IBlogCard {
  item: Blog;
}
const BlogCard: React.FC<IBlogCard> = (props) => {
  const { item } = props;
  return (
    <div className="group rounded-lg border border-borderColor bg-cardBackground p-5 transition-all hover:-translate-y-0.5">
      <div className="relative w-[100%] h-[13rem] mb-4 cursor-pointer">
        <Image
          // src='https://genz-nextjs-v2.vercel.app/assets/imgs/page/homepage1/news2.png'
          src={item.thumbnail}
          alt="news"
          fill
          className="rounded-lg"
        />
      </div>
      <div>
        <div className="flex justify-between items-center">
          <span className="hover:text-primary cursor-pointer">
            #Design #Movie
          </span>
          <span>{item.readTime} mins read</span>
        </div>
        <h1 className="text-xl font-bold my-5 text-[#b9e0f2] group-hover:text-secondary cursor-pointer">
          {item.title}
        </h1>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              // src='https://genz-nextjs-v2.vercel.app/assets/imgs/page/homepage1/author.png'
              src={item.author.profilePic}
              width={50}
              height={50}
              alt="Profile"
              className="rounded-[50%]"
            />
            <div className="flex flex-col ml-3 cursor-pointer">
              <span>{item.author.name}</span>
              <span>{moment(item.uploadDate).format("dd mm YYYY")}</span>
            </div>
          </div>
          <span className="cursor-pointer hover:text-primary">Read more</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
