import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner"; // Import loader
import "./Register.css"; // Import the CSS file

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loader
    try {
      const response = await axios.post(
        "http://localhost:2000/auth/register",
        values
      );
      if (response.status === 201) {
        alert("Registered successfully. Please Login.");
        navigate("/login");
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false); // Stop loader
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        {loading ? (
          <div className="loader-container">
            <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Enter Username"
                name="username"
                onChange={handleChanges}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                onChange={handleChanges}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={handleChanges}
              />
            </div>
            <button className="submit-btn" disabled={loading}>
              {loading ? "Registering..." : "Submit"}
            </button>
          </form>
        )}
        <div className="login-link">
          <span>Already have an account? </span>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
