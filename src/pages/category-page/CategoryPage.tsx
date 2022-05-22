import React from "react";
import Layout from "../../components/Layout/Layout";
import { useMediaQuery } from "react-responsive";
import CategoryPageProduct from "../../components/category-page-product/CategoryPageProduct";
import { useQuery } from "react-query";
import { getProductsByCategory } from "../../utils/productApi";
import CategorySelector from "../../components/category-selector/CategorySelector";
import categories from "../../utils/categories";

export default function CategoryPage() {
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
  const getImageSize = (images) => {
    if (isLarge) return images.desktop;
    if (isTablet) return images.tablet;
    return images.mobile;
  };
  return (
    <Layout>
      <div className="w-full space-y-32 py-16">
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
        <div className="grid grid-cols-1 gap-y-16 w-full tablet:grid-cols-3 gap-x-10  desktop:pt-24 mb-24 desktop:mb-12">
          {categories.map(({ name, image }) => (
            <CategorySelector image={image} name={name} key={name} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
