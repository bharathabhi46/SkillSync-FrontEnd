import React, { useState } from "react";

const CreateUser = () => {
  let [users, setUsers] = useState([
    {
      userName: "",
      Email: "",
      Password: "",
      Role: "",
    },
  ]);
  let handleOnChange = (e) => {
    setUsers((users)=>{
      ...users
    })
  };
  return (
    <div>
      <h2>Create User</h2>
      <form>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={users.userName}
          onChange={() => handleOnChange(e)}
          placeholder="Enter your name"
        />
        <br />
        <label>Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={users.Email}
          onChange={() => handleOnChange(e)}
          placeholder="Enter your Email"
        />
        <br />
        <label>Password: </label>

        <input
          type="password"
          name="password"
          id="password"
          value={users.Password}
          onChange={() => handleOnChange(e)}
          placeholder="Enter your Password"
        />
        <br />
        <label>Role: </label>
        <input
          type="text"
          name="role"
          id="role"
          value={users.Role}
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
