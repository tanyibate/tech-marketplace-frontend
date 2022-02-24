import React from "react";
import Button from "../button/Button";
import styles from "./top-product-styles.module.scss";
import rings from "../../assets/images/home/desktop/pattern-circles.svg";

export default function HomePageTopProduct({ image, name, url, description }) {
  return (
    <div
      className={`bg-orange ${styles.top_image_container} rounded-lg relative overflow-hidden`}
    >
      <div className={styles.top_image_container_content}>
        <h1>{name}</h1>
        <p>{description}</p>
        <Button backgroundColor="black" fontColor="white">
          SEE PRODUCT
        </Button>
      </div>
      <img src={rings} alt="rings" className={styles.rings} />
      <img src={image} alt={name} className={styles.product_image} />
    </div>
  );
}
