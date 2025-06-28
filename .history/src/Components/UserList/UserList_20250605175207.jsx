import React, { useState, useEffect } from "react";

const UserList = () => {
  let [userList, setUserList] = useState([]);
  let url = "http://localhost:8080/api/users";
  let [usersList, setUsersList] = useState([]);
  async function fetchUsers(url) {
    let res = await fetch(url);
    let data = await res.json();
    setUserList(data);
    console.log(userList);
  }

  useEffect(() => {
    fetchUsers(url);
  }, []);
  return <div></div>;
};

export default UserList;
