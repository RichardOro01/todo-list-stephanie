import clsx from "clsx";
import React from "react";

const Input: React.FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > & { error?: boolean; helperText?: string; label?: string }
> = ({ error, helperText, label, ...props }) => {
  return (
    <div>
      <label>
        <span className="font-semibold text-base">{label}</span>
        <input
          className={clsx(
            "border-2 rounded-md  outline-none px-4 py-2 w-full focus:shadow-lg transition-all",
            {
              "border-gray-300 focus:shadow-blue-300 focus:border-blue-300":
                !error,
              "focus:shadow-red-300 border-red-300": error,
            }
          )}
          {...props}
        />
      </label>
      <span className={clsx("font-semibold", { "text-red-400": error })}>
        {helperText}
      </span>
    </div>
  );
};

export default Input;
