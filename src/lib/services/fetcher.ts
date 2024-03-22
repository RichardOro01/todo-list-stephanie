import { FetchServerResponse } from "./types";

export const fetcher = async <T = any>(method: Function) => {
  const res = await method();
  return handleResponse<T>(res);
};

const handleResponse = <T>(res: FetchServerResponse<T>) => {
  if (res) {
    if (res.status >= 400) {
      const errorData = {
        status: res.status,
        statusText: res.statusText,
        detail: res.data,
      };

      return Promise.reject(errorData);
    }
    return Promise.resolve(res);
  }
  const errorData = {
    status: 0,
    statusText: "",
    detail: "No response",
  };
  return Promise.reject(errorData);
};
