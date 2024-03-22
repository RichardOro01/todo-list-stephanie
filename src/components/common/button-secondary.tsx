import React from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const ButtonSecondary: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="bg-white border-solid border-2 border-blue-500 text-blue-500 hover:text-blue-400 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-300 active:scale-105 transition-all font-semibold py-2 px-4 rounded"
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
