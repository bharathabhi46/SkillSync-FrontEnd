import React from "react";
import { NavLink } from "react-router-dom";
import RegisterUser from "../RegisterUser/RegisterUser";

const NavBar = () => {
  let isLoggnedIn = localStorage.getItem("userEmail") !== null;
  return (
    <div>
      <NavLink to={<LoginUser />}>Login</NavLink>
      <NavLink to={<RegisterUser />}>Register</NavLink>
    </div>
  );
};

export default NavBar;
