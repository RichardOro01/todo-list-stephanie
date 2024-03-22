"use client";

import React, { useState } from "react";
import Image from "next/image";
import check from "@/assets/icons/check.svg";
import { fetcher } from "@/lib/services/fetcher";
import { checkWish } from "@/lib/services/wishes/methods";
import Loading from "../common/loading";

interface TodoListItemCheckButtonProps {
  id: number;
}

const TodoListItemCheckButton: React.FC<TodoListItemCheckButtonProps> = ({
  id,
}) => {
  const [loading, setLoading] = useState(false);
  const handleCheck = async () => {
    setLoading(true);
    try {
      await fetcher(() => checkWish(id));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <button title="Cumplir" onClick={handleCheck} disabled={loading}>
      {loading ? (
        <Loading />
      ) : (
        <Image src={check} alt="check" width={24} height={24} />
      )}
    </button>
  );
};

export default TodoListItemCheckButton;
