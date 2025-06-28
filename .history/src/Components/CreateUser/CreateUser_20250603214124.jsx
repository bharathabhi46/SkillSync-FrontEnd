import React, { useState } from "react";

const CreateUser = () => {
    let []
  let [user, setUser] = useState();
  return (
    <div>
      <form action="submit">
        <input
          type="text"
          name="name"
          id="name"
          value={user}
          placeholder="Enter your name"
        />
      </form>
    </div>
  );
};

export default CreateUser;
