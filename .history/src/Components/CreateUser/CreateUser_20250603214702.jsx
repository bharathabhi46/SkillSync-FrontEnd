import React, { useState } from "react";

const CreateUser = () => {
  //   let [user, setUser] = useState("");
  let [users, setUsers] = useState([]);
  return (
    <form action="submit" method="post">
      <input
        type="text"
        name="name"
        id="name"
        //   value={user}
        placeholder="Enter your name"
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your Email"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter your Password"
      />
      <input type="text" name="role" id="role" placeholder="Enter your role" />
      <button>Submit</button>
    </form>
  );
};

export default CreateUser;
