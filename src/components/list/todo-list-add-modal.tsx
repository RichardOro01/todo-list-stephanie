import React, { useState } from "react";
import Input from "../common/input";
import ButtonPrimary from "../common/button-primary";
import ButtonSecondary from "../common/button-secondary";
import { ICreateWish, IWish } from "@/types/list";
import { fetcher } from "@/lib/services/fetcher";
import { addWish, editWish } from "@/lib/services/wishes/methods";
import { createWishSchema } from "@/lib/services/wishes/schemas";
import { ZodError } from "zod";
import Loading from "../common/loading";

interface TodoListAddModalProps {
  edit?: IWish;
  onClose: () => void;
}

const TodoListAddModal: React.FC<TodoListAddModalProps> = ({
  edit,
  onClose,
}) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<
    { path: string | number; message: string }[]
  >([]);

  const handleAddEdit = async (formData: FormData, method: Function) => {
    setLoading(true);
    try {
      const data: ICreateWish = {
        name: formData.get("description")?.toString() ?? "",
        limit_date: new Date(
          new Date(formData.get("dueDate")?.toString() ?? "").getTime() +
            18000000
        ),
        status: "pending",
      };
      console.log(formData.get("dueDate"), data);
      createWishSchema.parse(data);
      await fetcher(() => method({ id: edit?.id, ...data }));
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

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (!edit) {
      handleAddEdit(formData, addWish);
    } else {
      handleAddEdit(formData, editWish);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <h3 className="font-semibold text-xl mb-4">
        {edit ? "Editar deseo" : "Agregar deseo"}
      </h3>
      <div className="w-full flex flex-col gap-2">
        <Input
          defaultValue={edit?.name}
          label="Descripción"
          name="description"
          helperText={errors.find((error) => error.path === "name")?.message}
          error={!!errors.find((error) => error.path === "name")}
          onChange={() =>
            setErrors((prev) => prev.filter((error) => error.path !== "name"))
          }
        />
        <Input
          defaultValue={edit?.limit_date.toISOString().slice(0, 10) ?? ""}
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
