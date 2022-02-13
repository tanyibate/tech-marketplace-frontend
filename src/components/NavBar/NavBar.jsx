import React, { useEffect, useState, useRef } from "react";
import hamburgerIcon from "../../assets/icons/icon-hamburger.svg";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/icons/icon-cart.svg";
import styles from "./navbar-styles.module.scss";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames";

export default function NavBar() {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const { pathname } = useLocation();
  const titleHeaderPages = ["/headphones", "/speakers", "/earphones"];
  const ref = useRef(null);

  useEffect(() => {
    return history.listen((location) => {
      window.scrollTo(0, 0);
      console.log(`You changed the page to: ${location.pathname}`);
    });
  }, [history]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.pageYOffset);
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  function handleClick(location) {
    if (location != "home") history.push("/" + location);
    else history.push("/");
  }
  const menuOptions = ["Home", "Headphones", "Speakers", "Earphones"];
  const classes = classNames({
    "bg-black": pathname !== "/" || offset > 90,
  });
  return (
    <div
      className={
        "bg-transparent fixed text-white w-full flex justify-center items-center z-30 flex-col " +
        classes
      }
    >
      <div className="w-full flex justify-between items-center desktop:max-w-content-desktop h-header p-6 tablet:p-10 border-b border-white border-opacity-10	 border-solid">
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

        <div className="flex items-center space-x-4">
          <img src={cart} alt="" className="cursor-pointer h-6" />
          <img
            src={user.profilePictureUrl}
            alt="profile picture"
            className="h-6 w-6 tablet:h-12 tablet:w-12 rounded-full"
          />
        </div>
      </div>
      {titleHeaderPages.includes(pathname) && (
        <div className="h-24 tablet:h-48 flex justify-center items-center">
          <h1 className="text-3xl font-bold uppercase">{pathname.slice(1)}</h1>
        </div>
      )}
    </div>
  );
}
