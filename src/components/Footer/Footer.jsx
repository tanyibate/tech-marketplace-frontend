import React from "react";
import logo from "../../assets/images/logo.svg";
import instagramIcon from "../../assets/icons/icon-instagram.svg";
import facebookIcon from "../../assets/icons/icon-facebook.svg";
import twitterIcon from "../../assets/icons/icon-twitter.svg";
import styles from "./footer-styles.module.scss";
import { useHistory } from "react-router-dom";

export default function Footer() {
  const menuOptions = ["Home", "Headphones", "Speakers", "Earphones"];
  const history = useHistory();
  function handleClick(location) {
    if (location != "home") history.push("/" + location);
    else history.push("/");
  }
  return (
    <footer className="w-full bg-black pt-12 pb-9 px-6 tablet:px-8 flex flex-col items-center ">
      <div></div>
      <div className="w-full flex-col flex-wrap items-center desktop:max-w-content-desktop">
        <div className="flex flex-wrap flex-col desktop:flex-row items-center tablet:items-start desktop:justify-between">
          <img src={logo} alt="" className="mb-8" />
          <div
            className="flex items-center flex-col tablet:flex-row mb-8 tablet:space-x-4"
            style={{ maxWidth: "429px" }}
          >
            {menuOptions.map((el) => {
              return (
                <p
                  className={styles.footer_item}
                  key={el + "Link"}
                  onClick={() => {
                    handleClick(el.toLowerCase());
                  }}
                >
                  {el}
                </p>
              );
            })}
          </div>
        </div>
        <div className="desktop:flex items-end justify-between">
          <p className={styles.footer_text + " mb-8 desktop:max-w-lg"}>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="space-x-3 hidden desktop:flex mb-8">
            <img src={facebookIcon} alt="facebook icon" />
            <img src={twitterIcon} alt="twitter icon" />
            <img src={instagramIcon} alt="instagram icon" />
          </div>
        </div>
        <div className="flex flex-col items-center flex-wrap tablet:flex-row tablet:justify-between">
          <p className={styles.footer_copyright + " mb-8"}>
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex space-x-3 desktop:hidden">
            <img src={facebookIcon} alt="facebook icon" />
            <img src={twitterIcon} alt="twitter icon" />
            <img src={instagramIcon} alt="instagram icon" />
          </div>
        </div>
      </div>
    </footer>
  );
}
