import React, { useEffect, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import AOS from "aos";
import "aos/dist/aos.css";

import arrowDown from "../../assets/down.png";
import { gigs } from "../../StaticData";
import { Button } from "@mui/material";

export default function Gigs() {
  /* Dropdown menu */
  const [open, setOpen] = useState(false);

  /* Change the name of the menu dropped */
  const [sort, setSort] = useState("sales");
  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  /* Data aos initilization */
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">TALENTA | CATEGORY TITLE |</span>
        <h1>Category title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          quas quia, vitae sunt ipsum vel!
        </p>
        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <Button>Apply</Button>
          </div>
          <div className="right">
            <span className="sortBy">Sort By</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src={arrowDown}
              alt="Arrow down"
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards" data-aos="fade-down">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}
