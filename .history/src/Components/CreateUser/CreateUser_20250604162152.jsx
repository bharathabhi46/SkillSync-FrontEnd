import React, { useState } from "react";

const CreateUser = () => {
  let [users, setUsers] = useState([
    {
      name: "",
      email: "",
      password: "",
      role: "",
    },
  ]);
  function handleOnChange(e) {
    setUsers((users) => ({
      ...users,
      [e.target.name]: e.target.value,
    }));
  }
  let handleSubmit;
  return (
    <div>
      <h2>Create User</h2>
      <form>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={users.name}
          onChange={() => handleOnChange(e)}
          placeholder="Enter your name"
        />
        <br />
        <label>Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={users.email}
          onChange={() => handleOnChange(e)}
          placeholder="Enter your Email"
        />
        <br />
        <label>Password: </label>

        <input
          type="password"
          name="password"
          id="password"
          value={users.rassword}
          onChange={() => handleOnChange(e)}
          placeholder="Enter your Password"
        />
        <br />
        <label>Role: </label>
        <input
          type="text"
          name="role"
          id="role"
          value={users.role}
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
