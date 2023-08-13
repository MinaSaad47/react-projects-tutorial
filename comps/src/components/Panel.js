import classNames from "classnames";
import React from "react";

function Panel({ children, className, ...attr }) {
  const classes = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );
  return (
    <div className={classes} {...attr}>
      {children}
    </div>
  );
}

export default Panel;
