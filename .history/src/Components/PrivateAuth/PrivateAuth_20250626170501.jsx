import React from "react";
import { useNavigate } from "react-router-dom";
const PrivateAuth = ({ children }) => {
  let navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("userEmail") !== null;
  return isLoggedIn ? children : navigate("/Login");
  return <div>PrivateAuth</div>;
};

export default PrivateAuth;
