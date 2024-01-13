import React from "react";
import Input from "../common/input";
import ButtonPrimary from "../common/button-primary";
import ButtonSecondary from "../common/button-secondary";

interface TodoListAddModalProps {
  onClose: () => void;
}

const TodoListAddModal: React.FC<TodoListAddModalProps> = ({ onClose }) => {
  const handleAdd = () => {
    console.log("handleAdd");
    onClose();
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="font-semibold text-xl mb-4">Agregar deseo</h3>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="description">Descripción</label>
        <Input id="description" />
        <label htmlFor="dueDate" className="mt-4">
          Fecha límite
        </label>
        <Input
          id="dueDate"
          type="date"
          min={new Date().toISOString().slice(0, 10)}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 w-full mt-4">
        <ButtonSecondary onClick={onClose}>Cancelar</ButtonSecondary>
        <ButtonPrimary onClick={handleAdd}>Agregar</ButtonPrimary>
      </div>
    </div>
  );
};

export default TodoListAddModal;
