import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
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
            </li>
            <li class="mail">info@btaalu.com</li>
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
                <li>
                    <address style={{color: 'silver'}}>29 Kemal Ataturk Ave, Dhaka 1212</address>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer