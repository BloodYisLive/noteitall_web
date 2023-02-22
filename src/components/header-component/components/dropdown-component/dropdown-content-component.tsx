import React from "react";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { useRouter } from "next/router";
export interface DropdownDataTypes {
  id: string;
  title: string;
  page?: string;
  data?: DropdownDataTypes[];
}

interface DropdownContentComponentTypes {
  dropdownData: DropdownDataTypes[];
}
const DropdownContentComponent: React.FC<DropdownContentComponentTypes> = (
  props
) => {
  const router = useRouter();
  const { dropdownData } = props;
  const currentRouteName = router.pathname;
  return (
    <React.Fragment>
      <div className="flex justify-between">
        {dropdownData.map((item, index) => {
          return (
            <div
              key={index}
              className={`peer flex justify-center items-center transition-all ${
                currentRouteName === item.page
                  ? "text-secondary"
                  : `text-textPrimary`
              } hover:text-secondary cursor-pointer relative px-4 py-3`}
            >
              <span>{item.title}</span>
              {item.data ? <ArrowDropDownRoundedIcon /> : null}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

DropdownContentComponent.defaultProps = {
  dropdownData: [],
};

export default DropdownContentComponent;
