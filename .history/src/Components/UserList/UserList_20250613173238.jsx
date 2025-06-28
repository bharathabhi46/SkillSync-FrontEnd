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

    useEffect(() => {
      fetchUsers(url);
    }, []);
  } catch (error) {
    alert("Falied to Fetch Users");
    console.error("Error : ", error);
  }
  function handleDelete(id) {
    console.log(id);
  }
  return (
    <div>
      <h2>All Users</h2>
      {userList.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              let {id, name, email, role, password} = user;
              <tr key={user.id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{role}</td>
                <td>{password}</td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(user.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
