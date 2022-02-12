import React from "react";
import classnames from "classnames";
import { useMediaQuery } from "react-responsive";

export default function FormRow({ numOfCols, children }) {
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const classes = classnames({
    [`tablet:inline-grid tablet:grid-cols-${numOfCols} tablet:gap-x-6`]:
      isTablet,
  });
  return <div className={`w-full ${classes}`}>{children}</div>;
}
