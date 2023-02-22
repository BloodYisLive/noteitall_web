import Image from "next/image";
import React from "react";

export interface TopicCardTypes {
  width?: number;
}

const TopicCard = (props: TopicCardTypes) => {
  const { width } = props;
  return (
    <div className={`flex-[0_0_50%] min-w-0 relative pl-4`}>
      <Image
        src={
          "https://genz-next.vercel.app/assets/imgs/page/homepage1/lifestyle.png"
        }
        alt="Topic Card"
        className="block w-[100%] h-[19rem] object-cover"
        width={width ?? 0}
        height={0}
        unoptimized
      />
    </div>
  );
};

export default TopicCard;
