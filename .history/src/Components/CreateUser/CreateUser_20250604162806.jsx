import React, { useState } from "react";

const CreateUser = () => {
  let url = "http://localhost:8080/api/formData";
  let [formData, setFormData] = useState([
    {
      name: "",
      email: "",
      password: "",
      role: "",
    },
  ]);
  function handleOnChange(e) {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  }
  async function handleSubmit() {
    try {
      let res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("User Created Successfully");
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
      <form>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={() => handleOnChange(e)}
          placeholder="Enter your name"
        />
        <br />
        <label>Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={() => handleOnChange(e)}
          placeholder="Enter your Email"
        />
        <br />
        <label>Password: </label>

        <input
          type="password"
          name="password"
          id="password"
          value={formData.rassword}
          onChange={() => handleOnChange(e)}
          placeholder="Enter your Password"
        />
        <br />
        <label>Role: </label>
        <input
          type="text"
          name="role"
          id="role"
          value={formData.role}
          onChange={() => handleOnChange(e)}
          placeholder="Enter your Role"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateUser;
