import React, { useEffect, useState } from "react";
import ProfileAvatar from "../../assets/profile.jpg";
import "./Navbar.scss";

import { Link, useLocation } from "react-router-dom";
import LanguagePic from "../../assets/language.png";

export default function Navbar() {
  /* Hooks for the scrolling effect */
  const [active, setActive] = useState(false);
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  });

  /* A method for switching guest user into connected user */
  const currentUser = {
    id: 1,
    username: "Fiantso Harena",
    isSeller: true,
  };

  /* Hook for the clicking event on the method above */
  const [open, setOpen] = useState(false);

  /* Called to fix the navbar scrolling effect in a another page than the home page */
  const { pathname } = useLocation();

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <Link to="/">
          <div className="logo">
            <span className="text">Talenta</span>
            <span className="domain">.mg</span>
          </div>
        </Link>
        <div className="links">
          <span>Talenta business</span>
          <span>Explore</span>
          <span>
            <img src={LanguagePic} alt="globe" className="icon"/>
          </span>

          {/* The implementation of the method method */}
          {!currentUser?.isSeller && <span>Sign in</span>}
          {!currentUser?.isSeller && <span>Become a seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={ProfileAvatar} alt="avatar" className="avatar"/>
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add new gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    Log Out
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link to="/">Graphic design</Link>
            <Link to="/">Videography</Link>
            <Link to="/">Web development</Link>
            <Link to="/">Photography</Link>
            <Link to="/">Architecture</Link>
            <Link to="/">AI services</Link>
            <Link to="/">Art & design</Link>
            <Link to="/">3D design</Link>
          </div>
        </>
      )}
    </div>
  );
}
