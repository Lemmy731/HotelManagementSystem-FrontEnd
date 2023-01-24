import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <div className="register">
      <div class="form">
        <div class="title">Welcome</div>
        <div class="subtitle">Let's create your account!</div>
        <div class="input-container ic1">
          <input id="firstname" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="firstname" class="placeholder">
            First name
          </label>
        </div>
        <div class="input-container ic2">
          <input id="lastname" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="lastname" class="placeholder">
            Last name
          </label>
        </div>
        <div class="input-container ic2">
          <input id="username" class="input" type="text" placeholder=" " />
          <div class="cut"></div>
          <label for="username" class="placeholder">
            Username
          </label>
        </div>
        <div class="input-container ic2">
          <input id="phone-number" class="input" type="text" placeholder=" " />
          <div class="cut cut-mid"></div>
          <label for="phone-number" class="placeholder">
            Phone Number
          </label>
        </div>
        <div class="input-container ic2">
          <input id="email" class="input" type="text" placeholder=" " />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">
            Email
          </label>
        </div>
        <div class="input-container ic2">
          <input id="password" class="input" type="password" placeholder=" " />
          <div class="cut"></div>
          <label for="password" class="placeholder">
            Password
          </label>
        </div>
        <div class="input-container ic2">
          <input
            id="confirm-password"
            class="input"
            type="password"
            placeholder=" "
          />
          <div class="cut cut-long"></div>
          <label for="confirm-password" class="placeholder">
            Confirm Password
          </label>
        </div>
        <div class="input-container ic2">
          <input id="age" class="input" type="number" placeholder=" " />
          <div class="cut cut-short"></div>
          <label for="age" class="placeholder">
            Age
          </label>
        </div>
        <div class="input-container ic2">
          <select id="sex" class="input" placeholder=" ">
            <option value="">--Select sex--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <div class="cut cut-short"></div>
          <label for="sex" class="placeholder">
            Sex
          </label>
        </div>
        <button type="text" class="submit">
          Register
        </button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
