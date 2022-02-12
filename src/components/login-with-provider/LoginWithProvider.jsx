import React from "react";

export default function LoginWithProvider({
  provider,
  providerImage,
  providerFunction,
  backgroundColourHexCode,
  fontColor,
}) {
  return (
    <button
      className={`appearance-none outline-none w-full h-16 rounded-md flex items-center shadow px-6 font-semibold text-xl`}
      style={{
        backgroundColor: backgroundColourHexCode,
        color: fontColor,
      }}
      onClick={providerFunction}
      type="button"
    >
      <img src={providerImage} alt="providerImage" className="pr-6 h-6" />
      <span>{`Continue with ${provider}`}</span>
    </button>
  );
}
