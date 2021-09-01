import React from "react";
import video from "../../assets/video.mp4";
import "./hero.css";
const Hero = () => {
  return (
    <div className="video-body">
      <div className="video-row">
        <video
          src={video}
          src={video}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />{" "}
      </div>
    </div>
  );
};

export default Hero;
