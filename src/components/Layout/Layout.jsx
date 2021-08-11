import React from "react";
import styles from "./layout-styles.module.scss";

export default function Layout(props) {
  return <div className={styles.container}>{props.children}</div>;
}
