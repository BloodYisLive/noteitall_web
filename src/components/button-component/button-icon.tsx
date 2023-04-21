import React from "react";
import classNames from "classnames";

export interface IButtonWithIcon {
  icon: React.ReactNode;
  containerStyle?: string;
  title: string;
}
const ButtonWithIcon: React.FC<IButtonWithIcon> = (props) => {
  const { containerStyle, icon, title } = props;
  const conStyle = classNames(containerStyle);
  return (
    <div
      className={`flex items-center justify-center p-2 rounded-xl border border-borderColor bg-cardBackground cursor-pointer transition-transform hover:-translate-y-1 ${conStyle}`}
    >
      {icon}
      <span className="ml-2">{title}</span>
    </div>
  );
};

export default ButtonWithIcon;
