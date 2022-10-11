import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.jpg";
import videoBg from "../../assets/videoBg.mp4";
import "./Header.css";

const Header = () => {
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
      <div class="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
        <h1>
          Making Life Safer Everyday
        </h1>
      {/* <nav className="header">
        <img src={logo} alt="" />
        {/* <video src={videoBg}></video>
        <div>
            <Link >About Us</Link>
            <Link >Products</Link>
            <Link >Dealers</Link>
            <Link >Sustainability</Link>
            <Link >Innovation</Link>
            <Link >Opportunity</Link>
        </div>
    </nav> */}
    </section>
  );
};

export default Header;
