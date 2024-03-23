import React from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const ButtonPrimary: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`flex justify-center bg-blue-500 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-300 active:scale-105 text-white transition-all font-semibold py-2 px-4 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
