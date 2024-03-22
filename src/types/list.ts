import { wishes } from "@prisma/client";

export type IWish = wishes;
export type ICreateWish = Omit<IWish, "id">;
export type WishStatus = IWish["status"];
