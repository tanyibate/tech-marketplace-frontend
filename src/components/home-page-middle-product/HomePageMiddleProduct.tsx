import React from "react";
import Button from "../button/Button";
import styles from "./middle-product-styles.module.scss";
import { useHistory } from "react-router-dom";

export default function HomePageMiddleProduct({ image, name, url }) {
  const history = useHistory();
  return (
    <div
      className={
        styles.container + " rounded-lg overflow-hidden cursor-pointer"
      }
      onClick={() => history.push(url)}
    >
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
