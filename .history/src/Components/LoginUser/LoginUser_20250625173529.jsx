import React, { useState } from "react";

const LoginUser = () => {
  let url = "http://localhost:8080/api/users/auth/login";
  let [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  function handleOnChange(e) {
    setLoginUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
    } catch (err) {
      console.log("Error : ", err);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email : </label>
        <input
          type="email"
          name="email"
          value={registerForm.email}
          onChange={handleOnChange}
        />
        <label>Passord : </label>
        <input
          type="password"
          name="password"
          value={registerForm.password}
          onChange={handleOnChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginUser;
