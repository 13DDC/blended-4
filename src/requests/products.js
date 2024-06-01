import apiInstance from '../services/api';

export async function getAllProducts() {
  const result = await apiInstance.get('/products');
  return result.data;
}

export const addProducts = async (data) => {
  const result = await apiInstance.post('/products/add', data)
  return result.data
}
