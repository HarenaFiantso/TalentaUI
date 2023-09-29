import React from "react";
import "./CategoryCard.scss";
import { Link } from "react-router-dom";

export default function CategoryCard({ item }) {
  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <img src={item.img} alt="Item image" />
        <span className="desc">{item.description}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
}
