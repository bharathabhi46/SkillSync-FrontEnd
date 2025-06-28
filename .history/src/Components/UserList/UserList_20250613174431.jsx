import React, { useState, useEffect } from "react";

const UserList = () => {
  let [userList, setUserList] = useState([]);
  let url = "http://localhost:8080/api/users";
  let deleteUrl = "http://localhost:8080/api/users/";

  try {
    async function fetchUsers(url) {
      let res = await fetch(url);
      let data = await res.json();
      setUserList(data);
    }
    async function deleteUser(url, id) {
      fetch(`${url}${id}`, {
        method: "DELETE",
      });
    }
    useEffect(() => {
      fetchUsers(url);
    }, []);
  } catch (error) {
    alert("Falied to Fetch Users");
    console.error("Error : ", error);
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
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.password}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteUser(user.id);
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
