import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faFacebook, faWhatsapp, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import playStore from "../../assets/footer/play-store-logo.svg";
import React from 'react'
import "../Footer/Footer.css"

function Footer() {
  return (
    <footer class="footer">
        <div class="touch">
            <h1 style={{marginLeft: '-4.8px'}}>Get In Touch</h1>
            <li class="icons">
                <a href="https://www.youtube.com/watch?v=HyeIrAgrrNY&t=0s" target="blank"><FontAwesomeIcon icon={faYoutube} style={{color: '#FFF', marginRight: '5px'}} /></a>
                <a href="https://www.facebook.com/profile.php?id=100063911860927" target="blank"><FontAwesomeIcon icon={faFacebook} style={{color: '#FFF', marginRight: '5px'}} /></a>
                <a><FontAwesomeIcon icon={faWhatsapp} style={{color: '#FFF', marginLeft: '0px'}} /></a>
                <a href="https://bd.linkedin.com/company/bangladesh-thai-aluminium-ltd" target="blank"><FontAwesomeIcon icon={faLinkedin} style={{color: '#FFF', marginLeft: '5px'}} /></a>
                <a><FontAwesomeIcon icon={faInstagram} style={{color: '#FFF', marginLeft: '5px'}} /></a>
            </li>
            <li class="mail">info@btaalu.com</li>
            <li class="btalApp">Download Our App<div class="GPS-logo"><a href="https://play.google.com/store/apps/details?id=com.ets.salesassistant.user.btal&hl=en&gl=US&pli=1" target="blank"><img src={playStore} alt="" /></a></div></li>
        </div>

        <div class="quickLinks">
            <h1>Products</h1>
            <ul>
                <li> <a>Mill Finished Profiles</a></li>
                <li> <a>Anodised Profiles</a></li>
                <li> <a>Powder Coated</a></li>
                <li> <a>Fabricated Item</a></li>
            </ul>
        </div> 

        <div class="regarding">
            <h1>About <span class="us">Us</span></h1>
            <ul class="regarding-link">
                <li>
                    <a>The Board of Directors</a>
                </li>
                <li>
                    <a>Founder and Chairman</a>
                </li>
                <li>
                    <a>Organogram</a>
                </li>
                <li>
                    <a>Legal and Terms</a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer