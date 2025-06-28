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
    console.log(data);
  }

  useEffect(() => {
    getUserDetails(url, 302);
  }, []);
  return <>
  <form >
    <label>Name : </label>
    <input type="text" name="name" value={updateForm.name} onChange={handleOnChange} />
    <label>Email : </label>
    <input type="email" name="email" value={updateForm.}/>
    <label>Password : </label>
    <label>Role : </label>
    </form></>;
};

export default EditUser;
