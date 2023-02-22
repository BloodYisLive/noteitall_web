import React from "react";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import DropdownContentComponent from "./dropdown-content-component";
import { dropdownData } from "./dropdownData";

interface DropdownOptionsType {
  id: string;
  title: string;
  data?: Array<DropdownOptionsType>;
}

interface DropdownComponentTypes {
  label: string;
  data?: Array<DropdownOptionsType>;
}

const Dropdown: React.FC<DropdownComponentTypes> = (props) => {
  const { label } = props;
  return (
    <div>
      {/* Menu Button */}
      {/* <div className='peer flex justify-center items-center transition-all text-textPrimary hover:text-secondary cursor-pointer relative'>
        <span>{label}</span>
        <ArrowDropDownRoundedIcon />
      </div> */}
      {/* Menu Items */}
      {/* <ul className='hidden w-[10rem] peer-hover:flex hover:flex flex-col absolute text-[13px] bg-cardBackground border border-borderColor rounded-md py-1'>
        <li className='transition-all cursor-pointer hover:text-textSecondary py-1 px-3'>
          Hello
        </li>
      </ul> */}
      <DropdownContentComponent dropdownData={dropdownData} />
    </div>
  );
};

export default Dropdown;
