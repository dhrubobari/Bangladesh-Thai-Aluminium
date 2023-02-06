import React from "react";
import "../AboutUs/AboutUs.css";
import ReactPlayer from "react-player";
import thumbnail from '../../assets/about-us/thumbnail.png';

function AboutUs({ forwardedRef }) {
  return (
    <section className="about" ref={forwardedRef}>
      <div className="text">
        <h1 style={{fontWeight: '500'}}>About Us</h1>
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
        <p class="text-p2">
          leap into electronic typesetting, remaining essentially unchanged it
          leap into electronic typesetting, remaining essentially unchanged.
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like PageMaker including lorem ipsum popularised in the 1960s with
          versions of lorem ipsum
        </p>
      </div>
      <div className="iframe-container">
      <iframe width="593" height="340" src="https://www.youtube.com/embed/HyeIrAgrrNY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </section>
  );
}

export default AboutUs;
