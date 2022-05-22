import React from "react";
import Button from "../button/Button";
import styles from "./bottom-product-styles.module.scss";
import { useHistory } from "react-router-dom";

export default function HomePageBottomProduct({ image, name, url }) {
  const history = useHistory();
  return (
    <div
      className="grid grid-rows-2 grid-cols-1 auto-cols-fr auto-rows-fr sm:grid-cols-2 sm:grid-rows-1 sm:gap-x-4 gap-y-6 cursor-pointer"
      onClick={() => history.push(url)}
    >
      <div className="flex-1">
        <img src={image} alt={name} className="w-full rounded-lg" />
      </div>
      <div className="bg-white-smoke rounded-lg  box-border flex items-center flex-1 relative justify-center">
        <div className="gap-y-8 absolute  sm:left-8 tablet:left-16 flex flex-col">
          <h3 className={styles.product_title}>{name}</h3>
          <Button fontColor={"white"} backgroundColor={"black"}>
            SEE PRODUCT
          </Button>
        </div>
      </div>
    </div>
  );
}
