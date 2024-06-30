import React from "react";
import "../Style/Photo.css";
import i1 from "../Images/i1.jpg";
import i2 from "../Images/i2.jpg";
import i3 from "../Images/i3.jpg";
import i4 from "../Images/i4.jpg";
import i5 from "../Images/i5.jpg";
import i6 from "../Images/i6.jpg";
import i7 from "../Images/i7.jpg";
import i8 from "../Images/i8.jpg";
import i9 from "../Images/i9.jpg";
import i10 from "../Images/i10.jpeg";
import i11 from "../Images/i11.jpeg";
import i12 from "../Images/i12.jpg";
import i13 from "../Images/i13.jpeg";
import i14 from "../Images/i14.jpg";
import i15 from "../Images/i15.jpg";
import i16 from "../Images/i16.jpg";
import i17 from "../Images/i17.jpg";
import i18 from "../Images/i18.jpg";
import i19 from "../Images/i19.jpeg";
import i20 from "../Images/i20.jpg";

const Photo = () => {
  return (
    <div className="photos">
      <h1>SOME OF MY PHOTOGRAPHY SKILLS</h1>
      <div className="photo-content">
        <div className="container">
          <div className="row">
            <div className="line1">
            <marquee behaviour='scroll' direction='left'>
              <span>
              <img src={i1} alt="image" />
              </span>
              <span>
              <img src={i2} alt="image" />
              </span>
              <span>
              <img src={i3} alt="image" />
              </span>
              <span>
              <img src={i4} alt="image" />
              </span>
              <span>
              <img src={i5} alt="image" />
              </span>
              <span>
              <img src={i6} alt="image" />
              </span>
              <span>
              <img src={i7} alt="image" />
              </span>
              <span>
              <img src={i8} alt="image" />
              </span>
              <span>
              <img src={i9} alt="image" />
              </span>
              <span>
              <img src={i10} alt="image" />
              </span>
            </marquee>
            </div>
          </div>

          <div className="row">
            <div className="line2">
            <marquee direction='right' behaviour='scroll'>
              <span>
              <img src={i11} alt="image" />
              </span>
              <span>
              <img src={i12} alt="image" />
              </span>
              <span>
              <img src={i13} alt="image" />
              </span>
              <span>
              <img src={i14} alt="image" />
              </span>
              <span>
              <img src={i15} alt="image" />
              </span>
              <span>
              <img src={i16} alt="image" />
              </span>
              <span>
              <img src={i17} alt="image" />
              </span>
              <span>
              <img src={i18} alt="image" />
              </span>
              <span>
              <img src={i19} alt="image" />
              </span>
              <span>
              <img src={i20} alt="image" />
              </span>
            </marquee>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Photo;
