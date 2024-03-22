export interface FetchServerResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

export interface FetchError<T> {
  detail: T;
  status: number;
  statusText: string;
}
