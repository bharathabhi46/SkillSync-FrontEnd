import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  let isLoggnedIn = localStorage.getItem("userEmail") !== null;
  return (
    <div>
      <NavLink to={<LoginUser />}>Login</NavLink>
      <NavLink to={<LoginUser />}>Login</NavLink>
    </div>
  );
};

export default NavBar;
