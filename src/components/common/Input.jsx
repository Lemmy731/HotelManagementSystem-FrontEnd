import React from "react";
import { MdHome, MdOutlineBedroomParent, MdOutlineRoomService, MdPeople } from "react-icons/md";
import './input.css'
const Input = () => {
  return (
    <div>
      <div className="input-container" >
        <input type="text" placeholder="Hotel Name" className="" />
        <div className="icon-box">
          <MdHome className="icon" />
        </div>
      </div>
      <div className="input-container">
        <input type="text" disabled placeholder="Room Type" />
        <select className="input-select general" placeholder="Room Type">
          <option value="Standard Room">Standard Room</option>
          <option value="Superior Room-Pool View">Superior Room-Pool View</option>
          <option value="Premium Room">Premium Room</option>
        </select>
        <div className="icon-box">
          <MdOutlineBedroomParent className="icon" />
        </div>
      </div>
      <div className="input-container">
        <input type="text" disabled placeholder="No of People" />
        <input type="number" className="general" name="quantity" min="1" max="250" />
        <div className="icon-box">
          <MdPeople className="icon" />
        </div>
      </div>
      <div className="input-container">
        <input type="text" disabled placeholder="Service" />
        <select className="input-service general" placeholder="Service">
          <option value="Personal Service">Personal Service</option>
          <option value="Hotel Service">Hotel Service</option>
        </select>
        <div className="icon-box">
          <MdOutlineRoomService className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Input;
