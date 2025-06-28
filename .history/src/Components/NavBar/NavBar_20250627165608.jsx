import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  let isLoggnedIn = localStorage.getItem("userEmail") !== null;
  return (
    <div>
      <NavLink></NavLink>
    </div>
  );
};

export default NavBar;
