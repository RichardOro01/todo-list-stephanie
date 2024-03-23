"use client";

import React, { useState } from "react";
import Input, { InputProps } from "./input";
import Image from "next/image";
import eye from "@/assets/icons/eye.svg";
import eyeOff from "@/assets/icons/eye-off.svg";

const InputPassword: React.FC<Omit<InputProps, "type" | "endAdornment">> = (
  props
) => {
  const [hide, setHide] = useState(true);
  return (
    <Input
      type={hide ? "password" : "text"}
      endAdornment={
        <button
          type="button"
          className="h-auto"
          onClick={() => setHide((prev) => !prev)}
        >
          {!hide ? (
            <Image src={eye} alt="eye" width={24} height={24} />
          ) : (
            <Image src={eyeOff} alt="eye-off" width={24} height={24} />
          )}
        </button>
      }
      {...props}
    />
  );
};

export default InputPassword;
