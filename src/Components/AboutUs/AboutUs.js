import React from "react";
import "bulma/css/bulma.min.css";
import ReactPlayer from "react-player";
import youtubeThumbnail from "../../assets/about-us/thumbnail.png";

function AboutUs() {
  return (
    <div className="hero-body">
      <div className="columns is-mobile">
        {/* Left Side - Content */}
        <div className="column is-12-mobile is-6-desktop">
          <h1 className="title">About Us</h1>
          <p>
            Our aluminum company is dedicated to crafting high-quality aluminum
            products that excel in durability and performance. With years of
            expertise, we offer innovative solutions to meet your specific
            needs, ensuring excellence in every metal we shape.
          </p>
          <br />
          <p>
            At our aluminum company, sustainability is at the core of
            everything we do. We are committed to eco-friendly practices
            throughout our production process, delivering aluminum solutions
            that not only meet your needs but also contribute to a greener, more
            sustainable future.
          </p>
        </div>

        {/* Right Side - Video */}
        <div className="column is-12-mobile is-6-desktop">
          <div className="video-container">
            <ReactPlayer url='https://www.youtube.com/embed/HyeIrAgrrNY' width="100%" height="315" poster={youtubeThumbnail} light={true} playing controls />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
