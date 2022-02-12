import headerMobile from "../../assets/images/home/mobile/image-header.jpg";
import headerTablet from "../../assets/images/home/tablet/image-header.jpg";
import headerDesktop from "../../assets/images/home/desktop/image-hero.jpg";
import styles from "./hero.styles.module.scss";
import React from "react";

export default function Hero() {
  return (
    <div className={`w-screen h-full ${styles.negative_margin}`}>
      <img src={headerMobile} alt="" className="tablet:hidden w-full" />
      <img
        src={headerTablet}
        alt=""
        className="hidden tablet:block desktop:hidden w-full"
      />
      <img src={headerDesktop} alt="" className="hidden desktop:block w-full" />
    </div>
  );
}
