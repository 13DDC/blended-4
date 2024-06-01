import apiInstance from '../services/api';

export async function getAllProducts() {
  const result = await apiInstance.get('/products');
  return result.data;
}
