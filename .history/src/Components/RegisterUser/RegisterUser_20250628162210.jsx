import React, { useState } from "react";
import "./RegisterUser.css";
const RegisterUser = () => {
  let url = `${import.meta.env.VITE_API_URL}/api/users/auth/register`;
  let [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerForm),
      });
      setRegisterForm({ name: "", email: "", password: "", role: "" });
      alert("Registration Successfull");
    } catch (err) {
      console.log("Error : ", err);
      alert("Failed to Register");
    }
  }
  function handleOnChange(e) {
    setRegisterForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <div className="register-container">
      <h2>Register User</h2>
      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <input
          type="text"
          name="name"
          value={registerForm.name}
          onChange={handleOnChange}
        />
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
        <label>Role : </label>
        <input
          type="text"
          name="role"
          value={registerForm.role}
          onChange={handleOnChange}
        />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? Login now!</p>
    </div>
  );
};

export default RegisterUser;
