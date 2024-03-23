import clsx from "clsx";
import React from "react";

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: boolean;
  helperText?: string;
  label?: string;
  startAdornment?: React.ReactElement;
  endAdornment?: React.ReactElement;
}

const Input: React.FC<InputProps> = ({
  error,
  helperText,
  label,
  startAdornment,
  endAdornment,
  ...props
}) => {
  return (
    <div>
      <label>
        <span className="font-semibold text-base">{label}</span>
        <div
          className={clsx(
            "flex gap-2 border-2 rounded-md px-4 py-2 w-full focus-within:shadow-lg focus-within:scale-[1.01] transition-all",
            {
              "border-gray-300 focus-within:shadow-blue-300 focus-within:border-blue-300":
                !error,
              "focus-within:shadow-red-300 border-red-300": error,
            }
          )}
        >
          {startAdornment}
          <input className="outline-none w-full" {...props} />
          {endAdornment}
        </div>
      </label>
      <span className={clsx("font-semibold", { "text-red-400": error })}>
        {helperText}
      </span>
    </div>
  );
};

export default Input;
