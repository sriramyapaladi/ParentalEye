import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function SLogin() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/sathvik", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/stock", { state: { id: email } });
          } else if (res.data === "notexist") {
            alert("User have not sign up");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="login">
        
      <h2>Login</h2>
      <form action="POST">
        <div>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
        </div>
        <div>
          <input type="submit" onClick={submit} />
        </div>
      </form>

      <br />
      <p>OR</p>
      <br />

      <Link to="/ssignup">Signup Page</Link>
    </div>
  );
}

export default SLogin;
