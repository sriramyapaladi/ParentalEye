import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import 'C:/Users/Pro T/shadowcatproject/frontend/src/Styles/clogin.css';
function CLogin() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:3001/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/", { state: { id: email } });
          } else if (res.data === "notexist") {
            setError("User has not signed up");
          }
        })
        .catch((e) => {
          setError("Wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="video-container">
    <div className="login">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form className="login-form" onSubmit={submit}>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="****"
            id="password"
            name="password"
          />
          <button type="submit">Log In</button>
        </form>
         


      <Link to="/csignup">
        <button className="ssd">
          <p>
          Don't have an account? Signup here
          </p>

        </button>
      </Link>
      </div>
    </div>
  );
}

export default CLogin;
