"use server";

import prisma from "@/lib/prisma";
import { ICreateWish, IWish, WishStatus } from "@/types/list";
import { FetchServerResponse } from "../types";
import { createWishSchema } from "./schemas";
import { ZodError } from "zod";
import { revalidatePath } from "next/cache";
import { internalError, okResponse } from "../utils";

export const addWish = async (wish: ICreateWish) => {
  try {
    createWishSchema.parse(wish);
    await prisma.wishes.create({ data: wish });
    revalidatePath("/");
    return okResponse;
  } catch (error: any) {
    if (error instanceof ZodError) {
      return {
        data: error.issues,
        status: 400,
        statusText: "Bad request",
      } as FetchServerResponse<any>;
    }
    return internalError(error.message);
  }
};

export const editWish = async (wish: IWish) => {
  try {
    createWishSchema.parse(wish);
    await prisma.wishes.update({ where: { id: wish.id }, data: wish });
    revalidatePath("/");
    return okResponse;
  } catch (error: any) {
    if (error instanceof ZodError) {
      return {
        data: error.issues,
        status: 400,
        statusText: "Bad request",
      } as FetchServerResponse<any>;
    }
    return internalError(error.message);
  }
};

export const getWishes = async () => {
  try {
    const wishes = await prisma.wishes.findMany({
      orderBy: { limit_date: "asc" },
    });
    return {
      data: wishes,
      status: 200,
      statusText: "ok",
    } as FetchServerResponse<IWish[]>;
  } catch (error: any) {
    return internalError(error.message);
  }
};

export const checkWish = async (id: number) => {
  return updateWishStatus(id, "compliment");
};

export const cancelWish = async (id: number) => {
  return updateWishStatus(id, "canceled");
};

export const updateWishStatus = async (id: number, status: WishStatus) => {
  try {
    await prisma.wishes.update({
      where: { id },
      data: { status: status },
    });
    revalidatePath("/");
    return okResponse;
  } catch (error: any) {
    return internalError(error.message);
  }
};

export const deleteWish = async (id: number) => {
  try {
    await prisma.wishes.delete({
      where: { id },
    });
    revalidatePath("/");
    return okResponse;
  } catch (error: any) {
    return internalError(error.message);
  }
};
