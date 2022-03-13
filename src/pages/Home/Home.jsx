import React from "react";
import Hero from "../../components/hero/Hero";
import Layout from "../../components/Layout/Layout";
import earphonesCategoryImage from "../../assets/images/image-earphones.png";
import headphonesCategoryImage from "../../assets/images/image-headphones.png";
import speakersCategoryImage from "../../assets/images/image-speakers.png";
import CategorySelector from "../../components/category-selector/CategorySelector";
import zx9SpeakersHomeDesktop from "../../assets/images/home/desktop/image-speaker-zx9.png";
import zx7SpeakerHomeDesktop from "../../assets/images/home/desktop/image-speaker-zx7.jpg";
import zx7SpeakerHomeTablet from "../../assets/images/home/tablet/image-speaker-zx7.jpg";
import zx7SpeakerHomeMobile from "../../assets/images/home/mobile/image-speaker-zx7.jpg";
import yx1EarphonesHomeDesktop from "../../assets/images/home/desktop/image-earphones-yx1.jpg";
import yx1EarphonesHomeTablet from "../../assets/images/home/tablet/image-earphones-yx1.jpg";
import yx1EarphonesHomeMobile from "../../assets/images/home/mobile/image-earphones-yx1.jpg";

import { useMediaQuery } from "react-responsive";

import styles from "./home-styles.module.scss";
import HomePageTopProduct from "../../components/home-page-top-product/HomePageTopProduct";
import HomePageMiddleProduct from "../../components/home-page-middle-product/HomePageMiddleProduct";
import HomePageBottomProduct from "../../components/home-page-bottom-product/HomePageBottomProduct";

export default function Home() {
  const categories = [
    {
      name: "headphones",
      image: headphonesCategoryImage,
    },
    {
      name: "speakers",
      image: speakersCategoryImage,
    },
    {
      name: "earphones",
      image: earphonesCategoryImage,
    },
  ];
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });

  const getMiddleProductImage = () => {
    if (isDesktop) return zx7SpeakerHomeDesktop;
    if (isTablet) return zx7SpeakerHomeTablet;
    return zx7SpeakerHomeMobile;
  };
  const getBottomProductImage = () => {
    if (isLarge) return yx1EarphonesHomeDesktop;
    if (isTablet) return yx1EarphonesHomeTablet;
    return yx1EarphonesHomeMobile;
  };
  return (
    <Layout>
      <Hero />
      <div className="grid grid-cols-1 gap-y-16 w-full tablet:grid-cols-3 gap-x-10 mt-20 desktop:mt-24 mb-24 desktop:mb-12">
        {categories.map(({ name, image }) => (
          <CategorySelector image={image} name={name} key={name} />
        ))}
      </div>
      <div className="w-full space-y-10 mb-12">
        <HomePageTopProduct
          {...{
            image: zx9SpeakersHomeDesktop,
            name: "ZX9 SPEAKER",
            description:
              "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
          }}
        />
        <HomePageMiddleProduct
          {...{ image: getMiddleProductImage(), name: "ZX7 SPEAKER" }}
        />
        <HomePageBottomProduct
          {...{ image: getBottomProductImage(), name: "YX1 EARPHONES" }}
        />
      </div>
    </Layout>
  );
}
