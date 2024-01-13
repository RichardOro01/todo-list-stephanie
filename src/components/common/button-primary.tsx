import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const ButtonPrimary: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-300 active:scale-105 text-white transition-all font-semibold py-2 px-4 rounded"
      {...{ onClick }}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
