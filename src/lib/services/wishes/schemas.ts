import { ICreateWish } from "@/types/list";
import { z } from "zod";

export const createWishSchema: z.ZodSchema<ICreateWish> = z.object({
  limit_date: z.date({
    errorMap: (issue, { defaultError }) => ({
      message: issue.code === "invalid_date" ? "Campo requerido" : defaultError,
    }),
  }),
  name: z.string().min(1, "Campo requerido"),
  status: z.enum(["pending", "canceled", "compliment"]),
});
