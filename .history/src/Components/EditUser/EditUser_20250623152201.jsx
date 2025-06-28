import { useEffect, useState } from "react";
import React from "react";

const EditUser = () => {
  let url = "http://localhost:8080/api/users";
  let [updateForm, setUpdateForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  async function getUserDetails(url, id) {
    let res = await fetch(`${url}/${id}`, {
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
  function handleOnChange(e){
    setUpdateForm((prevForm)=>({
        ...prevForm,
        [e.target.name] : [e.target.value];
    }))
  }
  function handleSubmit(url){
    fetch(`${url}`)
  }
  useEffect(() => {
    getUserDetails(url, 302);
  }, []);

  return (
    <>
      <form onSubmit={handleForm}>
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
