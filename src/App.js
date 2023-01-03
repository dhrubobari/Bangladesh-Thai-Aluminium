import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Banner from "./Components/Banner/Banner";
import Banner2 from "./Components/Banner2/Banner2";
import Distributors from "./Components/Distributors/Distributors";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Components/Portfolio/Portfolio";
import Slider from "./Components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Banner2 />
      <Slider />
      <AboutUs />
      <Distributors />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
