import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Banner from "./Components/Banner/Banner";
import Distributors from "./Components/Distributors/Distributors";
import Slider from "./Components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Slider></Slider>
      <AboutUs></AboutUs>
      <Distributors></Distributors>
    </div>
  );
}

export default App;
