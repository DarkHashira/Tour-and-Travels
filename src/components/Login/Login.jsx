import React, { useState } from 'react';
import user_icon from './Assets/person.png';
import email_icon from './Assets/email.png';
import password_icon from './Assets/password.png';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const[action,setAction] = useState("Sign Up");
  
    return (
        <div className="back container-fluid">
            <div className="login1-container">
            <div className="back-home-button">
                <Link to="/" className="home-link">← Home</Link>
            </div>
            <div className="header1">
                <div className="text1">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs1">
                {action==="Login" ?<div></div>:<div className="input1">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Name'/>
                </div>}
                <div className="input1">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email'/>
                </div><div className="input1">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password'/>
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className="forgon-password">Lost Password? <span>Click Here</span></div>}
            
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
        </div>
    )
}

export default Login
