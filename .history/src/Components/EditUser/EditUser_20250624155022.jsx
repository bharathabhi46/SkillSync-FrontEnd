import { useEffect, useState } from "react";

const EditUser = () => {
  let [updateForm, setUpdateForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  let id = 352;
  let url = `http://localhost:8080/api/users/${id}`;
  let updateUrl = `http://localhost:8080/api/users/${id}`;
  async function getUserDetails(url) {
    try {
      let res = await fetch(url, {
        method: "GET",
      });
      let data = await res.json();
      setUpdateForm({
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
      });
    } catch (err) {
      console.err("Error : ", err);
    }
  }
  function handleOnChange(e) {
    e.preventDefault();
    setUpdateForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await fetch(updateUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateForm),
      });
      alert("User Updated Successfully");
    } catch (err) {
      console.log("Error : ", err);
      alert("Unable to Update the user!");
    }
  }
  useEffect(() => {
    getUserDetails(url);
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
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default EditUser;
