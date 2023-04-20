import Link from "next/link";
import React from "react";
import { Chip as MUIChip } from "@mui/material";
import classNames from "classnames";
interface IChip {
  label: string;
  containerStyle?: string;
}
const Chip: React.FC<IChip> = (props) => {
  const { label, containerStyle } = props;
  const conStyle = classNames(containerStyle);
  return (
    <Link href={""}>
      <MUIChip
        className={`bg-borderColor text-white text-xs px-4 py-[6px] cursor-pointer ${conStyle}`}
        label={label}
        sx={{
          height: "auto",
          "& .MuiChip-label": {
            padding: 0,
          },
        }}
      />
    </Link>
  );
};

export default Chip;
