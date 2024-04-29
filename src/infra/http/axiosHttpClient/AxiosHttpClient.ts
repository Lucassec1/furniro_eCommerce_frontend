import {
  HttpRequest,
  HttpResponse,
  IHttpClient,
} from '../../../domain/http/httpclient';

import axios, { AxiosResponse } from 'axios';

export class AxiosHttpClient implements IHttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
        params: data.params,
        baseURL: 'http://localhost:3000',
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
