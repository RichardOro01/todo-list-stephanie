import { FetchServerResponse } from "./types";

export const okResponse = {
  data: "ok",
  status: 200,
  statusText: "ok",
} as FetchServerResponse<string>;

export const internalError = (message: string) =>
  ({
    data: message,
    status: 500,
    statusText: "Internal Server Error",
  } as FetchServerResponse<string>);
