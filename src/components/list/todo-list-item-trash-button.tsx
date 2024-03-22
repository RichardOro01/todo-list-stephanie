"use client";

import React, { useState } from "react";
import Image from "next/image";
import trash from "@/assets/icons/trash.svg";
import { fetcher } from "@/lib/services/fetcher";
import { cancelWish } from "@/lib/services/wishes/methods";
import Loading from "../common/loading";

interface TodoListItemTrashButtonProps {
  id: number;
}

const TodoListItemTrashButton: React.FC<TodoListItemTrashButtonProps> = ({
  id,
}) => {
  const [loading, setLoading] = useState(false);
  const handleTrash = async () => {
    setLoading(true);
    try {
      await fetcher(() => cancelWish(id));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <button title="delete" onClick={handleTrash} disabled={loading}>
      {loading ? (
        <Loading />
      ) : (
        <Image src={trash} alt="trash" width={24} height={24} />
      )}
    </button>
  );
};

export default TodoListItemTrashButton;
