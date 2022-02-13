import React from "react";
import { useMediaQuery } from "react-responsive";

export default function CategorySelector({
  mobileImage,
  tabletImage,
  desktopImage,
  categoryName,
}) {
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  const returnImage = () => {
    if (isDesktop) return desktopImage;
    else if (isTablet) return tabletImage;
    return mobileImage;
  };
  return (
    <div className="rounded bg-white-smoke w-full h-40 desktop:h-52 relative">
      <img
        src={returnImage()}
        alt="category image"
        className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2"
      />
      <div></div>
    </div>
  );
}
