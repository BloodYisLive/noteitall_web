import React from "react";

interface ButtonProps {
  onClick?: () => void;
  title: string;
  rounded?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { title, rounded, onClick } = props;
  return (
    <div
      className={`transition-all duration-500 cursor-pointer bg-gradient-to-r from-primary to-secondary rounded-lg px-4 py-2 mx-2`}
      onClick={onClick}
    >
      <span className='text-sm'>{title}</span>
    </div>
  );
};

export default Button;
