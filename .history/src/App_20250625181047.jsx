import React from "react";
import CreateUser from "./Components/CreateUser/CreateUser";
import UserList from "./Components/UserList/UserList";
import EditUser from "./Components/EditUser/EditUser";
import { Route, Routes } from "react-router-dom";
import RegisterUser from "./Components/RegisterUser/RegisterUser";
import LoginUser from "./Components/LoginUser/LoginUser";
import "./App.css";
import { useNavigate } from "react-router-dom";
const App = () => {
  const isLoggedIn = localStorage.getItem("userEmail") !== null;
  function handleLogOut() {
    localStorage.removeItem("userEmail");
  }
  return (
    <>
      <Routes>
        <Route path="/UserList" element={<UserList />} />
        <Route path="/EditUser/:id" element={<EditUser />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/RegisterUser" element={<RegisterUser />} />
        <Route path="/LoginUser" element={<LoginUser />} />
      </Routes>
    </>
  );
};

export default App;
