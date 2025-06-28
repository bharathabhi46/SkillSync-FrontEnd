import React, { useState } from "react";

const RegisterUser = () => {
  let url = "http://localhost:8080/api/auth/register";
  let [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return <></>;
};

export default RegisterUser;
