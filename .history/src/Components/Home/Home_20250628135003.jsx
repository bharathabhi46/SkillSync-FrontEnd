import React from "react";
import "./Home.css";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="home-container">
      <h1>
        Welcome to <span>SkillSync</span>
      </h1>
      <p>
        {user
          ? `Hello, ${user.name}! You are logged in.`
          : "Your one-stop platform to manage and sync your skills with ease."}
      </p>
      {!user && (
        <p>
          Please <strong>Login</strong> or <strong>Register</strong> to get
          started.
        </p>
      )}
    </div>
  );
};

export default Home;
