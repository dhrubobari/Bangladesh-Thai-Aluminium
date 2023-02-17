import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react'
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import "../Banner2/Banner2.css";
import logo from "../../assets/banner/logo.png";
import videoBg from "../../assets/banner/720.mp4";
import Slider from '../Slider/Slider';
import AboutUs from '../AboutUs/AboutUs';
import Holdings from "../Portfolio/Holdings";

//Pages
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};
const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
};
const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
};


function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  // scroll to section
  const sliders = useRef(null);
  const aboutUs = useRef(null);
  const holdings = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }
  return (
    <div>
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            <div class="logo"><img src={logo} alt=""/></div>
            <div class="content"><h1>Making Life <span class="content-span">Safer Everyday</span></h1></div>
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={() => scrollToSection(aboutUs)}
              >
                About Us
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={() => scrollToSection(sliders)}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Dealers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={() => scrollToSection(holdings)}
              >
                Holdings
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Innovation
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Opportunity
              </Link>
            </li>          
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
        </div>        
      </nav>
      <video src={videoBg} autoPlay loop muted></video>     
      <div className="overlay"></div>
    </ div>
    <div className="slider">
      <Slider forwardedRef={sliders}/>
    </div>
    <div className="aboutUs">
      <AboutUs forwardedRef={aboutUs}/>
    </div>
    <div className="holdings">
      <Holdings forwardedRef={holdings}/>
    </div>
    </div>
  );
}

function Banner2() {

  return (
    <>
      <NavBar />  

      <div className="pages">      
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </>
  );
}

export default Banner2;