import React from "react";

export default function Button({
  title,
  type,
  clickHandler,
  fontColor,
  backgroundColor,
}) {
  return (
    <button
      type={type}
      className="bg-orange text-white text uppercase px-7 py-3 font-bold text-sm"
      onClick={clickHandler}
    >
      {title}
    </button>
  );
}
