import axios from "axios";
import React, { useEffect, useState } from "react";

const HotelFilter = () => {
  const [activeHotel, setActiveHotel] = useState(1);
  const [activePick, setActivePick] = useState(1);
  const [hotels, setHotel] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState("");
  const [isAllListing, setIsAllListing] = useState(false);
  const [isAllListing1, setIsAllListing1] = useState(false);
  const [show1, setShow1] = useState(false);

  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get("https://localhost:7255/api/Hotel")
      .then((Response) => {
        const sortedNames = Response.data.data.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        console.log(sortedNames);
        setHotel((prev) => (prev = sortedNames));
        // setFilteredData(Response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleAddClick = () => {
    setIsAllListing(!isAllListing);
    setShow((pre) => !pre);
  };

  const handleAddClick1 = () => {
    setIsAllListing1(!isAllListing1);
    setShow1((pre) => !pre);
  };

  return (
    <>
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
              {hotels.map((d) => (
                <option value={d.name}>{d.name}</option>
              ))}
            </select>{" "}
          </div>{" "}
        </div>{" "}
        <div className="top_span"> </div>
        <div className="first_second">
          <div className="first_span">
            {" "}
            <span
              className={
                activeHotel == 1 ? "span-btn active-hotel" : "span-btn"
              }
              onClick={handleAddClick}

              // className={activePick == 1 ? "span-btn active-hotel" : "span-btn"}
              // onClick={handleAddClick}
            >
              All
            </span>{" "}
            <span>|</span>{" "}
            <span
              className={
                activeHotel == 2 ? "span-btn active-hotel" : "span-btn"
              }
              onClick={handleAddClick}
            >
              Hotel
            </span>{" "}
            <span>|</span>
            <span
              className={
                activeHotel == 3 ? "span-btn active-hotel" : "span-btn"
              }
              onClick={() => setActiveHotel(3)}
            >
              House/Apartments
            </span>{" "}
          </div>{" "}
          <div className="second_span">
            {" "}
            <span
              className={activePick == 1 ? "span-btn active-hotel" : "span-btn"}
              onClick={handleAddClick1}
              // onClick={()=> activePick == "1"? "active" : " "}
            >
              Top Picks
              {show1 ? (
                <span className="hotel-container1">
                  {isAllListing1 &&
                    hotels.map((d, index) => (
                      <div key={index}>
                        <span className="holder1">{d.name}</span>
                      </div>
                    ))}{" "}
                </span>
              ) : null}
            </span>{" "}
            <span>|</span>{" "}
            <span
              className={activePick == 2 ? "span-btn active-hotel" : "span-btn"}
              onClick={() => setActivePick(2)}
            >
              Stars(highest first)
            </span>{" "}
            <span>|</span>
            <span
              className={activePick == 3 ? "span-btn active-hotel" : "span-btn"}
              onClick={() => setActivePick(3)}
            >
              Stars(lowest first)
            </span>{" "}
          </div>{" "}
        </div>
      </div>{" "}
      {show ? (
        <span className="hotel-container">
          {isAllListing &&
            hotels.map((d, index) => (
              <div key={index}>
                <option className="holder">{d.name}</option>
              </div>
            ))}
        </span>
      ) : null}
    </>
  );
};
export default HotelFilter;
