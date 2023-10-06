import React from "react";
import { NavItem } from "../../utils/navitem";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="space-y-2">
      {NavItem.map((item, i) => (
        <NavLink to={item.path} className="block text-gray-700" key={i}>
          {item.name.toUpperCase()}
        </NavLink>
      ))}
    </div>
  );
};

export default SideNav;
