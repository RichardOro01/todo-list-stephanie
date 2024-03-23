import clsx from "clsx";
import React from "react";
import { IWish } from "@/types/list";
import TodoListItemCheckButton from "./todo-list-item-check-button";
import TodoListItemTrashButton from "./todo-list-item-trash-button";
import TodoListItemEditButton from "./todo-list-item-edit-button";

interface TodoListItemProps {
  wish: IWish;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ wish }) => {
  const { id, name, limit_date, status } = wish;
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
        <h4 className="text-md font-semibold text-gray-800 break-all">
          {name}
        </h4>
        <h5 className="text-sm font-semibold text-gray-700">
          {limit_date.toLocaleDateString()}
        </h5>
      </div>
      {status === "pending" && (
        <div className="flex gap-2 w-full max-w-24">
          <TodoListItemEditButton {...{ wish }} />
          <TodoListItemTrashButton {...{ id }} />
          <TodoListItemCheckButton {...{ id }} />
        </div>
      )}
    </li>
  );
};

export default TodoListItem;
