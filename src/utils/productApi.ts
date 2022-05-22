import instance from "./instance";
import { Product } from "../types/product";

export type GetProductResponse = {
  data: Product;
};

export type GetProductsResponse = {
  data: Product[];
};

export const getProductsByCategory = async (category) => {
  const result = await instance.get<Array<Product>>(
    `${process.env.REACT_APP_BACKEND_API_URL}/products/category/${category}`
  );
  return result;
};

export const getProductBySlug = async (slug) => {
  const result = await instance.get<Product>(
    `${process.env.REACT_APP_BACKEND_API_URL}/products/${slug}`
  );
  return result;
};
