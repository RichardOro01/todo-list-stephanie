"use server";

import prisma from "@/lib/prisma";
import { ICreateWish } from "@/types/list";
import { FetchServerResponse } from "../types";
import { createWishSchema } from "./shemas";
import { ZodError } from "zod";

export const addWish = async (wish: ICreateWish) => {
  try {
    createWishSchema.parse(wish);
    await prisma.wishes.create({ data: { ...wish } });
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
