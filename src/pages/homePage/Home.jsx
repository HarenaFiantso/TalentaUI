import React, { useEffect } from "react";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import "./Home.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import { cards, projects } from "../../StaticData";
import featuresOne from "../../assets/1.webp";
import featuresTwo from "../../assets/4.webp";
import check from "../../assets/greencheck.png";
import { Button } from "@mui/material";
import ProjectCard from "../../components/projectCard/ProjectCard";

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

      {/* Features part 1 */}
      <div className="features">
        <div className="container">
          <div className="left">
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
          <div className="right">
            <img src={featuresOne} alt="A random image" />
          </div>
        </div>
      </div>
      {/* Features part 2 */}
      <div className="features dark">
        <div className="container">
          <div className="right">
            <img src={featuresTwo} alt="A random image" />
          </div>
          <div className="left">
            <h1>
              <span>Talenta business,</span> <br />A business solution designed
              for teams
            </h1>
            <p>
              Upgrade to a curated experience packed with toold and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src={check} alt="check icon" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src={check} alt="check icon" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <img src={check} alt="check icon" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <Button>Explore Talenta Business</Button>
          </div>
        </div>
      </div>

      <Slide slidesToShow={3} arrowsScroll={3}>
        {projects.map((project) => (
          <ProjectCard item={project} key={project.id} />
        ))}
      </Slide>
    </div>
  );
}
