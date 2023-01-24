import React from "react";
import "./Register.css";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div class="form">
        <div class="title">Login</div>
        <div class="input-container ic2">
          <input id="username" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="username" class="placeholder">
            Username
          </label>
        </div>
        <div class="input-container ic2">
          <input id="password" class="input" type="password" placeholder=" " />
          <div class="cut"></div>
          <label for="password" class="placeholder">
            Password
          </label>
        </div>
        <button type="text" class="submit">
          Login
        </button>
        <p>
          Don't have an account? <Link to="/register">Register</Link> or{" "}
          <Link to="/reset-password">Forget Password</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
