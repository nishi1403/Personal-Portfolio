import React from "react";
import me from "../Images/photo.jpg";
import "../Style/about.css";

const About = () => {
  return (
    <div className="about">
      <br />
      <br />
      <div className="container">
        <div className="row">
        <div className="col col-12 col-lg-6">
            <div className="grow">
              <br />

              <img src={me} />
            </div>
          </div>
          <div className="col col-12 col-lg-6">
            <div className="content">
              <h2>ABOUT ME</h2>
              <div className="me-content">
                I am 3rd year B.Tech Student at Marwadi University .<br />
                Along with my passion for Web Development , I do Nature
                Photography.
                <br />
                Other then this I am interested in Content Writing and Space &
                Universe.
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default About;
