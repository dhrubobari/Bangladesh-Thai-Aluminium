import "./App.css";
import "bulma/css/bulma.min.css";
import logo from "./assets/banner/logo.png";
import videoBg from "./assets/banner/720.mp4";
import Slider from "./Components/Slider/Slider";
import AboutUs from "./Components/AboutUs/AboutUs";
import Distributors from "./Components/Distributors/Distributors";
import Holdings from "./Components/Portfolio/Holdings";

function App() {
  return (
    <div>
      <div className="hero is-fullheight banner">
        {/* Banner Overlay */}
        <video src={videoBg} autoPlay muted loop />
        <div className="overlay"></div>
        <div></div>
        <div className="hero-head">
          <nav className="navbar p-3">
            <div className="container">
              <div className="navbar-brand">
                {/* Logo */}
                <a className="logo-item" href="#">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
              {/* Links */}
              <div className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item" href="#">
                    About Us
                  </a>
                  <a className="navbar-item" href="#">
                    Products
                  </a>
                  <a className="navbar-item" href="#">
                    Dealers
                  </a>
                  <a className="navbar-item" href="#">
                    Holdings
                  </a>
                  <a className="navbar-item" href="#">
                    Innovation
                  </a>
                  <a className="navbar-item" href="#">
                    Opportunity
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container">
            {/* Banner Content */}
            <h1 className="title">
              Making Life Safer <br /> Everyday!
            </h1>
          </div>
        </div>
      </div>
      <Slider />
      <AboutUs />
      <Distributors />
      <Holdings />
    </div>
  );
}

export default App;
