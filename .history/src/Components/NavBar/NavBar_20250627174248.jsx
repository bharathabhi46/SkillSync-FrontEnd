import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/LoginUser");
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
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        {user ? (
          <>
            <span>
              Welcome, <strong>{user.name}</strong> 👋
            </span>
            <Link to="/users">Users</Link>
            <Link to="/create">Create</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/LoginUser">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
