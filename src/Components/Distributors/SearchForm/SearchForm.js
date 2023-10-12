import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../SearchForm/SearchForm.css";

const SearchForm = () => {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search Your Location"
          autocomplete="off"
        />
        <input type="submit" value="Search" class="search" />
        <FontAwesomeIcon
          icon={faLocationDot}
          style={{ color: "white", marginTop: "8px", marginRight: "12px" }}
        />
      </form>
      <div class="address">
        <h2 className="is-size-4 has-text-weight-semibold mb-3">Our Headquarter</h2>
        <h5 className="has-text-weight-light mb-3">
          BTA Tower 14th Floor, 29 Kemal Ataturk Avenue, Banani C/A, Road No. 17, Dhaka - 1213.
        </h5>
        <h4>24 Hours Sales Contacts:</h4>
        <h4 className="numbers">
          +88 01711666143, +88 01711621092, +88 01757607971, +88 01721867378
        </h4>
      </div>
      <div class="map-wrapper">
        <iframe
          width="100%"
          height="275"
          frameborder="0"
          src="https://maps.google.com/maps?width=583&amp;height=287&amp;hl=en&amp;q=aamra%20resources%20limited%20Dhaka+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
};

export default SearchForm;
