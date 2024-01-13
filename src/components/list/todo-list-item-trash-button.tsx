"use client";

import React from "react";
import Image from "next/image";
import trash from "@/assets/icons/trash.svg";

const TodoListItemTrashButton = () => {
  return (
    <button title="check">
      <Image src={trash} alt="trash" />
    </button>
  );
};

export default TodoListItemTrashButton;
