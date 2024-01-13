import clsx from "clsx";
import React from "react";
import { IListItem } from "@/types/list";
import TodoListItemCheckButton from "./todo-list-item-check-button";
import TodoListItemTrashButton from "./todo-list-item-trash-button";

interface TodoListItemProps {
  item: IListItem;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ item }) => {
  const { id, description, dueDate, completed } = item;
  return (
    <li
      className={clsx(
        "flex gap-2 justify-between items-center px-4 py-2 rounded-lg  border-solid border-2",
        {
          "bg-blue-100": !completed,
          "border-blue-300": !completed,
          "bg-green-100": completed,
          "border-green-300": completed,
        }
      )}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-md font-semibold text-gray-800">{description}</h3>
        <h5 className="text-sm font-semibold text-gray-700">
          {dueDate.toLocaleDateString()}
        </h5>
      </div>
      <div className="flex gap-2">
        <TodoListItemTrashButton />
        <TodoListItemCheckButton />
      </div>
    </li>
  );
};

export default TodoListItem;
