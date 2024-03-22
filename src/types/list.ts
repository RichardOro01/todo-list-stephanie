import { wishes } from "@prisma/client";

export interface IListItem {
  id: number;
  description: string;
  dueDate: Date;
  completed: boolean;
}

export type IWish = wishes;
export type ICreateWish = Omit<IWish, "id">;
export type WishStatus = IWish["status"];
