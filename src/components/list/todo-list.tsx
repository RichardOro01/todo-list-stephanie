import React from "react";
import { IListItem } from "@/types/list";
import TodoListItem from "./todo-list-item";

interface TodoListProps {
  items: IListItem[];
}

const TodoList: React.FC<TodoListProps> = ({ items }) => {
  return (
    <ul className="flex flex-col gap-4 w-full">
      {items.map((item) => (
        <TodoListItem key={item.id} {...{ item }} />
      ))}
    </ul>
  );
};

export default TodoList;
