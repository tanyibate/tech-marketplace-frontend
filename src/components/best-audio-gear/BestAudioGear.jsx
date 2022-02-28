import React, { useState, useEffect } from "react";
import bestGearImageDesktop from "../../assets/images/desktop/image-best-gear-desktop.jpg";
import bestGearImageTablet from "../../assets/images/tablet/image-best-gear-tablet.jpg";
import bestGearImageMobile from "../../assets/images/mobile/image-best-gear-mobile.jpg";
import styles from "./bestaudiogear-styles.module.scss";
import { useLocation } from "react-router-dom";

export default function BestAudioGear() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/login" && (
        <div className="lg:flex flex-row-reverse px-6 tablet:px-10 desktop:px-0 mb-40 xs:max-w-content-lg items-center lg:max-w-content-desktop justify-between">
          <div className="lg:w-2/5 w-full">
            <img
              src={bestGearImageDesktop}
              alt=""
              className="hidden lg:block w-full rounded-md"
            />
            <img
              src={bestGearImageTablet}
              className={styles.tablet_image}
              alt=""
            />
            <img
              src={bestGearImageMobile}
              className="xs:hidden w-full rounded-md mb-10"
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pr-28">
            <p className={styles.desc_header + " mb-10 xs:hidden lg:block"}>
              BRINGING YOU THE <br></br>
              <span>BEST</span> AUDIO GEAR
            </p>
            <p
              className={
                styles.desc_header + " mb-10 hidden xs:block lg:hidden"
              }
            >
              BRINGING YOU THE <span>BEST</span>
              <br></br>AUDIO GEAR
            </p>
            <p className={styles.desc_text}>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
