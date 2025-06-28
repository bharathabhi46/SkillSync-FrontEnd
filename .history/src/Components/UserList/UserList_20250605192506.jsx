import React, { useState, useEffect } from "react";

const UserList = () => {
  let [userList, setUserList] = useState([]);
  let url = "http://localhost:8080/api/users";

  try {
    async function fetchUsers(url) {
      let res = await fetch(url);
      let data = await res.json();
      setUserList(data);
    }
    console.log(userList);
    useEffect(() => {
      fetchUsers(url);
    }, []);
  } catch (error) {
    alert("Falied to Fetch Users");
    console.error("Error : ", error);
  }

  return (
    <div>
      {userList.map((eachUser, i) => {
        let { name, email, password, role } = eachUser;
        return (
          <div key={i}>
            <li>{name}</li>
            <li>{email}</li>
            <li>{password}</li>
            <li>{role}</li>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
