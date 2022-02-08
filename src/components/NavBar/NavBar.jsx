import React, { useEffect } from "react";
import hamburgerIcon from "../../assets/icons/icon-hamburger.svg";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/icons/icon-cart.svg";
import styles from "./navbar-styles.module.scss";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const history = useHistory();
  useEffect(() => {
    return history.listen((location) => {
      window.scrollTo(0, 0);
      console.log(`You changed the page to: ${location.pathname}`);
    });
  }, [history]);
  function handleClick(location) {
    if (location != "home") history.push("/" + location);
    else history.push("/");
  }
  const menuOptions = ["Home", "Headphones", "Speakers", "Earphones"];
  return (
    <div className="h-header bg-black fixed text-white w-full flex justify-center items-center p-6 tablet:p-10">
      <div className="w-full flex justify-between items-center desktop:max-w-content-desktop">
        <img
          src={hamburgerIcon}
          alt=""
          className="cursor-pointer desktop:hidden"
        />
        <img src={logo} alt="" className="cursor-pointer" />
        <div
          className="hidden justify-between desktop:flex absolute right-1/2 transform translate-x-1/2"
          style={{
            minWidth: "429px",
          }}
        >
          {menuOptions.map((el) => {
            return (
              <p
                className={styles.navbar_item}
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
        <img src={cart} alt="" className="cursor-pointer" />
      </div>
    </div>
  );
}
