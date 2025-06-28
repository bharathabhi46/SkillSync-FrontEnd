import React, { useState, useEffect } from "react";

const UserList = () => {
  let url = "http://localhost:8080/api/users";
  let [usersList, setUsersList] = useState([]);
  async function fetchUsers(url) {
    let data = await fetch(url);
  }
  return <div></div>;
};

export default UserList;
