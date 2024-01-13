import { _list } from "@/_mock/_list";
import TodoList from "@/components/list/todo-list";
import TodoListAdd from "@/components/list/todo-list-add";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-12 lg:p-24 gap-8  ">
      <h1 className="font-bold text-2xl text-center">
        Lista de deseos de Stephanie
      </h1>
      <div className="flex flex-col items-center w-full max-w-2xl gap-4">
        <TodoListAdd />
        <TodoList items={_list} />
      </div>
    </main>
  );
}
