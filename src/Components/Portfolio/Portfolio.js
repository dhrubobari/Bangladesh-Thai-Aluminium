import React from 'react'
import "../Portfolio/Portfolio.css";
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

function Portfolio() {
  return (
    <div class="container">
      <div class="heading">
        <h1>Holdings</h1>
        
        <hr class="hrClass"/>
      </div>

      <div class="box">
        <div class="column1">
          <img src={tower1}></img>
          <img src={tower2}></img>
        </div>

        <div class="column2" style={{margin: '0px'}}>
          <img src={tower3} style={{width: '226px', height: '229px'}}></img>
          <img src={tower4} style={{width: '226px', height: '229px'}}></img>
          <img src={tower5} style={{width: '227px', height: '152.3px'}}></img>
        </div>

        <div class="column3" style={{marginRight: '24px'}}>
          <img src={tower7}></img>
          <img src={tower6}></img>
        </div>

        <div class="column4" style={{marginRight: '22px'}}>
          <img src={tower8} style={{width: '238px', height: '422px'}}></img>
          <img src={tower9} style={{width: '238px', height: '192px'}}></img>
        </div>

        <div class="column5" style={{marginRight: '50px'}}>
          <img src={tower10} style={{width: '230px', height: '343px'}}></img>
          <img src={tower11} style={{width: '231px', height: '271.4px'}}></img>
        </div>
      </div>
    </div>
  )
}

export default Portfolio