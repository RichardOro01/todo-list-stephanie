import React, { useState } from "react";
import Input from "../common/input";
import ButtonPrimary from "../common/button-primary";
import ButtonSecondary from "../common/button-secondary";
import { ICreateWish } from "@/types/list";
import { fetcher } from "@/lib/services/fetcher";
import { addWish } from "@/lib/services/wishes/methods";
import { createWishSchema } from "@/lib/services/wishes/shemas";
import { ZodError } from "zod";
import Loading from "../common/loading";

interface TodoListAddModalProps {
  onClose: () => void;
}

const TodoListAddModal: React.FC<TodoListAddModalProps> = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<
    { path: string | number; message: string }[]
  >([]);

  const handleAdd: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(event.currentTarget);
      const data: ICreateWish = {
        name: formData.get("description")?.toString() ?? "",
        limit_date: new Date(formData.get("dueDate")?.toString() ?? ""),
        status: "pending",
      };
      createWishSchema.parse(data);
      await fetcher(() => addWish(data));
      onClose();
    } catch (e) {
      if (e instanceof ZodError) {
        setErrors(
          e.issues.map(({ message, path }) => ({ message, path: path[0] }))
        );
      }
      console.log(e);
    }
    setLoading(false);
  };
  return (
    <form onSubmit={handleAdd} className="flex flex-col items-center gap-4">
      <h3 className="font-semibold text-xl mb-4">Agregar deseo</h3>
      <div className="w-full flex flex-col gap-2">
        <Input
          label="Descripción"
          name="description"
          helperText={errors.find((error) => error.path === "name")?.message}
          error={!!errors.find((error) => error.path === "name")}
          onChange={() =>
            setErrors((prev) => prev.filter((error) => error.path !== "name"))
          }
        />
        <Input
          label="Fecha límite"
          name="dueDate"
          type="date"
          min={new Date().toISOString().slice(0, 10)}
          helperText={
            errors.find((error) => error.path === "limit_date")?.message
          }
          error={!!errors.find((error) => error.path === "limit_date")}
          onChange={() =>
            setErrors((prev) =>
              prev.filter((error) => error.path !== "limit_date")
            )
          }
        />
      </div>
      <div className="grid grid-cols-2 gap-4 w-full mt-4">
        <ButtonSecondary type="button" onClick={onClose} disabled={loading}>
          Cancelar
        </ButtonSecondary>
        <ButtonPrimary type="submit" disabled={loading}>
          {loading ? <Loading color="white" /> : "Agregar"}
        </ButtonPrimary>
      </div>
    </form>
  );
};

export default TodoListAddModal;
