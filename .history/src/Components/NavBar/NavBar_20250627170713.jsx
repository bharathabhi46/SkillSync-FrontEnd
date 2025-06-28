import React from "react";
import { NavLink } from "react-router-dom";
import RegisterUser from "../RegisterUser/RegisterUser";

const NavBar = () => {
  let isLoggedIn = localStorage.getItem("userEmail") !== null;
  return (
    <div>
      <NavLink to="/LoginUser">Login</NavLink>
      <NavLink to="/RegisterUser">Register</NavLink>
      {isLoggedIn ? (
        ((<NavLink to="/CreateUser">Create User</NavLink>),
        (<NavLink to="/UserList">User List</NavLink>),
        (<NavLink to="/EditUser">Edit User</NavLink>))
      ) : (
        <NavLink to="/LoginUser">Login</NavLink>
      )}
    </div>
  );
};

export default NavBar;
