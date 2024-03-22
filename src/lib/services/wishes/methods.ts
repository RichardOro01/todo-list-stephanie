"use server";

import prisma from "@/lib/prisma";
import { ICreateWish, IWish, WishStatus } from "@/types/list";
import { FetchServerResponse } from "../types";
import { createWishSchema } from "./shemas";
import { ZodError } from "zod";
import { revalidatePath } from "next/cache";

export const addWish = async (wish: ICreateWish) => {
  try {
    createWishSchema.parse(wish);
    await prisma.wishes.create({ data: { ...wish } });
    revalidatePath("/");
    return {
      data: "ok",
      status: 200,
      statusText: "ok",
    } as FetchServerResponse<string>;
  } catch (error: any) {
    if (error instanceof ZodError) {
      return {
        data: error.issues,
        status: 400,
        statusText: "Bad request",
      } as FetchServerResponse<any>;
    }
    return {
      data: error.message,
      status: 500,
      statusText: "Internal Server Error",
    } as FetchServerResponse<any>;
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
    return {
      data: error.message,
      status: 500,
      statusText: "Internal Server Error",
    } as FetchServerResponse<any>;
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
    return {
      data: "ok",
      status: 200,
      statusText: "ok",
    } as FetchServerResponse<string>;
  } catch (error: any) {
    return {
      data: error.message,
      status: 500,
      statusText: "Internal Server Error",
    } as FetchServerResponse<any>;
  }
};

export const deleteWish = async (id: number) => {
  try {
    await prisma.wishes.delete({
      where: { id },
    });
    revalidatePath("/");
    return {
      data: "ok",
      status: 200,
      statusText: "ok",
    } as FetchServerResponse<string>;
  } catch (error: any) {
    return {
      data: error.message,
      status: 500,
      statusText: "Internal Server Error",
    } as FetchServerResponse<any>;
  }
};
