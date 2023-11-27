import React, { useState } from "react";
import { Link } from "react-router-dom";
import './signup.css';
//import logimage from '../images/cta.jpg';

const Signup = ({ onFormSwitch }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform register validation
        if (name && email && pass) {
            // Successful register
            console.log('signup successful');
            setError('');
            // You can redirect to another page or perform other actions here
        } else {
            // Invalid register
            setError('Please fill in all the fields');
        }
    };

    return (
        <div className="autoimage" >
            <div className="auth-form-container">
                <h2>Signup</h2>
                {error && <p className="error-message">{error}</p>}
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name</label>
                    <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" required />
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" required />
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="**" id="password" name="password" required />
                    <button type="submit">Signup</button>
                </form>
               <Link to="/login">
                    <button className="link-btn" onClick={() =>  onFormSwitch && onFormSwitch('login')}>Already have an account? Login here.</button>
               </Link>
            </div>
        </div>
    );
};

export default Signup;