import React from "react";
import { NavLink } from "react-router-dom";
const NavigationItems = ({
  isAuth,
  name,
  path,
  exact,
  isPrivate,
  restricted,
}) => {
  return (
    <li>
      <NavLink
        to={path}
        exact={exact}
        className="navLink"
        activeClassName="activeNavLink"
      >
        {name.toUpperCase()}
      </NavLink>
    </li>
  );
};

export default NavigationItems;
