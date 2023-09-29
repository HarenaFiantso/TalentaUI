import React, { useEffect } from "react";
import "./CategoryCard.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";

export default function CategoryCard({ item }) {
  /* Data aos initilization */
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Link to="/gigs?cat=design">
      <div className="catCard" data-aos="fade-down">
        <img src={item.img} alt="Item image" />
        <span className="desc">{item.description}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
}
