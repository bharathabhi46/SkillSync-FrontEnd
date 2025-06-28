import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user !== null);
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/LoginUser");
  };

  return (
    <nav className="navbar">
      <h3 className="logo">SkillSync</h3>
      <div className="nav-links">
        {user ? (
          <>
            <span>
              Welcome, <strong>{user.name}</strong> 👋
            </span>
            <Link to="/UserList">Users</Link>
            <Link to="/CreateUser">Create</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/LoginUser">Login</Link>
            <Link to="/RegisterUser">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
