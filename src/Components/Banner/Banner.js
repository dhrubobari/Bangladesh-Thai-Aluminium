import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/banner/logo.png";
import videoBg from "../../assets/banner/videoBg.mp4";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="showcase">
      <nav className="header">
        <img src={logo} alt="" />
        <div>
          <Link>About Us</Link>
          <Link>Products</Link>
          <Link>Dealers</Link>
          <Link>Sustainability</Link>
          <Link>Innovation</Link>
          <Link>Opportunity</Link>
        </div>
      </nav>
      <video src={videoBg} autoPlay loop muted />
      <div className="overlay"></div>
      <div className="content-div">
        <h1 className="content">
          <span className="making-life">Making Life</span><br></br>Safer Everyday
        </h1>
      </div>  
    </section>
  );
};

export default Banner;