import React, { useState } from "react";

const CreateUser = () => {
  //   let [user, setUser] = useState("");
  let [users, setUsers] = useState([]);
  return (
    <div>
      <form action="submit">
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
      </form>
    </div>
  );
};

export default CreateUser;
