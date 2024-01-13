"use client";

import Modal from "../common/modal";
import React, { useState } from "react";
import ButtonPrimary from "../common/button-primary";
import TodoListAddModal from "./todo-list-add-modal";

const TodoListAdd = () => {
  const [addModal, setAddModal] = useState(false);
  return (
    <div className="self-end">
      <ButtonPrimary
        onClick={() => {
          setAddModal(true);
        }}
      >
        Agregar
      </ButtonPrimary>
      <Modal open={addModal} onClose={() => setAddModal(false)}>
        <TodoListAddModal onClose={() => setAddModal(false)} />
      </Modal>
    </div>
  );
};

export default TodoListAdd;
