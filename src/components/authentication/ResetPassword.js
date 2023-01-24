import React, { useState } from "react";
import locked from "../../assets/Locked-Security.svg";
import "./ResetPassword.css";

export default function ResetPassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const changePswd = (e) => {
    e.preventDefault();
    //some c# code to change the logged in user password
  };
  return (
    <div className="reset_pswd_container">
      <div className="reset_pswd">
        <img src={locked} className="reset_paswdLogo" />
        <h5>Please choose a new password to login</h5>
      </div>
      <div className="reset_pswd_form">
        <form>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Current Password"
          />
          <br />
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
          />
          <br />
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            placeholder="Re-enter New Password"
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
      </div>
    </div>
  );
}
