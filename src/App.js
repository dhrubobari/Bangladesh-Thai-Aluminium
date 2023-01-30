import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Banner2 from "./Components/Banner2/Banner2";
import Distributors from "./Components/Distributors/Distributors";
import Footer from "./Components/Footer/Footer";
import Holdings from "./Components/Portfolio/Holdings";
import Slider from "./Components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Banner2 />
      
      <AboutUs />
      <Distributors />
      <Holdings />
      <Footer />
    </div>
  );
}

export default App;
