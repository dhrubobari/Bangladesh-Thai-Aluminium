import React from 'react'
import "../Portfolio/Holdings.css";
import tower1 from "../../assets/portfolio/Rectangle 5.png";
import tower2 from "../../assets/portfolio/Rectangle 12.png";
import tower3 from "../../assets/portfolio/Rectangle 6.png";
import tower4 from "../../assets/portfolio/Rectangle 10.png";
import tower5 from "../../assets/portfolio/Rectangle 14.png";
import tower6 from "../../assets/portfolio/Rectangle 7.png";
import tower7 from "../../assets/portfolio/Rectangle 11.png";
import tower8 from "../../assets/portfolio/image 4.png";
import tower9 from "../../assets/portfolio/Rectangle 13.png";
import tower10 from "../../assets/portfolio/Rectangle 9.png";
import tower11 from "../../assets/portfolio/Rectangle 15.png";

function Portfolio({ forwardedRef }) {
  return (
    <section ref={forwardedRef} class="container">
      <div class="heading">
        <h1 style={{fontWeight: '500'}}>Holdings</h1>
      </div>

      <div class="box">
        <div class="column1">
          <img src={tower1} class="tower1"></img>
          <img src={tower2} class="tower2"></img>
        </div>

        <div class="column2">
          <img src={tower3} class="tower3"></img>
          <img src={tower4} class="tower4"></img>
          <img src={tower5} class="tower5"></img>
        </div>

        <div class="column3">
          <img src={tower7} class="tower6"></img>
          <img src={tower6} class="tower7"></img>
        </div>

        <div class="column4">
          <img src={tower8} class="tower8"></img>
          <img src={tower9} class="tower9"></img>
        </div>

        <div class="column5">
          <img src={tower10} class="tower10"></img>
          <img src={tower11} class="tower11"></img>
        </div>
      </div>
      <li class="copyright">Bangladesh Thai Aluminium © 2012 - 2023</li>
    </section>
  )
}

export default Portfolio;