import React, { useState } from "react";
import blob from "../../assets/Blob.svg";
import "./ChangePassword.css";

export default function ResetPassword() {
  const [token, setToken] = useState("");

  const changePswd = (e) => {
    e.preventDefault();
    //some c# code
  };
  return (
    <div className="change_pswd_container">
      <div className="change_pswd">
        <img src={blob} className="change_paswdLogo" />
        <p>
          Verify your account by entering the 6 digits token sent your
          registered email
        </p>
      </div>
      <div className="change_reset_form">
        <form>
          <input
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Token"
          />
          <br />
          <button
            type="submit"
            onClick={changePswd}
            className="reset_pswdButton"
          >
            Change Password
          </button>
        </form>
        <a href="/">
          {" "}
          <p> Didn’t receive any mail? Click Here</p>
        </a>
      </div>
    </div>
  );
}
