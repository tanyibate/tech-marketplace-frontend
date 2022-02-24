import React from "react";
import Button from "../button/Button";
import styles from "./middle-product-styles.module.scss";

export default function HomePageMiddleProduct({ image, name, url }) {
  return (
    <div className={styles.container + " rounded-lg overflow-hidden"}>
      <img src={image} alt={name} />

      <div className={styles.content + " flex flex-col gap-y-6"}>
        <h3>{name}</h3>
        <Button {...{ backgroundColor: "black", fontColor: "white" }}>
          SEE PRODUCT
        </Button>
      </div>
    </div>
  );
}
