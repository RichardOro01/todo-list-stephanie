"use client";

import React, { useState } from "react";
import Image from "next/image";
import edit from "@/assets/icons/edit.svg";
import TodoListAddModal from "./todo-list-add-modal";
import Modal from "../common/modal";
import { IWish } from "@/types/list";

interface TodoListItemCheckButtonProps {
  wish: IWish;
}

const TodoListItemEditButton: React.FC<TodoListItemCheckButtonProps> = ({
  wish,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button title="Editar" onClick={() => setShowModal(true)}>
        <Image src={edit} alt="edit" width={24} height={24} />
      </button>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <TodoListAddModal onClose={() => setShowModal(false)} edit={wish} />
      </Modal>
    </>
  );
};

export default TodoListItemEditButton;
