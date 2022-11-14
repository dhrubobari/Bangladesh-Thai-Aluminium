import React from "react";
import "../Distributors/Distributors.css";
import SearchForm from "./SearchForm/SearchForm";

function Distributors() {
  return (
    <section>
      <div className="distributor">
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
        <SearchForm></SearchForm>
      </div>
    </section>
  );
}

export default Distributors;
