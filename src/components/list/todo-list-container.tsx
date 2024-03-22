import React from "react";
import { IWish } from "@/types/list";
import TodoListItem from "./todo-list-item";
import { fetcher } from "@/lib/services/fetcher";
import { getWishes } from "@/lib/services/wishes/methods";
import TodoList from "./todo-list";

const TodoListContainer: React.FC = async () => {
  const wishes = (await fetcher<IWish[]>(getWishes)).data;
  const wishesPending = wishes.filter(({ status }) => status === "pending");
  const wishesCompliment = wishes.filter(
    ({ status }) => status === "compliment"
  );
  const wishesCanceled = wishes.filter(({ status }) => status === "canceled");
  return (
    <div className="flex flex-col gap-8 w-full">
      <TodoList items={wishesPending} title="Pendientes" />
      <TodoList items={wishesCompliment} title="Cumplidos" />
      <TodoList items={wishesCanceled} title="Cancelados" />
    </div>
  );
};

export default TodoListContainer;
