import React, { useState } from "react";
import styles from "./burger-menu-styles.module.scss";
import classNames from "classnames";

export default function BurgerMenu({ close }) {
  const menuOptions = ["Home", "Headphones", "Speakers", "Earphones"];
  const [menuClosed, setMenuClosed] = useState(false);
  const classes = classNames({
    [styles.pulloutmenu]: menuClosed,
    [styles.menu]: true,
  });

  const closeMenu = () => {
    if (menuClosed) close();
  };

  return (
    <aside className={classes} onAnimationEnd={closeMenu}>
      {menuOptions.map((option) => (
        <button
          className="text-white hover:text-orange focus:text-orange font-bold cursor-pointer"
          key={`burger_menu_${option}`}
        >
          {option}
        </button>
      ))}
      <span
        className="absolute right-2 top-2 cursor-pointer"
        onClick={() => setMenuClosed(true)}
      >
        X
      </span>
    </aside>
  );
}
