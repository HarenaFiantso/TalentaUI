import React from "react";
import "./Featured.scss";

import bannerPic from "../../assets/banner.png";
import searchIcon from "../../assets/search.png";

export default function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <span className="text">Find the perfect <span>freelance services</span> for your business.</span>
          <div className="search">
            <div className="searchInput">
              <img src={searchIcon} alt="search Icon" />
              <input type="text" placeholder="Try building mobile app" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web design</button>
            <button>Wordpress</button>
            <button>AI services</button>
            <button>Logo design</button>
          </div>
        </div>
        <div className="right">
          <img src={bannerPic} alt="banner" />
        </div>
      </div>
    </div>
  );
}
