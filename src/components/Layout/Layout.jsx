import React from "react";
import styles from "./layout-styles.module.scss";

export default function Layout(props) {
  return (
    <div className={styles.container + " p-6 tablet:p-10"}>
      {props.children}
    </div>
  );
}
