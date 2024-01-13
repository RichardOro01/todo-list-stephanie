"use client";

import React from "react";
import Image from "next/image";
import check from "@/assets/icons/check.svg";

const TodoListItemCheckButton = () => {
  return (
    <button title="check">
      <Image src={check} alt="check" />
    </button>
  );
};

export default TodoListItemCheckButton;
