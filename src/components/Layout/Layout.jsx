import React from "react";
import styles from "./layout-styles.module.scss";
import { useLocation } from "react-router-dom";
import classnames from "classnames";

export default function Layout(props) {
  const { pathname } = useLocation();
  const titleHeaderPages = ["/headphones", "/speakers", "/earphones"];
  const classes = classnames({
    [styles.gray_background]: pathname === "/login",
    "justify-center": pathname === "/login",
    //"pt-6 tablet:p-10": !titleHeaderPages.includes(pathname),
    [styles.regular_padding]: !titleHeaderPages.includes(pathname) && pathname !== '/',
    [styles.layout_padding]: titleHeaderPages.includes(pathname),
  });
  return (
    <section
      className={`${styles.container}  ${classes} px-6 tablet:px-10 relative max-w-content-desktop desktop:px-0`}
    >
      {props.children}
    </section>
  );
}
