import React from "react";

export type ButtonProps = {
  type?: "button" | "submit" | "reset";
  clickHandler?: () => void;
  fontColor: string;
  backgroundColor: string;
  children: React.ReactNode;
};

export default function Button({
  type,
  clickHandler,
  fontColor,
  backgroundColor,
  children,
}: ButtonProps) {
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
