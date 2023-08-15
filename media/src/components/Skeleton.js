import React from "react";
import classnames from "classnames";

function Skeleton({ items, className }) {
  const outerClasses = classnames(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "rounded",
    "mb-2.5",
    className
  );

  const innerClasses = classnames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-200"
  );

  const boxes = Array(items)
    .fill(0)
    .map((_, i) => (
      <div key={i} className={outerClasses}>
        <div className={innerClasses}></div>
      </div>
    ));
  return boxes;
}

export default Skeleton;
