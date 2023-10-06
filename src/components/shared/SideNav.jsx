import React from "react";
import { NavItem } from "../../utils/navitem";
import { NavLink } from "react-router-dom";

import "./sidenav.css";
const SideNav = () => {
  return (
    <>
      <div className="space-y-2 text-sm">
        {NavItem.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "active-link block text-white"
                : "block inactive text-white/40"
            }>
            {item.name.toUpperCase()}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default SideNav;
