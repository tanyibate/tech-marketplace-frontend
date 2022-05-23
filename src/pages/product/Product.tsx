import React from "react";
import GoBack from "../../components/go-back/GoBack";
import Layout from "../../components/layout/Layout";
import styles from "./product-styles.module.scss";
import { useQuery } from "react-query";
import { useMediaQuery } from "react-responsive";
import { getProductBySlug, getOtherProducts } from "../../utils/productApi";
import OtherProduct from "../../components/other-product/OtherProduct";

export default function Product() {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });
  const getLastItem = (thePath) =>
    thePath.substring(thePath.lastIndexOf("/") + 1);
  const getProductBySlugWithParams = async () => {
    return await getProductBySlug(getLastItem(window.location.pathname));
  };

  const getOtherProductsWithParams = async () => {
    return await getOtherProducts(getLastItem(window.location.pathname));
  };

  const { data: productAPIResponse, status } = useQuery(
    "productpagedata",
    getProductBySlugWithParams
  );

  const { data: otherProductsAPIResponse, status: otherProductsStatus } =
    useQuery("otherproductspagedata", getOtherProductsWithParams);

  const getImageSize = (images) => {
    if (isLarge) return images.desktop;
    if (isTablet) return images.tablet;
    return images.mobile;
  };
  return (
    <Layout login={false}>
      <div className="w-full py-16">
        <GoBack />
        {status === "loading" && <div>Loading ... </div>}

        {status === "success" && (
          <>
            <div className="w-full tablet:flex tablet:items-center mt-12 mb-14">
              <img
                src={
                  process.env.REACT_APP_IMAGE_HOST_URL +
                  getImageSize(productAPIResponse.data.image)
                }
                alt=""
                className="w-full tablet:w-2/5 lg:w-1/2 rounded-xl mb-4 md:mb-0"
              />
              <div className="w-full tablet:w-3/5 lg:w-1/2 tablet:pl-24 lg:pl-28">
                {productAPIResponse.data.new && (
                  <p className={styles.new_product}>NEW PRODUCT</p>
                )}
                <h1 className={styles.title}>{productAPIResponse.data.name}</h1>
                <p className={styles.text}>
                  {productAPIResponse.data.description}
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row space-y-8 lg:space-y-0">
              <div className="w-full lg:w-2/3  lg:pr-20 space-y-4">
                <h3 className={styles.secondary_title}>FEATURES</h3>
                <p className={styles.text}>
                  {productAPIResponse.data.features}
                </p>
              </div>
              <div className="w-full lg:w-1/3 space-y-4">
                <h3 className={styles.secondary_title}>IN THE BOX</h3>
                {productAPIResponse.data.accessories.map((accessory) => {
                  return (
                    <div className={styles.accessory} key={accessory.item}>
                      <span
                        className={styles.quantity}
                      >{`${accessory.quantity}x`}</span>
                      <span className={styles.item}>{accessory.item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.image_grid}>
              <div>
                <img
                  src={
                    process.env.REACT_APP_IMAGE_HOST_URL +
                    getImageSize(productAPIResponse.data.gallery[0])
                  }
                  alt=""
                />
              </div>
              <div>
                <img
                  src={
                    process.env.REACT_APP_IMAGE_HOST_URL +
                    getImageSize(productAPIResponse.data.gallery[1])
                  }
                  alt=""
                />
              </div>
              <div>
                <img
                  src={
                    process.env.REACT_APP_IMAGE_HOST_URL +
                    getImageSize(productAPIResponse.data.gallery[2])
                  }
                  alt=""
                />
              </div>
            </div>
          </>
        )}
        {otherProductsStatus === "success" && (
          <>
            <div>
              <div className="w-full flex justify-center mb-4">
                <h3 className={styles.secondary_title}>YOU MAY ALSO LIKE</h3>
              </div>
              <div className={styles.other_products}>
                {otherProductsAPIResponse.data.map((product) => (
                  <div key={product.name}>
                    <OtherProduct
                      {...{
                        slug: product.slug,
                        name: product.name,
                        image:
                          process.env.REACT_APP_IMAGE_HOST_URL +
                          getImageSize(product.otherImage),
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
