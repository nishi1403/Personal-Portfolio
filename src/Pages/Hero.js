import React from "react";
import "../Style/Hero.css";
import astro from '../Images/astro.png'

const Hero = () => {
  return (
    <div className="hero">
      <br />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-lg-6">
            <div className="hero-content">
              <h3>Hello &#128075;</h3>

              <h1>
                <span>I am </span>NISHI
                <br /> PANCHAL
              </h1>

              <div className="typewriter">
                <h1>FRONTEND DEVELOPER.</h1>
              </div>
            </div>
          </div>
          <div className="col col-12 col-lg-6">
            <img src={astro}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
