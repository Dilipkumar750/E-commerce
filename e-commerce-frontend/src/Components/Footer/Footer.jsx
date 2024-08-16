import React from "react";
import "./Footer.css";

import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintrest_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
     
      <Link to={"/"}> <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>STONEY</p>
      </div></Link>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <Link to={"https://www.instagram.com/myntra/?hl=en"}>
            <img src={instagram_icon} alt="" />
          </Link>
        </div>
        <div className="footer-icons-container">
          <Link to={"https://in.pinterest.com/#top"}><img src={pintrest_icon} alt="" /></Link>
        </div>
        <div className="footer-icons-container">
          <Link to={"https://whatsapp.smsmyntra.com/contacts-whatsapp-smsmyntra/"}><img src={whatsapp_icon} alt="" /></Link>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
