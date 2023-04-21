import React, { HTMLInputTypeAttribute, useState } from "react";
import classNames from "classnames";
export interface ISecondaryTextFieldComponent {
  onChangeText?: (e: string) => void;
  containerStyle?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  type?: HTMLInputTypeAttribute;
}

const SecondaryTextFieldComponent: React.FC<ISecondaryTextFieldComponent> = (
  props
) => {
  const { onChangeText, containerStyle, placeholder, icon, type } = props;
  const conStyle = classNames(containerStyle);
  const [isInputFocused, setInputToFocused] = useState<boolean>(false);
  return (
    <div
      className={`flex items-center justify-between border ${
        isInputFocused ? "border-textPrimary" : "border-borderColor"
      } rounded-lg p-5 transition-all ${conStyle}`}
    >
      <input
        className={`bg-transparent outline-none border-none  w-[100%]`}
        onChange={(e) => onChangeText && onChangeText(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setInputToFocused(true)}
        onBlur={() => setInputToFocused(false)}
        type={type}
      />
      {icon}
    </div>
  );
};

export default SecondaryTextFieldComponent;
