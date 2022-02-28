import React from "react";

export default function Button({
  title,
  type,
  clickHandler,
  fontColor,
  backgroundColor,
  children,
}) {
  return (
    <button
      type={type}
      className={`bg-${backgroundColor} text-${fontColor}  uppercase px-7 py-3 font-bold text-sm tracking-widest w-min max-h-11 whitespace-nowrap`}
      style={{
        lineClamp: "1",
      }}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
