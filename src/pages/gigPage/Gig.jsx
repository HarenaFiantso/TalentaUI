import React from "react";
import "./Gig.scss";

import profileAvatar from "../../assets/noavatar.jpg";
import star from "../../assets/star.png";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import favicon from "../../assets/message.png";
import { Slider } from "infinite-react-carousel";

import imageOne from "../../assets/gig/BURGER-MENU3.jpeg";
import imageTwo from "../../assets/gig/HOME-RESP_BANNER.jpeg";
import imageThree from "../../assets/gig/MENU-BANNER.jpg";
import imageFour from "../../assets/gig/PIZZA-MENU3.jpg";
import clock from "../../assets/clock.png";
import recycle from "../../assets/recycle.png";
import check from "../../assets/greencheck.png";
import { Button } from "@mui/material";

export default function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">TALENTA | CATEGORY TITLE |</span>
          <h1>A small title of the services</h1>
          <div className="user">
            <img src={profileAvatar} alt="Profile picture" />
            <span>Fiantso Harena</span>
            <div className="stars">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img src={imageOne} alt="image gig" />
            <img src={imageTwo} alt="image gig" />
            <img src={imageThree} alt="image gig" />
            <img src={imageFour} alt="image gig" />
          </Slider>
          <h2>About this Gig</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ex
            nam pariatur explicabo incidunt repellat. Fugit perspiciatis error,
            deleniti, consequuntur distinctio dolores exercitationem
            reprehenderit fugiat et, ut quod eos fuga. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Saepe ex nam pariatur explicabo
            incidunt repellat. Fugit perspiciatis error, deleniti, consequuntur
            distinctio dolores exercitationem reprehenderit fugiat et, ut quod
            eos fuga. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Saepe ex nam pariatur explicabo incidunt repellat. Fugit
            perspiciatis error, deleniti, consequuntur distinctio dolores
            exercitationem reprehenderit fugiat et, ut quod eos fuga.
          </p>
          <div className="seller">
            <h2>About the seller</h2>
            <div className="user">
              <img src={profileAvatar} alt="profile picture" />
              <div className="info">
                <span>Fiantso Harena</span>
                <div className="stars">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <span>5</span>
                </div>
                <Button>Contact Me</Button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">Madagascar</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Sep 2023</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>Lorem, ipsum.</p>
            </div>
          </div>

          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img src={profileAvatar} alt="profile pic" />
                <div className="info">
                  <span>Harena Fiantso</span>
                  <div className="country">
                    <img src={favicon} alt="Country flag" />
                    <span>Madagascar</span>
                  </div>
                </div>
              </div>

              <div className="stars">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, nostrum veritatis. Magni aspernatur maxime quasi
                ullam? Aliquam omnis blanditiis tempore modi neque accusamus,
                quae maxime quaerat nemo id facere ducimus!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src={like} alt="dislike" />
                <span>Yes</span>
                <img src={dislike} alt="like" />
                <span>No</span>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>Sakafo</h3>
            <h2>Ar 12.000ar</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, sit.
          </p>
          <div className="details">
            <div className="item">
              <img src={clock} alt="Clock" />
              <span>2 days Delivery</span>
            </div>
            <div className="item">
              <img src={recycle} alt="Recycle" />
              <span>3 Revisions</span>
            </div>
          </div>

          <div className="features">
            <div className="item">
              <img src={check} alt="check" />
              <span>Lorem, ipsum.</span>
            </div>
            <div className="item">
              <img src={check} alt="check" />
              <span>Lorem, ipsum.</span>
            </div>
            <div className="item">
              <img src={check} alt="check" />
              <span>Lorem, ipsum.</span>
            </div>
          </div>
          <Button>Continue</Button>
        </div>
      </div>
    </div>
  );
}
