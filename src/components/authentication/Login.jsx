import React from "react";
import "./Register.css";
import "./Login.css";

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
      </div>
    </div>
  );
}

export default Login;
