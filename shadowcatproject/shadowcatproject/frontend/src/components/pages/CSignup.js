import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import 'C:/Users/Pro T/shadowcatproject/frontend/src/Styles/csignup.css';


function CSignup() {
  const history = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/signup", {
        email,
        password
      })
      .then(res => {
        if (res.data === "exist") {
          alert("User already exists");
        } else if (res.data === "notexist") {
          history("/CLogin", { state: { id: email } });
        }
      })
      .catch(e => {
        alert("Wrong details");
        console.log(e);
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="autoimage" >
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Full Name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="****"
            id="password"
            name="password"
            required
          />
          <button type ="submit">Signup</button>
        </form>
        <Link to="/clogin">
          <button className="ssc">
            <p>Already have an account? Login here</p>
          
          </button>
        </Link>
      </div>
   
  );
}

export default CSignup;
