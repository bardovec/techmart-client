import { $host } from '../api';

export default class ProductService {
  static getAll = async () => {
    const { data } = await $host.get('/products');
    return data;
  };
  static createProduct = async (payload) => {
    const { data } = await $host.post('/products', payload)

    return data;
  }

  static getById = async (id) => {
    const { data } = await $host.get(`/products/${id}`);

    return data;
  };
}
