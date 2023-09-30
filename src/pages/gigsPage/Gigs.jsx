import React from "react";
import "./Gigs.scss";

import arrowDown from "../../assets/down.png";

export default function Gigs() {
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">Talenta | Graphic & design |</span>
        <h1>AI Artist</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          repellendus explicabo porro numquam magni suscipit repellat dolores
          aliquid, perspiciatis eos laudantium, sit illo blanditiis minima
          necessitatibus optio nulla quos laboriosam.
        </p>
        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">Best Selling</span>
            <img src={arrowDown} alt="Arrow down" />
            <div className="rightMenu">
              <span>Newest</span>
              <span>Best Selling</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
