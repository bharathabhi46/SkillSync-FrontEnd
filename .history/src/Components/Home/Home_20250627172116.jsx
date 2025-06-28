import React from "react";

const Home = () => {
  const user = localStorage.getItem("userEmail");

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to SkillSync 👋</h1>
      {user ? (
        <p>
          You are logged in as <strong>{user}</strong>
        </p>
      ) : (
        <p>Please log in to manage users and access features.</p>
      )}
    </div>
  );
};

export default Home;
