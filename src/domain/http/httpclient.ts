export interface HttpRequest {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
  params?: any;
}

export interface ListResponse<T = any> {
  data: T[];
  meta: MetaResponse;
}

export interface MetaResponse {
  current_page: number;
  per_page: number;
  last_page: number;
  total: number;
}

export interface IHttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>;
}

export type SortDirection = 'asc' | 'desc';

export type HttpMethod = 'post' | 'get' | 'put' | 'delete';

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

export interface HttpResponse<T = any> {
  statusCode: HttpStatusCode;
  body?: T;
}

export interface SearchParams {
  page?: number;
  per_page?: number;
  sort?: string;
  sort_dir?: string;
  filter?: object;
}
