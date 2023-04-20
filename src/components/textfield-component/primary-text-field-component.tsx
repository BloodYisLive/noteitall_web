import React from "react";
import styles from "./styles.module.css";
interface IPrimaryTextFieldComponent {
  icon?: React.ReactNode;
  onChangeText?: (e: string) => void;
  placeholder: string;
}

const PrimaryTextFieldComponent: React.FC<IPrimaryTextFieldComponent> = (
  props
) => {
  const { icon, onChangeText, placeholder } = props;
  return (
    <div className='flex items-center py-3 justify-start border-b-[1px] border-textPrimary'>
      {icon}
      <input
        className={styles.primary__container}
        onChange={(e) => onChangeText && onChangeText(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default PrimaryTextFieldComponent;
