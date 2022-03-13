import React from "react";
import GoBack from "../../components/go-back/GoBack";
import Layout from "../../components/Layout/Layout";
import { useQuery } from "react-query";
import { useMediaQuery } from "react-responsive";
import { getProductBySlug } from "../../utils/productApi";

export default function Product() {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });
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
  cons;
  const getImageSize = (images) => {
    if (isLarge) return images.desktop;
    if (isTablet) return images.tablet;
    return images.mobile;
  };
  return (
    <Layout>
      <div className="w-full space-y-32 py-16">
        <GoBack />
        <div className="w-full">
          <img src="" alt="" />
        </div>
      </div>
    </Layout>
  );
}
