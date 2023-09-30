import React from "react";
import "./GigCard.scss";

import { Link } from "react-router-dom";
import star from "../../assets/start.png";
import heart from "../../assets/heart.png";

export default function GigCard({ item }) {
  return (
    <Link to="/gig/1">
      <div className="gigCard">
        <img src={item.img} alt="Image item" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="Profile picture" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <img src={star} alt="Star" />
            <span>{item.star}</span>
          </div>
        </div>
        <div className="details">
          <img src={heart} alt="heart" />
          <span>Starting at</span>
          <h2>{item.price}</h2>
        </div>
      </div>
    </Link>
  );
}
