import React, { useState } from "react";
import resetlogo from "../../assets/resetlogo.png"
import "./ResetUpdatePassword.css"
const formDetails = {
  password: "",
  password2: ""
};
const UpdatePassword = () => {
  const [password, setPassword] = useState(formDetails);

  const handleChange = (e) => {
    console.log(e.target.value)
        console.log(e.target.name);

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a request to the server to update the user's password
  };

  return (
    <div className="resetContainer">
      <div className="resetLogo">
        <img src={resetlogo} alt="reset logo" />
      </div>
      <div>
        <p>Please Choose a new password to login</p>
      </div>
      <div className="resetForm">
        <form onSubmit={handleSubmit}>

          <div className="newPassword">
            
            <input
              type="password"
              placeholder="New password "
              onChange={handleChange}
            />
          
            <input
              type="password"
              placeholder="Re-enter new password"
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit">Change Password</button>
          </div>
        </form>
      </div>
    </div>
  )
  
};

export default UpdatePassword;
