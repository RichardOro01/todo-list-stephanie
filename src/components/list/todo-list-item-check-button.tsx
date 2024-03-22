"use client";

import React from "react";
import Image from "next/image";
import check from "@/assets/icons/check.svg";
import { fetcher } from "@/lib/services/fetcher";
import { checkWish } from "@/lib/services/wishes/methods";

interface TodoListItemCheckButtonProps {
  id: number;
}

const TodoListItemCheckButton: React.FC<TodoListItemCheckButtonProps> = ({
  id,
}) => {
  const handleCheck = () => {
    try {
      fetcher(() => checkWish(id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button title="check" onClick={handleCheck}>
      <Image src={check} alt="check" />
    </button>
  );
};

export default TodoListItemCheckButton;
