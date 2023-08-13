import React from "react";
import useNavigator from "../hooks/use-navigator";
import classNames from "classnames";

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigator();

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

  return (
    <a className={classes} onClick={handleClick} href={to}>
      {children}
    </a>
  );
}

export default Link;
