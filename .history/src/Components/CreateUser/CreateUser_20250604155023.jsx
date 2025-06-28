import React, { useState } from "react";

const CreateUser = () => {
  //   let [user, setUser] = useState("");
  let [users, setUsers] = useState([]);
  return (
    <form>
      <input type="text" name="name" id="name" placeholder="Enter your name" />
      <br />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your Email"
      />
      <br />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter your Password"
      />
      <br />
      <input type="text" name="role" id="role" placeholder="Enter your role" />
      <br />
      <button>Submit</button>
    </form>
  );
};

export default CreateUser;
