"use client";

import React from "react";
import Image from "next/image";
import trash from "@/assets/icons/trash.svg";
import { fetcher } from "@/lib/services/fetcher";
import { checkWish, deleteWish } from "@/lib/services/wishes/methods";

interface TodoListItemTrashButtonProps {
  id: number;
}

const TodoListItemTrashButton: React.FC<TodoListItemTrashButtonProps> = ({
  id,
}) => {
  const handleTrash = () => {
    try {
      fetcher(() => deleteWish(id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button title="trash" onClick={handleTrash}>
      <Image src={trash} alt="trash" />
    </button>
  );
};

export default TodoListItemTrashButton;
