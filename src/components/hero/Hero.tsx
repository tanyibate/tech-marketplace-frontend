import headerMobile from "../../assets/images/home/mobile/image-header.jpg";
import headerTablet from "../../assets/images/home/tablet/image-header.jpg";
import headerDesktop from "../../assets/images/home/desktop/image-hero.jpg";
import Button from "../button/Button";
import styles from "./hero.styles.module.scss";
import React, { useState, useEffect } from "react";
import arrowDown from "../../assets/icons/arrow-down.png";
import { useHistory } from "react-router-dom";

export default function Hero() {
  const [showArrow, setShowArrow] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`w-screen relative overflow-visible`}>
      <img
        src={headerMobile}
        alt=""
        className="tablet:hidden w-full max-h-screen"
      />
      <img
        src={headerTablet}
        alt=""
        className="hidden tablet:block desktop:hidden w-full max-h-screen"
      />
      <img
        src={headerDesktop}
        alt=""
        className="hidden desktop:block w-full max-h-screen"
      />
      <div className="w-full h-full absolute top-0 right-0 pt-header flex justify-center items-center desktop:max-w-content-desktop desktop:justify-start desktop:right-1/2 transform desktop:translate-x-1/2">
        <div className={styles.product_details}>
          <p className={styles.new_product}>NEW PRODUCT</p>
          <h1 className={styles.product_name}>XX99 MARK II HEADPHONES</h1>
          <p className={styles.product_description}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            backgroundColor="orange"
            fontColor="white"
            clickHandler={() =>
              history.push("/product/xx99-mark-two-headphones")
            }
          >
            See product
          </Button>
        </div>
      </div>
      {showArrow && (
        <img src={arrowDown} alt="arrow down" className={styles.arrow} />
      )}
    </div>
  );
}
