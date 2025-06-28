import React from "react";
import CreateUser from "./Components/CreateUser/CreateUser";
import UserList from "./Components/UserList/UserList";
import EditUser from "./Components/EditUser/EditUser";
import { Route, Routes } from "react-router-dom";
import RegisterUser from "./Components/RegisterUser/RegisterUser";
import LoginUser from "./Components/LoginUser/LoginUser";
import "./App.css";
import PrivateAuth from "./Components/PrivateAuth/PrivateAuth";
import NavBar from "./Components/NavBar/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/UserList"
          element={
            <PrivateAuth>
              <UserList />
            </PrivateAuth>
          }
        />
        <Route
          path="/EditUser/:id"
          element={
            <PrivateAuth>
              <EditUser />
            </PrivateAuth>
          }
        />
        <Route
          path="/CreateUser"
          element={
            <PrivateAuth>
              <CreateUser />
            </PrivateAuth>
          }
        />
        <Route path="/RegisterUser" element={<RegisterUser />} />
        <Route path="/LoginUser" element={<LoginUser />} />
      </Routes>
    </>
  );
};

export default App;
