import React from "react";
import CreateUser from "./Components/CreateUser/CreateUser";
import UserList from "./Components/UserList/UserList";
import EditUser from "./Components/EditUser/EditUser";

const App = () => {
  return (
    <>
      <CreateUser />
      <UserList />
      <EditUser />
    </>
  );
};

export default App;
