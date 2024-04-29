import { IHttpClient, ListResponse } from '../../domain/http/httpclient';
import {
  GetProductFilter,
  IProduct,
  ProductResponse,
} from '../../domain/usecases/product';

export class Product implements IProduct {
  constructor(
    private readonly httpClient: IHttpClient<ListResponse<ProductResponse>>,
  ) {}

  async getAll(
    params: GetProductFilter = {},
  ): Promise<ListResponse<ProductResponse>> {
    const response = await this.httpClient.request({
      url: '/products',
      method: 'get',
      params,
    });

    if (!response.body) throw new Error('Product not found');
    return response.body;
  }
}
