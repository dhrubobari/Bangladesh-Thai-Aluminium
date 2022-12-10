import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import '../SearchForm/SearchForm.css';

const SearchForm = () => {
  return (
    <form>
      <label>
        <input type="text" name="name" placeholder="Search Your Location" autocomplete="off" />
      </label>
      <input type="submit" value="Search" className="search" />
      <FontAwesomeIcon icon={faLocationDot} style={{color: '#ffffff', marginTop: '9px', marginRight: '11px'}} />
    </form>
  );
};

export default SearchForm;
