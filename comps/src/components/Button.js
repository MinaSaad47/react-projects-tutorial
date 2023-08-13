import classNames from "classnames";
import React from "react";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  ...attr
}) {
  const classes = classNames(
    attr.className,
    "flex items-center px-3 py-1.5 border",
    {
      "border-blue-600 bg-blue-600 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-600 bg-green-600 text-white": success,
      "border-yellow-600 bg-yellow-600 text-white": warning,
      "border-red-600 bg-red-600 text-white": danger,
    },
    {
      "rounded-full": rounded,
      "bg-transparent": outline,
    },
    {
      "text-blue-600": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-600": outline && success,
      "text-yellow-600": outline && warning,
      "text-red-600": outline && danger,
    }
  );
  console.log(classes);
  return (
    <button {...attr} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariantValue: ({ primary, secondary, success, warning, danger }) => {
    const number =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (number > 1) {
      throw new Error(
        "Only one of primay, secondary, success, warning or danger can be used"
      );
    }
  },
};

export default Button;
