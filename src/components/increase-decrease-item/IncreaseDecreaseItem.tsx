import React from "react";
import styles from "./styles.module.scss";

export default function IncreaseDecreaseItem({
  number,
  increaseNumber,
  decreaseNumber,
}) {
  return (
    <div className="flex px-6 w-32 items-center justify-between bg-white-smoke">
      <span className={styles.action}>-</span>
      <span className={styles.text}>{number}</span>
      <span className={styles.action}>+</span>
    </div>
  );
}
