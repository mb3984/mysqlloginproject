import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Importing CSS

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from storage
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
