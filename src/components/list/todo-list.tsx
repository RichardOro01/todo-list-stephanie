import React from "react";
import { IListItem, IWish } from "@/types/list";
import TodoListItem from "./todo-list-item";
import { fetcher } from "@/lib/services/fetcher";
import { getWishes } from "@/lib/services/wishes/methods";

interface TodoListProps {
  items: IListItem[];
}

const TodoList: React.FC<TodoListProps> = async ({ items }) => {
  const wishes = (await fetcher<IWish[]>(getWishes)).data;
  return (
    <ul className="flex flex-col gap-4 w-full">
      {wishes.map((wish) => (
        <TodoListItem
          key={wish.id}
          item={{
            id: wish.id,
            dueDate: wish.limit_date,
            description: wish.name,
            completed: wish.status === "compliment",
          }}
        />
      ))}
    </ul>
  );
};

export default TodoList;
