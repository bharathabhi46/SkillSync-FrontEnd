import React from "react";
import CreateUser from "./Components/CreateUser/CreateUser";
import UserList from "./Components/UserList/UserList";
import EditUser from "./Components/EditUser/EditUser";
import { Route, Routes } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/UserList" element={<UserList />} />
        <Route path="/EditUser/:id" element={<EditUser />} />
        <Route path="/CreateUser" element={<CreateUser />} />
      </Routes>
    </>
  );
};

export default App;
