import React from "react";
import "../AboutUs/AboutUs.css";
import ReactPlayer from "react-player";
import thumbnail from '../../assets/about-us/thumbnail.png';

function AboutUs() {
  return (
    <section className="about">
      <div className="text">
        <h1>About Us</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. only five centuries, but also the
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged it was also
        </p>
        <p>
          leap into electronic typesetting, remaining essentially unchanged it
          leap into electronic typesetting, remaining essentially unchanged.
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like PageMaker including lorem ipsum popularised in the 1960s with
          versions of lorem ipsum
        </p>
      </div>
      <div className="player-wrapper">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=HyeIrAgrrNY&t=1s"
        width="593px"
        height="340px"
        playing
        light={thumbnail}
      />
      </div>
    </section>
  );
}

export default AboutUs;
