import React from "react";
import "../../HotelListing/HotelListing.css";
import hotelImg1 from "../../../assets/hotel-img1.png";
import hotelImg2 from "../../../assets/hotel-img2.png";
import hotelImg3 from "../../../assets/hotel-img3.png";
import hotelImg4 from "../../../assets/hotel-img4.png";
import hotelImg5 from "../../../assets/hotel-img5.png";

import { Rate } from "antd";
import { Pagination } from "antd";
import HotelFilter from "../FilterCard";

function ListCard() {
  return (
    <div className="card-container">
      <HotelFilter />
      <div className="list-card">
        <div className="list-card-img">
          <img src={hotelImg1} alt="Hotel Display" />
        </div>
        <div className="list-card-content">
          <h2 className="h2">The Chronicle Hotel Bistro</h2>
          <p>Lekki Phase 1, Lagos</p>
          <p>
            Offering an outdoor pool and a restaurant, Sheraton Lagos Hotel is
            located in Lagos. Free WiFi access is available. Each room here will
            provide you with a TV, air conditioning and a seating area.
          </p>
          <div>
            <Rate />
          </div>
        </div>
        <div className="list-card-review">
          <div className="review-text">
            <h4 className="h4">Good</h4>
            <p>208 reviews</p>
          </div>
          <h3 className="rate-num">7.5</h3>
        </div>
      </div>
      <div className="list-card">
        <div className="list-card-img">
          <img src={hotelImg2} alt="Hotel Display" />
        </div>
        <div className="list-card-content">
          <h2 className="h2"> Presken Hotels Opebi Lagos</h2>
          <p>Abel Oreniyi street off Salvation Road Opebi, Ikeja</p>
          <p>
            Located in Ikeja, 5 km from Kalakuta Museum, Presken Hotels Opebi
            Lagos provides accommodation with a restaurant, free private
            parking, a fitness centre and a bar.
          </p>
          <div>
            <Rate />
          </div>
        </div>
        <div className="list-card-review">
          <div className="review-text">
            <h4 className="h4">Good</h4>
            <p>278 reviews</p>
          </div>
          <h3 className="rate-num">7.5</h3>
        </div>
      </div>{" "}
      <div className="list-card">
        <div className="list-card-img">
          <img src={hotelImg3} alt="Hotel Display" />
        </div>
        <div className="list-card-content">
          <h2 className="h2"> Presken Residence Annex</h2>
          <p>Ikeja GRA, Lagos</p>
          <p>
            Set in Ikeja, 5 km from Ikeja City Mall, Presken Residence Annex
            features a bar.
          </p>
          <div>
            <Rate />
          </div>
        </div>
        <div className="list-card-review">
          <div className="review-text">
            <h4 className="h4">Good</h4>
            <p>121 reviews</p>
          </div>
          <h3 className="rate-num">8.1</h3>
        </div>
      </div>{" "}
      <div className="list-card">
        <div className="list-card-img">
          <img src={hotelImg4} alt="Hotel Display" />
        </div>
        <div className="list-card-content">
          <h2 className="h2"> Radisson Lagos Ikeja</h2>
          <p>Ikeja GRA, Lagos</p>
          <p>
            Set in Ikeja, Radisson Ikeja offers a garden. This hotel has
            air-conditioned rooms with a private bathroom. The property features
            a terrace and a 24-hour front desk.
          </p>
          <div>
            <Rate />
          </div>
        </div>
        <div className="list-card-review">
          <div className="review-text">
            <h4 className="h4">Very Good</h4>
            <p>121 reviews</p>
          </div>
          <h3 className="rate-num">8.1</h3>
        </div>
      </div>{" "}
      <div className="list-card">
        <div className="list-card-img">
          <img src={hotelImg5} alt="Hotel Display" />
        </div>
        <div className="list-card-content">
          <h2 className="h2">Fraser Suites Abuja</h2>
          <p>Leventis Close, Central Business District, Abuja</p>
          <p>
            Showcasing a year-round outdoor pool, Fraser Suites Abuja is located
            in Abuja. Free WiFi is available throughout the property and free
            private parking is available on site.
          </p>
          <div>
            <Rate />
          </div>
        </div>
        <div className="list-card-review">
          <div className="review-text">
            <h4 className="h4">Fabulous</h4>
            <p>128 reviews</p>
          </div>
          <h3 className="rate-num">8.1</h3>
        </div>
      </div>
      <div>
        <Pagination className="pagination" defaultCurrent={1} total={50} />
      </div>
    </div>
  );
}

export default ListCard;
