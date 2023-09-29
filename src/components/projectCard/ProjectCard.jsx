import React, { useEffect } from "react";
import "./ProjectCard.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";

export default function ProjectCard({ item }) {
  /* Data aos initilization */
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Link to="/" className="link">
      <div className="proCard" data-aos="fade-down">
        <img src={item.img} alt="project" />
        <div className="info">
          <img src={item.pp} alt="avatar" />
          <div className="texts">
            <h2>{item.cat}</h2>
            <span>{item.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
