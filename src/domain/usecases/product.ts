import { ListResponse, SearchParams } from '../http/httpclient';

export type GetProductFilter = SearchParams;

export interface IProduct {
  getAll: (params?: GetProductFilter) => Promise<ListResponse<ProductResponse>>;
}

export interface ProductResponse {
  product_id: string;
  name: string;
  sku: string;
  category_id: string;
  description: string;
  large_description: string;
  price: number;
  discount_price?: number | null;
  discount_percent?: number | null;
  image_link?: string | null;
  other_images_link?: string[] | null;
  created_at: Date;
  updated_at: Date;
}
