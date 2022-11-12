import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE</h1>
        <p>High quality is our first priority</p>

        <p>Copyrights 2022 &copy; Neel Kawitkar</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/gomugomu_no16/">Instagram</a>
        <a href="https://www.linkedin.com/in/neel-kawitkar-73312a156/">LinkedIn</a>
        <a href="https://www.facebook.com/neel.kawitkar">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;