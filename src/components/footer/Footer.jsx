import React from "react";
import "./footer.css";
import Footerlogo from "../../Assets/svgs/surgicareLogo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footerText">
        <p> For more info, please follow us on the following platforms:</p>
      </div>

      <ul className="social-media">
        <li className="social-media_links">
          <i class="fa-brands fa-facebook-f" aria="hidden"></i>
        </li>
        <li>
          <i class="fa-brands fa-whatsapp"></i>
        </li>
        <li>
          <i class="fa-brands fa-instagram"></i>
        </li>
        <li>
          <i class="fa-brands fa-twitter"></i>
        </li>
      </ul>

      <div className="mainFooter">
        <div className="footerLinks">
          <div className="surgicarelogo">
            <img src={Footerlogo} alt="surgicare logo" />
          </div>

          <div className="footerLink">
            <p>What we do:</p>
            <ul>
              <li>Sugeries</li>
              <li>Medical consultation</li>
              <li>Personal therapy</li>
            </ul>
          </div>

          <div className="footerLink">
            <p>Get to know us:</p>
            <ul>
              <li>Find your doctors</li>
              <li>Partners & co.</li>
              <li>Clinics</li>
            </ul>
          </div>

          <div className="footerLink">
            <p>Join our team:</p>
            <ul>
              <li>News & events</li>
              <li>Contact us</li>
              <li>Comments & Testimonies</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copyright">
        <ul>
          <li>©2022 Surgicare Consult Hospital. All rights reserved.</li>
          <li>Terms & Conditions.</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <div className="builder">
        Built by Ghap
        <p>+2347054779293</p>
      </div>
    </footer>
  );
};

export default Footer;
