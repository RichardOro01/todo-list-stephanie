import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const ButtonSecondary: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="bg-white border-solid border-2 border-blue-500 text-blue-500 hover:text-blue-400 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-300 active:scale-105 transition-all font-semibold py-2 px-4 rounded"
      {...{ onClick }}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
