import { IProduct } from '../../../domain/usecases/product';
import { Product } from '../../../usecases/product/product';
import { makeAxiosHttpClient } from '../../http/AxiosHttpClient';

export const makeProduct = (): IProduct => {
  return new Product(makeAxiosHttpClient());
};
