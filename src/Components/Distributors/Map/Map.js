import React from "react";
import "../Map/Map.css";
import dhaka from "../../../assets/map/divisions/Dhaka.png";
import chittagong from "../../../assets/map/divisions/Chittagong.png";
import mymensingh from "../../../assets/map/divisions/Mymensingh.png";
import rajshahi from "../../../assets/map/divisions/Rajshahi.png";
import khulna from "../../../assets/map/divisions/Khulna.png";
import rangpur from "../../../assets/map/divisions/Rangpur.png";
import sylhet from "../../../assets/map/divisions/Sylhet.png";
import barishal from "../../../assets/map/divisions/Barishal.png";

function Map() {
  return (
    <div className="country_map_container">
      <div>
        <div class="divisionRp">
          <img src={rangpur} id="rangpur" />
        </div>
        <div class="divisionM">
          <img src={mymensingh} id="mymensingh" />
        </div>
        <div class="divisionK">
          <img src={khulna} id="khulna" />
          <li>Khulna</li>
        </div>
        <div class="divisionD">
          <img src={dhaka} id="dhaka" />
          <li>Dhaka</li>
          <div class="divisionM2">
            <li>Mymensingh</li>
          </div>
        </div>
        <div class="divisionB">
          <img src={barishal} id="barishal" />
          <li>Barishal</li>
        </div>
        <div class="divisionR">
          <img src={rajshahi} id="rajshahi" />
          <li>Rajshahi</li>
          <div class="divisionRp2">
            <li>Rangpur</li>
          </div>
        </div>
        <div class="divisionS">
          <img src={sylhet} id="sylhet" />
          <li>Sylhet</li>
        </div>
        <div class="divisionC">
          <img src={chittagong} id="chittagong" /> 
        </div>
      </div>
    </div>
  );
}

export default Map;