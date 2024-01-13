import React from "react";

const Input: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = (props) => {
  return (
    <input
      className="border-2 rounded-md border-gray-300 outline-none px-4 py-2 w-full focus:shadow-lg focus:shadow-blue-300 focus:border-blue-300"
      {...props}
    />
  );
};

export default Input;
