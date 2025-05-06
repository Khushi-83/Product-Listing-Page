
// lib/api.ts
import axios from 'axios';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export async function fetchProducts(): Promise<Product[]> {
  const res = await axios.get<Product[]>('https://fakestoreapi.com/products');
  return res.data;
}
