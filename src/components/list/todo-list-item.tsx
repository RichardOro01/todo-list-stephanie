import clsx from "clsx";
import React from "react";
import { IListItem } from "@/types/list";
import TodoListItemCheckButton from "./todo-list-item-check-button";
import TodoListItemTrashButton from "./todo-list-item-trash-button";

interface TodoListItemProps {
  item: IListItem;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ item }) => {
  const { id, description, dueDate, status } = item;
  return (
    <li
      className={clsx(
        "flex gap-2 justify-between items-center px-4 py-2 rounded-lg  border-solid border-2",
        {
          "bg-blue-100": status === "pending",
          "border-blue-300": status === "pending",
          "bg-green-100": status === "compliment",
          "border-green-300": status === "compliment",
          "bg-red-100": status === "canceled",
          "border-red-300": status === "canceled",
        }
      )}
    >
      <div className="flex flex-col gap-2 w-full">
        <h3 className="text-md font-semibold text-gray-800 break-all">
          {description}
        </h3>
        <h5 className="text-sm font-semibold text-gray-700">
          {dueDate.toLocaleDateString()}
        </h5>
      </div>
      {status === "pending" && (
        <div className="flex gap-2 w-[10%]">
          <TodoListItemTrashButton {...{ id }} />
          <TodoListItemCheckButton {...{ id }} />
        </div>
      )}
    </li>
  );
};

export default TodoListItem;
