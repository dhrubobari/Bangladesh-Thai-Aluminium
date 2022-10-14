import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import videoBg from "../../assets/videoBg.mp4";
import "./Header.css";

const Header = () => {
  return (
    <section className="main-banner">
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

export default Header;
