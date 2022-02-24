import React from "react";
import Hero from "../../components/hero/Hero";
import Layout from "../../components/Layout/Layout";
import earphonesCategoryImage from "../../assets/images/image-earphones.png";
import headphonesCategoryImage from "../../assets/images/image-headphones.png";
import speakersCategoryImage from "../../assets/images/image-speakers.png";
import CategorySelector from "../../components/category-selector/CategorySelector";
import zx9SpeakersHomeDesktop from "../../assets/images/home/desktop/image-speaker-zx9.png";
import styles from "./home-styles.module.scss";
import HomePageTopProduct from "../../components/home-page-top-product/HomePageTopProduct";

export default function Home() {
  const categories = [
    {
      name: "Headphones",
      image: headphonesCategoryImage,
    },
    {
      name: "Speakers",
      image: speakersCategoryImage,
    },
    {
      name: "Earphones",
      image: earphonesCategoryImage,
    },
  ];
  return (
    <Layout>
      <Hero />
      <div className="grid grid-cols-1 gap-y-16 w-full tablet:grid-cols-3 gap-x-10">
        {categories.map(({ name, image }) => (
          <CategorySelector image={image} name={name} />
        ))}
      </div>
      <HomePageTopProduct
        {...{
          image: zx9SpeakersHomeDesktop,
          name: "ZX9 SPEAKER",
          description:
            "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
        }}
      />
    </Layout>
  );
}
