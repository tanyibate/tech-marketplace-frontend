import React from "react";
import styles from "./layout-styles.module.scss";
import { useLocation } from "react-router-dom";
import classnames from "classnames";

export default function Layout(props) {
  const { pathname } = useLocation();
  const grayBackground = classnames({
    [styles.gray_background]: pathname === "/login",
    ["justify-center"]: pathname === "/login",
  });
  return (
    <div
      className={`${styles.container}  ${grayBackground} pt-6 px-6 tablet:p-10 relative`}
    >
      {props.children}
    </div>
  );
}
