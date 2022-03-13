import React from "react";
import styles from "./category-page-product-styles.module.scss";
import Button from "../button/Button";

export default function CategoryPageProduct({
  image,
  name,
  newProduct,
  description,
  url,
  reverse,
}) {
  const imageSection = (
    <div className="flex-1" key="image section">
      <img src={image} alt={name} className="w-full rounded-lg" />
    </div>
  );
  const productDetails = (
    <div
      className="flex flex-col justify-center items-center lg:items-start flex-1"
      key="product details"
    >
      <div
        className={`flex flex-col justify-center items-center lg:items-start w-full ${
          reverse ? "lg:pr-16" : "lg:pl-16"
        }`}
      >
        {newProduct && (
          <p className={styles.new_product + " mb-4 text-orange"}>
            new product
          </p>
        )}
        <h2 className={styles.title + " mb-5"}>{name}</h2>
        <p className={styles.description + " mb-5"}>{description}</p>
        <Button backgroundColor={"orange"} fontColor={"white"}>
          SEE PRODUCT
        </Button>
      </div>
    </div>
  );
  let items = [imageSection, productDetails];
  items = reverse ? items.reverse() : items;

  return (
    <div className="flex flex-col lg:flex-row w-full space-y-8 lg:space-y-0">
      {items.map((el) => el)}
    </div>
  );
}
