import React from "react";
import { useMediaQuery } from "react-responsive";
import forwardChevron from "../../assets/icons/forward-chevron.png";

export default function CategorySelector({ image, name }) {
  return (
    <div className="rounded-lg bg-white-smoke w-full h-40 desktop:h-48 relative cursor-pointer">
      <img
        src={image}
        alt="category image"
        className="absolute top-0 right-1/2 transform translate-x-1/2  h-32 desktop:h-44 -translate-y-1/3"
      />
      <div className="absolute bottom-6 right-1/2 transform translate-x-1/2 flex flex-col items-center">
        <h5 className="font-bold text-lg mb-4">{name}</h5>
        <div className="flex items-center">
          <p className="text-xs mr-2 font-bold hover:text-orange opacity-50">
            SHOP
          </p>
          <img src={forwardChevron} alt="forward chevron" />
        </div>
      </div>
    </div>
  );
}