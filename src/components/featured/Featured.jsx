import React, { useEffect, useRef } from "react";
import "./Featured.scss";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

import bannerPic from "../../assets/banner.png";
import searchIcon from "../../assets/search.png";

import { Button } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

export default function Featured() {
  /* TypeJS configuration */
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["freelance services"],
      typeSpeed: 50,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  /* Data aos initilization */
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="featured">
      <div className="container">
        <div className="left" data-aos="fade-down">
          <span className="text">
            Find the perfect
            <br /> <span ref={el}></span>
            <br /> for your business.
          </span>
          <div className="search">
            <div className="searchInput">
              <img src={searchIcon} alt="search Icon" />
              <input type="text" placeholder="Try building mobile app" />
            </div>
            <Button
              sx={{
                textTransform: "capitalize",
                borderRadius: "0 5px 5px 0",
                fontFamily: "Poppins",
              }}
            >
              Search
            </Button>
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
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={2} />
            <directionalLight position={[1, 6, 10]} />
            <Sphere args={[1, 100, 200]} scale={1.8}>
              <MeshDistortMaterial
                color="#c83560"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <img src={bannerPic} alt="banner" />
        </div>
      </div>
    </div>
  );
}
