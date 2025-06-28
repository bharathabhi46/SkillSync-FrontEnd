import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
const PrivateAuth = ({ children }) => {
  const isLoggedIn = localStorage.getItem("userEmail") !== null;
  return isLoggedIn ? children : <Navigate to={"/LoginUser"} />;
};

export default PrivateAuth;
