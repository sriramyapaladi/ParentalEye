import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
//import logimg from "../images/bg13.jpg";

const Login = ({ onFormSwitch }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="autoimg" >
    <div className="auth-form-container">
     
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="**"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
      <Link to="/signup">
        <button
          className="link-btn"
          onClick={() => onFormSwitch && onFormSwitch("signup")}
        >
          Don't have an account? Signup here.
        </button>
      </Link>
    </div>
    </div>
  );
};

export default Login