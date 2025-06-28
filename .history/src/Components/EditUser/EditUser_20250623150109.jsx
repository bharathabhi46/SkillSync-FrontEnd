import { useState } from "react";
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
    let res = fetch(`${url}/${id}`, {
      method: "GET",
    });
  }
  return <></>;
};

export default EditUser;
