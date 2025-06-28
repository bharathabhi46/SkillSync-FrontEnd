import React, { useState } from "react";

const CreateUser = () => {
  let url = "http://localhost:8080/api/users";
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  function handleOnChange(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(res);
      if (res.ok) {
        // alert("User Created Successfully");
        setFormData({ name: "", email: "", password: "", role: "" });
      } else {
        alert("Failed to Create the User");
      }
    } catch (error) {
      console.error("Error", error);
    }
  }
  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleOnChange}
          placeholder="Enter your name"
        />
        <br />
        <label>Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleOnChange}
          placeholder="Enter your Email"
        />
        <br />
        <label>Password: </label>

        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleOnChange}
          placeholder="Enter your Password"
        />
        <br />
        <label>Role: </label>
        <input
          type="text"
          name="role"
          id="role"
          value={formData.role}
          onChange={handleOnChange}
          placeholder="Enter your Role"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateUser;
