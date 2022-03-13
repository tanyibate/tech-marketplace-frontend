import instance from "./instance";

export const getProductsByCategory = async (category) => {
  const result = await instance.get(
    `${process.env.REACT_APP_BACKEND_API_URL}/products/category/${category}`
  );
  return result;
};

export const getProductBySlug = async (slug) => {
  const result = await instance.get(
    `${process.env.REACT_APP_BACKEND_API_URL}/products/${slug}`
  );
  return result;
};
