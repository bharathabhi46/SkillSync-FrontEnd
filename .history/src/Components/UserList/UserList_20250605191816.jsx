import React, { useState, useEffect } from "react";

const UserList = () => {
  let [userList, setUserList] = useState([]);
  let url = "http://localhost:8080/api/users";

  try {
    async function fetchUsers(url) {
      let res = await fetch(url);
      let data = await res.json();
      setUserList(data);
      console.log(userList);
    }
  } catch (error) {
    alert("Falied to Fetch Users");
    console.error("Error : ", error);
  }

  useEffect(() => {
    fetchUsers(url);
  }, []);
  return <div></div>;
};

export default UserList;
