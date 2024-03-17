import axios from "axios";
import { IProduct } from "../types/types";

export const fetchProducts = async (): Promise<IProduct[]> => {
  const res = await axios.get<IProduct[]>('https://fakestoreapi.com/products?fields=id,title,price,description,image&limit=5');
  const products = res.data;
  products.forEach(p => {
    p.price = Math.ceil(p.price) 
    p.count = Math.floor(Math.random() * 10) + 1
  });
  return res.data
}