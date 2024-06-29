import React from "react";
import "../Style/Core.css";
const Core = () => {
  return (
    <div className="core">
      <h1>CORE SKILLS</h1>
      <br />
      <div className="core-skill">
        <div className="container">
          <div className="row">
            <div className="col col-sm-12 col-lg-6">
              <ul className="typing">
                <li>PUBLIC SPEAKING</li>
                <li>COMMUNICATION</li>
                <li>TEAM WORK</li>
              </ul>
            </div>

            <div className="col col-sm-12 col-lg-6">
              <ul className="typing">
                <li>HARD WORKER</li>
                <li>ORGANISED</li>
                <li>TIME PUNCTUAL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Core;
