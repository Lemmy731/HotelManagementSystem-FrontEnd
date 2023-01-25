import React from "react";
import "../../style/AddRoom.css";
import myImage from "../../assets/cover.png";

function AddRoom() {
  return (
    <div className="AddRoom">
      <p className="Tops">Managers Add Room</p>

      <div className="addRoom_cont">
        <div className="high">
          <img
            className="roomPicture"
            src={myImage}
            alt="Pictorial Representation of the room"
          />
        </div>

        <div className="RoomType">
          <div className="no">
            <p className="see">Please Select Room Type </p>

            <select className="Drop" placeholder="Add A Room Here">
              <option>Super Room</option>
              <option>Master Room</option>
              <option>Common Room</option>
              <option>Luxury Room</option>
            </select>
          </div>
          <div className="ken">
            <p className="Loo">Please Type In The Room Number</p>
            <input
              type="text"
              className="Doings"
              placeholder="Room Number"
            ></input>
          </div>
          <p className="Lin">Please Type In The Hotel Name</p>
          <div className="has">
            <input
              type="text"
              className="more"
              placeholder="Hotel Name"
            ></input>
          </div>
          <div className="Joo">
            <div className="going">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label for="html" className="Hin">
                Room Available
              </label>
              <br />
            </div>
            <input type="radio" id="css" name="fav_language" value="CSS" />
            <label for="css" className="Hin">
              Room NotAvailable
            </label>
          </div>
          <button className="room">Add Room</button>
        </div>
      </div>
    </div>
  );
}
export default AddRoom;
