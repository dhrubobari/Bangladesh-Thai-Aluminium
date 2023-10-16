import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faWhatsapp,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import playStore from "../../assets/footer/play-store-logo.svg";
import React from "react";
import "../Footer/Footer.css";

function Footer() {
  return (
    <section className="hero ">
      <footer class="footer">
        <div class="columns">
          <div class="touch column">
            <h3 className="has-text-white">Get In Touch</h3>
            <div className="social">
              <a
                href="https://www.youtube.com/watch?v=HyeIrAgrrNY&t=0s"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ color: "#FFF", marginRight: "5px" }}
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063911860927"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#FFF", marginRight: "5px" }}
                />
              </a>
              <a>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ color: "#FFF", marginLeft: "0px" }}
                />
              </a>
              <a
                href="https://bd.linkedin.com/company/bangladesh-thai-aluminium-ltd"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#FFF", marginLeft: "5px" }}
                />
              </a>
              <a>
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#FFF", marginLeft: "5px" }}
                />
              </a>
            </div>
            <p className="mt-3 has-text-white">info@btaalu.com</p>
            <p className="has-text-white">Download Our App<span className="ml-2"><a href="https://play.google.com/store/apps/details?id=com.ets.salesassistant.user.btal&hl=en&gl=US&pli=1" target="blank"><img src={playStore} width="17" height="17" alt="" /></a></span></p>
          </div>
          <div class="column is-one-quarter">
            <h4 className="is-size-5 mb-3 has-text-white">Products</h4>
            <ul>
                <li> <a>Mill Finished Profiles</a></li>
                <li> <a>Anodised Profiles</a></li>
                <li> <a>Powder Coated</a></li>
                <li> <a>Fabricated Item</a></li>
            </ul>
          </div>
          <div class="column is-one-quarter">
            <h4 className="is-size-5 mb-3 has-text-white">About Us</h4>
            <ul>
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
        </div>
      </footer>
    </section>
  );
}

export default Footer;
