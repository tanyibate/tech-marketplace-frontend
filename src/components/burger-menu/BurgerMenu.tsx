import React from "react";
import styles from "./burger-menu-styles.module.scss";
import classNames from "classnames";
import categories from "../../utils/categories";
import CategorySelector from "../category-selector/CategorySelector";

export default function BurgerMenu({ disable, menuClosed, setMenuClosed }) {
  const classes = classNames({
    [styles.mobile_menu]: true,
    [styles.slide_out]: !menuClosed,
    [styles.slide_in]: menuClosed,
  });

  const closeMenu = () => {
    if (menuClosed) {
      disable();
      setMenuClosed(false);
    }
  };

  return (
    <div className={styles.mobile_menu_container}>
      <div
        className={`${classes} grid grid-cols-1 gap-y-16 w-full tablet:grid-cols-3 gap-x-10`}
        onAnimationEnd={closeMenu}
      >
        {categories.map(({ name, image }) => (
          <CategorySelector
            image={image}
            name={name}
            key={name}
            clickHandler={disable}
          />
        ))}
      </div>
    </div>
  );
}
