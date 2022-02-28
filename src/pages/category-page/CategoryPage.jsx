import React from "react";
import Layout from "../../components/Layout/Layout";
import xx99MarkIIHeadphonesMobileImage from "../../assets/images/category-headphones/mobile/image-xx99-mark-two.jpg";
import xx99MarkIIHeadphonesTabletImage from "../../assets/images/category-headphones/tablet/image-xx99-mark-two.jpg";
import xx99MarkIIHeadphonesDesktopImage from "../../assets/images/category-headphones/desktop/image-xx99-mark-two.jpg";
import xx99MarkIHeadphonesMobileImage from "../../assets/images/category-headphones/mobile/image-xx99-mark-one.jpg";
import xx99MarkIHeadphonesTabletImage from "../../assets/images/category-headphones/tablet/image-xx99-mark-one.jpg";
import xx99MarkIHeadphonesDesktopImage from "../../assets/images/category-headphones/desktop/image-xx99-mark-one.jpg";
import xx59HeadphonesMobileImage from "../../assets/images/category-headphones/mobile/image-xx59.jpg";
import xx59HeadphonesTabletImage from "../../assets/images/category-headphones/tablet/image-xx59.jpg";
import xx59HeadphonesDesktopImage from "../../assets/images/category-headphones/desktop/image-xx59.jpg";
import { useMediaQuery } from "react-responsive";
import CategoryPageProduct from "../../components/category-page-product/CategoryPageProduct";

export default function CategoryPage() {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });
  let products = [
    {
      name: "XX99 Mark II Headphones",
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      mobileImage: xx99MarkIIHeadphonesMobileImage,
      tabletImage: xx99MarkIIHeadphonesTabletImage,
      desktopImage: xx99MarkIIHeadphonesDesktopImage,
      newProduct: true,
    },
    {
      name: "XX99 Mark I Headphones",
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      mobileImage: xx99MarkIHeadphonesMobileImage,
      tabletImage: xx99MarkIHeadphonesTabletImage,
      desktopImage: xx99MarkIHeadphonesDesktopImage,
      newProduct: false,
    },
    {
      name: "XX59 Headphones",
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      mobileImage: xx59HeadphonesMobileImage,
      tabletImage: xx59HeadphonesTabletImage,
      desktopImage: xx59HeadphonesDesktopImage,
      newProduct: false,
    },
  ];

  products = products.map((el) => {
    el.image = el.mobileImage;
    if (isTablet) el.image = el.tabletImage;
    if (isLarge) el.image = el.desktopImage;
    return el;
  });
  return (
    <Layout>
      <div className="w-full space-y-32 py-16">
        {products.map((product, index) => {
          const reverse = (index + 1) % 2 === 0 && isLarge ? true : false;
          return (
            <CategoryPageProduct
              {...{
                image: product.image,
                description: product.description,
                name: product.name,
                newProduct: product.newProduct,
                reverse,
              }}
            />
          );
        })}
      </div>
    </Layout>
  );
}
