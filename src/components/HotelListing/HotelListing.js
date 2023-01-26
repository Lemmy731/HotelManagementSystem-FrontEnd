import React from "react";
import Sidebar from "../navs/Sidebar";
import "./HotelListing.css";
import ListCard from "./listcard/ListCard";

const HotelListing = () => {
  return (
    <div className="hotel-lists">
      <Sidebar />
      <ListCard />
    </div>
  );
};

export default HotelListing;
