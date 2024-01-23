import React from "react";

import gymImage from "../../assets/img.png";
import hotelImage from "../../assets/img2.png";
import "./style.css";
import { Con, Text } from "../room/style";

const Main = () => {
  return (
    <div className="Container">
      <div>
        <h1>FACILITIES</h1>
        <Text>
          We want your stay at our lush hotel to be truly unforgettable. That is
          why we give special attention to all of your needs so that we can
          ensure an experience quite uniquw. Luxury hotels offers the perfect
          setting with stunning views for leisure and our modern luxury resort
          facilities will help you enjoy the best of all.
        </Text>
      </div>
      <div>
        <img src={gymImage} alt="GYM_image" className="ImageWrapper" />
      </div>
      <div>
        <img src={hotelImage} alt="hotel_image" className="ImageWrapper" />
      </div>
      <div>
        <img src={gymImage} alt="GYM_image" className="ImageWrapper" />
      </div>
      <div>
        <img src={gymImage} alt="GYM_image" className="ImageWrapper" />
      </div>
      <div>
        <img src={gymImage} alt="GYM_image" className="ImageWrapper" />
      </div>
      <div>
        <img src={gymImage} alt="GYM_image" className="ImageWrapper" />
      </div>
    </div>
  );
};

export default Main;
