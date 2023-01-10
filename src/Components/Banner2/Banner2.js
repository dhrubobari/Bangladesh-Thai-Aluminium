import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import "../Banner2/Banner2.css";
import logo from "../../assets/banner/logo.png";
import videoBg from "../../assets/banner/720.mp4"

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
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />

      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            <img src={logo} alt="" class="logo" />
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/blog"
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
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Holdings
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/contact"
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
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Opportunity
              </Link>
            </li>

            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>
      <video src={videoBg} autoPlay loop muted></video>
      <div className="overlay"></div>
      <div>
        <h1></h1>
      </div>

    </ div>
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