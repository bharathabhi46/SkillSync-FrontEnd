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
      </form>
    </div>
  );
};

export default CreateUser;
