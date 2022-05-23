import React from "react";
import styles from "./layout-styles.module.scss";
import { useLocation } from "react-router-dom";
import classnames from "classnames";

export type LayoutProps = {
  children: React.ReactNode;
  login?: boolean;
};

export default function Layout({ children, login }: LayoutProps) {
  const { pathname } = useLocation();
  const titleHeaderPages = [
    "/category/headphones",
    "/category/speakers",
    "/category/earphones",
  ];
  const classes = classnames({
    [styles.gray_background]: pathname === "/login",
    "justify-center": pathname === "/login",
    //"pt-6 tablet:p-10": !titleHeaderPages.includes(pathname),
    [styles.regular_padding]:
      !titleHeaderPages.includes(pathname) && pathname !== "/" && !login,
    [styles.layout_padding]: titleHeaderPages.includes(pathname),
    [styles.container]: true,
    [styles.gray_background]: login,
    [styles.max_width]: login,
    [styles.login_padding]: login,
  });
  return (
    <section
      className={`px-6 tablet:px-10 relative max-w-content-desktop desktop:px-0 ${classes}`}
    >
      {children}
    </section>
  );
}
