import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <h3>SkillSync</h3>
      <div style={{ display: "flex", gap: "15px" }}>
        {!isLoggedIn ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link to="/users">Users</Link>
            <Link to="/create">Create User</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
