import React from "react";
import CreateUser from "./Components/CreateUser/CreateUser";
import UserList from "./Components/UserList/UserList";
import EditUser from "./Components/EditUser/EditUser";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/UserList" />
        <Route path="/EditUser" />
        <Route path="/CreateUser" />
      </Routes>
    </>
  );
};

export default App;
