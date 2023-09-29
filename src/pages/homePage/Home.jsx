import React, { useEffect } from "react";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import "./Home.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import { cards } from "../../StaticData";
import nightView from "../../assets/1.webp";
import check from "../../assets/greencheck.png";

export default function Home() {
  /* Data aos initilization */
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="home">
      <Featured />
      <Slide slidesToShow={4} arrowsScroll={4}>
        {cards.map((card) => (
          <CategoryCard item={card} key={card.id} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="left" data-aos="fade-down">
            <h1>
              A whole word of <span>freelance talent</span> <br /> at your
              fingertips
            </h1>
            <div className="title">
              <img src={check} alt="check icon" />
              The best for every budget
            </div>
            <p>
              Find high quality services at every price point. No hourly rates,
              just project-based pricing
            </p>
            <div className="title">
              <img src={check} alt="check icon" />
              Quality work down quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              a minutes
            </p>
            <div className="title">
              <img src={check} alt="check icon" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve to work
            </p>
            <div className="title">
              <img src={check} alt="check icon" />
              24/7 support
            </div>
            <p>
              Find high quality services at every price point. No hourly rates,
              just project-based pricing
            </p>
          </div>
          <div className="right" data-aos="fade-down">
            <img src={nightView} alt="A random image" />
          </div>
        </div>
      </div>
    </div>
  );
}
