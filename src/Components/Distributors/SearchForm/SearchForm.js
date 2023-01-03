import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import '../SearchForm/SearchForm.css';

const SearchForm = () => {
  return (

  <div className="search-container">
    <div className="search-element">
      <input type="text" name="name" id="location-search-box" placeholder="Search Your Location" autocomplete="off" />
    </div>

    <div className="search-list" id="search-list">
      <div className="search-list-item" id="search-list-item">
        <div className="search-item-location">
        <h2>Our Head Quarter</h2>
        <h4>BTA Tower (14th Floor), 29 Kemal Ataturk Avenue,<br /> Banani C/A, Road No. 17, Dhaka - 1213.</h4>

        <h4>24 Hours Sales Contacts:</h4>
        <h4 className="numbers">+88 01711666143, +88 01711621092, +88 01757607971, +88 01721867378</h4>
        </div>
      </div>
    </div>
    {/* result container */}
    <div className="result-container">
      <div id="location-info">
        {/* location info here */}
        <iframe width="583" height="279" frameborder="0" src="https://maps.google.com/maps?width=583&amp;height=287&amp;hl=en&amp;q=aamra%20resources%20limited%20Dhaka+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
    </div>
    {/* end of result container */}
    <script>
      const locationSearchBox = document.getElementById('location-search-box');
      const locationSearchBox = document.getElementById('search-list');
      const locationSearchBox = document.getElementById('location-info');
    </script>
  </div>
  );
};

export default SearchForm;