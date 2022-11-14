import React from "react";

const SearchForm = () => {
  return (
    <form>
      <label>
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchForm;
