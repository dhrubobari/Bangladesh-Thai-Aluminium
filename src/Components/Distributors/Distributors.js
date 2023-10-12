import React from "react";
import "../Distributors/Distributors.css";
import Map from "./Map/Map";
import SearchForm from "./SearchForm/SearchForm";

function Distributors() {
  return (
    <div className="hero-body">
      <div className="columns">
        <div className="column is-12-mobile is-6-desktop">
          <h1 className="title">Marketplace</h1>
          <p>
            Our aluminum marketplace revolutionizes the industry. We bring
            together top aluminum manufacturers and discerning customers,
            offering a wide spectrum of high-quality aluminum products, from
            sheets to profiles. Our platform ensures efficiency, reliability,
            and innovation, forging a brighter future for the aluminum
            industry.
          </p>
          <SearchForm />
        </div>
        <div className="column is-6-desktop">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Distributors;
