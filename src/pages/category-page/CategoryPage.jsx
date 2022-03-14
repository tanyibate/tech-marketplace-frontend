import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useMediaQuery } from "react-responsive";
import CategoryPageProduct from "../../components/category-page-product/CategoryPageProduct";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getProductsByCategory } from "../../utils/productApi";

export default function CategoryPage() {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });
  const params = useParams();
  const getLastItem = (thePath) =>
    thePath.substring(thePath.lastIndexOf("/") + 1);
  const getProductsByCategoryWithParams = async () => {
    return await getProductsByCategory(getLastItem(window.location.pathname));
  };

  // Queries
  const { data: productData, status } = useQuery(
    "categoryproductdata",
    getProductsByCategoryWithParams
  );
  const getImageSize = (images) => {
    if (isLarge) return images.desktop;
    if (isTablet) return images.tablet;
    return images.mobile;
  };
  return (
    <Layout>
      <div className="w-full space-y-32 py-16" key={params.category}>
        {status === "loading" && <div>Loading ... </div>}
        {status === "success" &&
          productData.data.map((product, index) => {
            const reverse = (index + 1) % 2 === 0 && isLarge ? true : false;
            return (
              <CategoryPageProduct
                {...{
                  image: `${process.env.REACT_APP_IMAGE_HOST_URL}${getImageSize(
                    product.categoryImage
                  )}`,
                  description: product.description,
                  name: product.name,
                  newProduct: product.new,
                  reverse,
                  key: product.name,
                  slug: product.slug,
                }}
              />
            );
          })}
      </div>
    </Layout>
  );
}
