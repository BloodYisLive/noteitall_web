import React from "react";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import DropdownContentComponent from "./dropdown-content-component";
import { dropdownData } from "./dropdownData";

interface DropdownComponentTypes {}

const Dropdown: React.FC<DropdownComponentTypes> = (props) => {
  return <DropdownContentComponent dropdownData={dropdownData} />;
};

export default Dropdown;
