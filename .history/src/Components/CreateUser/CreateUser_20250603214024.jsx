import React, { useState } from "react";

const CreateUser = () => {
  let [user, setUser] = useState([]);
  return (
    <div>
      <form action="submit">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
        />
      </form>
    </div>
  );
};

export default CreateUser;
