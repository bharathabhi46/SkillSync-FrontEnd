import React, { useState } from "react";

const RegisterUser = () => {
  let url = "http://localhost:8080/api/auth/register";
  let [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    try {
    } catch (err) {
      console.log("Error : ", err);
    }
  }
  function handleOnChange(e) {
    setRegisterForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <input type="text" name="name" onChange={handleOnChange} />
        <label>Email : </label>
        <input type="email" name="email" onChange={handleOnChange} />
        <label>Passord : </label>
        <input type="password" name="password" onChange={handleOnChange} />
        <label>Role : </label>
        <input type="text" name="role" onChange={handleOnChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterUser;
