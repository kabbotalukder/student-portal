import React from 'react';
import { Link } from 'react-router-dom';
import './global.css';
import './Login.css';

const Login = () => {
    return(
        <div className="wrapper">
            <div className="login-card">
                <h1 className="login-title">Log In</h1>
                <form className="form" method="post">
                <input className="input text-fill" type="text" placeholder="Username"></input>
                <input className="input text-fill" type="password" placeholder="Password"></input>
                <div className='login-button'>
                    <Link exact to="/home" className="log-link">Log In</Link>
                </div>
                <Link exact to="/home" className="reg-link input">Register</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;