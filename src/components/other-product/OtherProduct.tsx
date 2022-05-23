import React from "react";
import Button from "../button/Button";
import styles from "./other-product-styles.module.scss";
import { useHistory } from "react-router-dom";
import { useQueryClient } from "react-query";

export type OtherProductProps = {
  image: string;
  slug: string;
  name: string;
};

export default function OtherProduct({ image, slug, name }: OtherProductProps) {
  const history = useHistory();
  const queryClient = useQueryClient();
  const goToProduct = () => {
    history.push(`/product/${slug}`);
    queryClient.invalidateQueries("productpagedata");
    queryClient.invalidateQueries("otherproductspagedata");
  };

  const simplifyName = (name: string) => {
    if (name.includes("Headphones")) return name.split("Headphones")[0];
    return name;
  };
  return (
    <div className="w-full space-y-4 flex flex-col items-center">
      <img src={image} alt={name} />
      <h3 className={styles.secondary_title}>{simplifyName(name)}</h3>
      <Button
        {...{
          fontColor: "white",
          backgroundColor: "orange",
          clickHandler: goToProduct,
        }}
      >
        SEE PRODUCT
      </Button>
    </div>
  );
}
