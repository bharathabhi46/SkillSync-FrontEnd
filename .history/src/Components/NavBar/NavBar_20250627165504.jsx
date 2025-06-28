import React from "react";

const NavBar = () => {
  let isLoggnedIn = localStorage.getItem("userEmail") !== null;
  return <div>NavBar</div>;
};

export default NavBar;
