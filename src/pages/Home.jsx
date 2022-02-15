import React from "react";
import Hero from "../components/hero/Hero";
import Layout from "../components/Layout/Layout";
import earphonesCategoryImage from "../assets/images/image-earphones.png";
import headphonesCategoryImage from "../assets/images/image-headphones.png";
import speakersCategoryImage from "../assets/images/image-speakers.png";
import CategorySelector from "../components/category-selector/CategorySelector";

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
    </Layout>
  );
}
