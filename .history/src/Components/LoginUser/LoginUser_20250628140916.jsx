import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginUser.css";
const LoginUser = () => {
  let navigate = useNavigate();
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
      let data = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginUser),
      });
      setLoginUser({
        email: "",
        password: "",
      });
      alert("Login Successful");
      localStorage.setItem("userEmail", LoginUser.email);
      let user = await data.json();
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (err) {
      console.log("Error : ", err);
      alert("Failed to Login");
    }
  }
  return (
    <div className="login-container">
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
        <p>Don't have an account? Register now!</p>
      </form>
    </div>
  );
};

export default LoginUser;
