import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faFacebook, faWhatsapp, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import playStore from "../../assets/footer/play-store-logo.svg";
import React from 'react'
import "../Footer/Footer.css"

function Footer() {
  return (
    <footer class="footer">
        <div class="touch">
            <h1>Get In Touch</h1>
            <li>
                <a href="#"><FontAwesomeIcon icon={faYoutube} style={{color: '#FFF', marginRight: '5px'}} /></a>
                <a href="#"><FontAwesomeIcon icon={faFacebook} style={{color: '#FFF', marginRight: '5px'}} /></a>
                <a href="#"><FontAwesomeIcon icon={faWhatsapp} style={{color: '#FFF', marginLeft: '0px'}} /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} style={{color: '#FFF', marginLeft: '5px'}} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} style={{color: '#FFF', marginLeft: '5px'}} /></a>
            </li>
            <li class="mail">info@btaalu.com</li>
            <li class="btalApp">Download Our App<div class="GPS-logo"><img src={playStore} alt="" /></div></li>
        </div>

        <div class="quickLinks">
            <h1>Products</h1>
            <ul>
                <li> <a href="#">Mill Finished Profiles</a></li>
                <li> <a href="#">Anodised Profiles</a></li>
                <li> <a href="#">Powder Coated</a></li>
                <li> <a href="#">Fabricated Item</a></li>
            </ul>
        </div> 

        <div class="regarding">
            <h1>About Us</h1>
            <ul>
                <li>
                    <a href="#">The Board of Directors</a>
                </li>
                <li>
                    <a href="#">Founder and Chairman</a>
                </li>
                <li>
                    <a href="#">Organogram</a>
                </li>
                <li>
                    <a href="#">Legal and Terms</a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer