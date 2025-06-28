import { useEffect, useState } from "react";
import React from "react";

const EditUser = () => {
  let [updateForm, setUpdateForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  let id = 302;
  let updateUrl = `http://localhost:8080/api/users/${id}`;
  async function getUserDetails(updateUrl) {
    let res = await fetch(updateUrl, {
      method: "GET",
    });
    let data = await res.json();
    setUpdateForm({
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
    });
  }
  function handleOnChange(e) {
    e.preventDefault();
    setUpdateForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: [e.target.value],
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch(updateUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateForm),
    });
  }
  useEffect(() => {
    getUserDetails(updateUrl);
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <input
          type="text"
          name="name"
          value={updateForm.name}
          onChange={handleOnChange}
        />
        <label>Email : </label>
        <input
          type="email"
          name="email"
          value={updateForm.email}
          onChange={handleOnChange}
        />
        <label>Password : </label>
        <input
          type="password"
          name="password"
          value={updateForm.password}
          onChange={handleOnChange}
        />
        <label>Role : </label>
        <input
          type="text"
          name="role"
          value={updateForm.role}
          onChange={handleOnChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default EditUser;
