import apiInstance from '../services/api';

export async function getAllProducts() {
  const data = await apiInstance.get('/products');
  console.log(data);
}
