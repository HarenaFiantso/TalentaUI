import React, { useState } from "react";
import "./Navbar.scss";

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <span className="text">Talenta</span>
          <span className="domain">.mg</span>
        </div>
        <div className="links">
          <span>Talenta business</span>
          <span>Explore</span>
          <span>Sign in</span>
          <span>Become a seller</span>
          <button>Join</button>
        </div>
      </div>
      {
        <>
          <hr />
          <div className="menu">
            <span>Graphic design</span>
            <span>Videography</span>
            <span>Developer</span>
            <span>Photography</span>
          </div>
        </>
      }
    </div>
  );
}
