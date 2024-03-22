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
  const wishesNotCanceled = wishes.filter(
    ({ status }) => status !== "canceled"
  );
  const wishesCanceled = wishes.filter(({ status }) => status === "canceled");
  return (
    <div className="flex flex-col gap-8 w-full">
      <ul className="flex flex-col gap-4 w-full">
        {wishesNotCanceled.map((wish) => (
          <TodoListItem
            key={wish.id}
            item={{
              id: wish.id,
              dueDate: wish.limit_date,
              description: wish.name,
              status: wish.status,
            }}
          />
        ))}
      </ul>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">Cancelados</h3>
        <hr className="w-full border-b-2 mb-4 border-dashed"></hr>
        <ul className="flex flex-col gap-4 w-full">
          {wishesCanceled.map((wish) => (
            <TodoListItem
              key={wish.id}
              item={{
                id: wish.id,
                dueDate: wish.limit_date,
                description: wish.name,
                status: wish.status,
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
