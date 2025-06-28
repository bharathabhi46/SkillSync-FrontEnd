import React, { useState } from "react";

const CreateUser = () => {
  let [users, setUsers] = useState([
    {
      userName: "bharath",
      Email: "",
      Password: "",
      Role: "",
    },
  ]);
  return (
    <div>
      <h2>Create User</h2>
      <form>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value="bharath"
          placeholder="Enter your name"
        />
        <br />
        <label>Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={users.Email}
          placeholder="Enter your Email"
        />
        <br />
        <label>Password: </label>

        <input
          type="password"
          name="password"
          id="password"
          value={users.Password}
          placeholder="Enter your Password"
        />
        <br />
        <label>Role: </label>
        <input
          type="text"
          name="role"
          id="role"
          value={users.Role}
          placeholder="Enter your Role"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateUser;
