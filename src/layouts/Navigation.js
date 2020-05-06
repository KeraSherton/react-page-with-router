import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const menuItems = [
  { name: "start", path: "/", exact: true },
  { name: "products", path: "/product" },
  { name: "contact", path: "/contact" },
  { name: "login", path: "/login" }
];

const Navigation = () => {
  const menu = menuItems.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="main">
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
