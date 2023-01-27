import React from "react";
import "./Register.css";
function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">AmanSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world with AmanSocial
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input className="loginInput" placeholder="Name" type="text" />
            <input className="loginInput" placeholder="Email" type="email" />
            <input
              className="loginInput"
              placeholder="Password"
              type="password"
            />
            <input
              className="loginInput"
              placeholder="Confirm password"
              type="password"
            />
            <button className="loginButton">Sign up</button>

            <button className="loginRegisterButton">
              Login to your account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
