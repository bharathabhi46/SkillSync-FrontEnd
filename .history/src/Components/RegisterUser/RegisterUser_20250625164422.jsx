import React, { useState } from "react";

const RegisterUser = () => {
  let url = "http://localhost:8080/api/auth/register";
  let [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  return (
    <div>
      <form>
        <label>Name : </label>
        <label>Email : </label>
        <label>Passord : </label>
        <label>Role : </label>
      </form>
    </div>
  );
};

export default RegisterUser;
