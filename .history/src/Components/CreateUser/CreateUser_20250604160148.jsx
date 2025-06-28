import React, { useState } from "react";

const CreateUser = () => {
  let [search, searchTerm] = useState("");
  let [users, setUsers] = useState([
    {
      userName: "",
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
          placeholder="Enter your name"
        />
        <br />
        <label>Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your Email"
        />
        <br />
        <label>Password: </label>

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your Password"
        />
        <br />
        <label>Role: </label>
        <select name="role" id="role">
          <option value="User">User</option>
          <option value="Mentor">Mentor</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateUser;
