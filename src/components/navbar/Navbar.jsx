import React, { useEffect, useState } from "react";
import ProfileAvatar from "../../assets/profile.jpg";
import "./Navbar.scss";

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

          {/* The implementation of the method method */}
          {!currentUser?.isSeller && <span>Become a seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={ProfileAvatar} alt="avatar" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <span>Gigs</span>
                      <span>Add new gig</span>
                    </>
                  )}
                  <span>Orders</span>
                  <span>Messages</span>
                  <span>Log Out</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>Graphic design</span>
            <span>Videography</span>
            <span>Developer</span>
            <span>Photography</span>
          </div>
        </>
      )}
    </div>
  );
}
