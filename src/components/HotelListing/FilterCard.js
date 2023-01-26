import React, { useState } from "react";

const HotelFilter = () => {
  const [activeHotel, setActiveHotel] = useState(1);
  const [activePick, setActivePick] = useState(1);

  return (
    <div className="hotelfilter_container">
      {" "}
      <div className="list">
        {" "}
        <h2 className="listings-label">Listings</h2>{" "}
        <div className="sort">
          {" "}
          <label className="label" for="cars">
            Sort by
          </label>{" "}
          <select className="select-drop-down" name="cars" id="cars">
            {" "}
            <option value="volvo">The Chronicle Hotel Bistro</option>{" "}
            <option value="saab">Presken Hotels Opebi Lagos</option>{" "}
            <option value="mercedes">Radisson Lagos Ikeja</option>{" "}
            <option value="audi">Presken Residence Annex</option>{" "}
          </select>{" "}
        </div>{" "}
      </div>{" "}
      <div className="top_span">
        {" "}
        <div className="first_span">
          {" "}
          <span
            className={activeHotel == 1 ? "span-btn active-hotel" : "span-btn"}
            onClick={() => setActiveHotel(1)}
          >
            All
          </span>{" "}
          <span>|</span>{" "}
          <span
            className={activeHotel == 2 ? "span-btn active-hotel" : "span-btn"}
            onClick={() => setActiveHotel(2)}
          >
            Hotel
          </span>{" "}
          <span>|</span> {/* <hr className="solid_line"></hr> */}
          <span
            className={activeHotel == 3 ? "span-btn active-hotel" : "span-btn"}
            onClick={() => setActiveHotel(3)}
          >
            House/Apartments
          </span>{" "}
        </div>{" "}
        <div className="second_span">
          {" "}
          <span
            className={activePick == 1 ? "span-btn active-hotel" : "span-btn"}
            onClick={() => setActivePick(1)}
          >
            Top Picks
          </span>{" "}
          <span>|</span>{" "}
          <span
            className={activePick == 2 ? "span-btn active-hotel" : "span-btn"}
            onClick={() => setActivePick(2)}
          >
            Stars(highest first)
          </span>{" "}
          <span>|</span> {/* <hr className="solid_line"></hr> */}
          <span
            className={activePick == 3 ? "span-btn active-hotel" : "span-btn"}
            onClick={() => setActivePick(3)}
          >
            Stars(lowest first)
          </span>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default HotelFilter;
