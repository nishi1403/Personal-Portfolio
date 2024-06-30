import React from "react";
import "../Style/Footer.css";
import footer from "../Images/footer.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="foot-left">
        <h1>LET'S CONNECT</h1>
        <br />
        <a href="https://www.linkedin.com/in/nishi-panchal-a09b64255/">
          <i class="bi bi-linkedin"></i>
        </a>
        &nbsp;
        <b>LinkedIn</b>
        <br />
        <br />
        <a href="https://x.com/nisipanchal1417">
          <i class="bi bi-twitter-x"></i>
        </a>
        &nbsp;
        <b>Twitter</b>
      </div>
      <div className="foot-right">
        <img src={footer} alt="footer" />
      </div>
    </div>
  );
};

export default Footer;
