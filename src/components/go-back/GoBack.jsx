import React from "react";
import styles from "./goback-styles.module.scss";
import { useHistory } from "react-router-dom";

export default function GoBack() {
  const history = useHistory();
  const goBack = () => history.goBack();
  return (
    <p className={styles.back} onClick={goBack}>
      Go Back
    </p>
  );
}
