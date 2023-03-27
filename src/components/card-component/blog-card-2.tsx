import Image from "next/image";
import React from "react";

const SecondaryBlogCard = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center my-8'>
      <div className='h-[13rem] w-[60%] relative'>
        <Image
          src='https://genz-nextjs-v2.vercel.app/assets/imgs/page/homepage1/news2.png'
          alt='news'
          fill
          className='rounded-lg absolute'
        />
      </div>
      <div className='px-6'>
        <span>Working Tips</span>
        <h1>Helpful Tips for Working from Home as a Freelancer</h1>
        <span>
          Gosh jaguar ostrich quail one excited dear hello and bound and the and
          bland moral misheard roadrunner flapped lynx far that and jeepers
          giggled far and far
        </span>
        <div className='flex justify-between items-center'>
          <span className='hover:text-primary cursor-pointer'>
            #Design #Movie
          </span>
          <span>6 mins read</span>
        </div>
      </div>
    </div>
  );
};

export default SecondaryBlogCard;
