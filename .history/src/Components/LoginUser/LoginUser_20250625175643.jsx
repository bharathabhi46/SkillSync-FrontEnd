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
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/type",
        },
        body: JSON.stringify(loginUser),
      });
      setLoginUser({
        email: "",
        password: "",
      });
      alert("Login Successful");
      localStorage.
    } catch (err) {
      console.log("Error : ", err);
      alert("Failed to Login");
    }
  }
  return (
    <div className="container">
      <h2>Login User</h2>
      <form onSubmit={handleSubmit}>
        <label>Email : </label>
        <input
          type="email"
          name="email"
          value={loginUser.email}
          onChange={handleOnChange}
        />
        <label>Passord : </label>
        <input
          type="password"
          name="password"
          value={loginUser.password}
          onChange={handleOnChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginUser;
