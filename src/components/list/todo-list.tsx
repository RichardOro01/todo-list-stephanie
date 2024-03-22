import React from "react";
import { IWish } from "@/types/list";
import TodoListItem from "./todo-list-item";

interface TodoListProps {
  title: string;
  items: IWish[];
}

const TodoList: React.FC<TodoListProps> = async ({ items, title }) => {
  return (
    <>
      {!!items.length && (
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{title}</h3>
          <hr className="w-full border-b-2 mb-4 border-dashed"></hr>
          <ul className="flex flex-col gap-4 w-full">
            {items.map((wish) => (
              <TodoListItem key={wish.id} wish={wish} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default TodoList;
