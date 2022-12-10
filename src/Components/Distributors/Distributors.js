import React from "react";
import "../Distributors/Distributors.css";
import Location from "./Location/Location";
import Map from "./Map/Map";
import SearchForm from "./SearchForm/SearchForm";

function Distributors() {
  return (
    <section className="distributor">
    <div>
      <div>
        <div className="about-distributors">
          <h1>Distributors</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets It was popularised in the 1960s
            with the release of letraset sheets release of letraset sheets
          </p>
        </div>
      </div>
      <div>
      <SearchForm />
      </div>
      <div className="address">
        <h2>Our Head Quarter</h2>
        <h4>BTA Tower (14th Floor), 29 Kemal Ataturk Avenue,<br /> Banani C/A, Road No. 17, Dhaka - 1213.</h4>
        <h4>24 Hours Sales Contacts:</h4>
        <h4 className="numbers">+88 01711666143, +88 01711621092, +88 01757607971, +88 01721867378</h4>
      </div>
      <div>
      <Location />  
      </div>      
    </div>
    <div>
      <Map />
    </div>
    </section>
  );
}

export default Distributors;
