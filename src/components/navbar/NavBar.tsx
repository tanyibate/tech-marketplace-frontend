import React, { useEffect, useState } from "react";
import hamburgerIcon from "../../assets/icons/icon-hamburger.svg";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/icons/icon-cart.svg";
import styles from "./navbar-styles.module.scss";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames";
import BurgerMenu from "../burger-menu/BurgerMenu";
import { useQueryClient } from "react-query";
import { RootState } from "../../store/reducers";

export default function NavBar() {
  const user = useSelector((state: RootState) => state.user);
  const history = useHistory();
  const { pathname } = useLocation();
  const titleHeaderPages = [
    "/category/headphones",
    "/category/speakers",
    "/category/earphones",
  ];
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  const [menuClosed, setMenuClosed] = useState(false);

  const queryClient = useQueryClient();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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

  const disableBurgerMenu = () => setBurgerMenuActive(false);

  const handleClick = (location) => {
    if (location === "home") history.push("/");
    else {
      history.push(`/category/${location}`);
      queryClient.invalidateQueries("categoryproductdata");
    }
  };
  const handleBurgerClick = () => {
    if (!burgerMenuActive) setBurgerMenuActive(true);
    else {
      setMenuClosed(true);
    }
  };

  const menuOptions = ["Home", "Headphones", "Speakers", "Earphones"];

  const classes = classNames({
    "bg-black": pathname !== "/" || offset > 90,
  });

  return (
    <>
      <header
        className={
          "bg-transparent fixed text-white w-full flex justify-center items-center z-30 flex-col " +
          classes
        }
      >
        <nav className="w-full flex justify-between items-center desktop:max-w-content-desktop h-header p-6 tablet:p-10 border-b border-white border-opacity-10	 border-solid">
          <img
            src={hamburgerIcon}
            alt=""
            className="cursor-pointer desktop:hidden"
            onClick={handleBurgerClick}
          />
          <img
            src={logo}
            alt=""
            className="cursor-pointer"
            onClick={() => history.push("/")}
          />

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
              alt="profile"
              className="h-6 w-6 rounded-full"
            />
          </div>
        </nav>
        {titleHeaderPages.includes(pathname) && !burgerMenuActive && (
          <div className="h-24  flex justify-center items-center">
            <h1 className="text-3xl font-bold uppercase">
              {pathname.slice(10)}
            </h1>
          </div>
        )}
      </header>
      {burgerMenuActive && (
        <BurgerMenu
          {...{
            disable: disableBurgerMenu,
            menuClosed: menuClosed,
            setMenuClosed,
          }}
        />
      )}
    </>
  );
}
