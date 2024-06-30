import React from "react";
import "../Style/project.css";
import isro from '../Images/isro.PNG'
import universe from '../Images/universay.PNG'
import htm from '../Images/htm.PNG'
const Project = () => {
  return (
    <div className="project">
      <h1>PROJECTS</h1>
      <br/>
      <div className="all-content">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-lg-4">
            <div class="card-container">
              <div class="card">
                <div class="img-content"><img src={isro}/></div>
                <div class="content">
                  <p class="heading">LET US KNOW ISRO</p>
                  <p>An informative website for all missions of ISRO.Built using HTML,CSS,Bootstrap.

                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-12 col-lg-4">
            <div class="card-container">
              <div class="card">
                <div class="img-content"><img src={universe}/></div>
                <div class="content">
                  <p class="heading">UNIVERSE SAY</p>
                  <p>An informative website of celestial bodies. Built using HTML/CSS/Bootstrap.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-12 col-lg-4">
            <div class="card-container">
              <div class="card">
                <div class="img-content"><img src={htm}/></div>
                <div class="content">
                  <p class="heading">DEMO WEB FOR HTM</p>
                  <p>It is a demo website for HTM5.0 , it is not an official website.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <br/><br/>
    </div>
  );
};

export default Project;
