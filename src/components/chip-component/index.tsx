import Link from "next/link";
import React from "react";

interface IChip {
  label: string;
}
const Chip: React.FC<IChip> = (props) => {
  const { label } = props;
  return (
    <Link href={""}>
      <div className='px-4 py-[6px] mr-2 mb-2 rounded-full text-center text-sm text-white bg-borderColor cursor-pointer'>
        {label}
      </div>
    </Link>
  );
};

export default Chip;
