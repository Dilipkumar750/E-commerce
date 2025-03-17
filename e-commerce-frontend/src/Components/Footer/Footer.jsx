import React from "react";
import { Link } from "react-router-dom";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintrest_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "24px", paddingTop: "20px", backgroundColor: "#f3f4f6" }}>
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <img src={footer_logo} alt="Logo" style={{ width: "50px" }} />
        <p style={{ color: "#1f2937", fontSize: "24px", fontWeight: "bold" }}>STONEY</p>
      </Link>
      <ul style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", listStyle: "none", gap: "40px", color: "#111827", fontSize: "16px", padding: 0 }}>
        <li style={{ cursor: "pointer" }}>Company</li>
        <li style={{ cursor: "pointer" }}>Products</li>
        <li style={{ cursor: "pointer" }}>Offices</li>
        <li style={{ cursor: "pointer" }}>About</li>
        <li style={{ cursor: "pointer" }}>Contact</li>
      </ul>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="https://www.instagram.com/myntra/?hl=en" style={{ padding: "10px", backgroundColor: "#e5e7eb", border: "1px solid #d1d5db", borderRadius: "8px" }}>
          <img src={instagram_icon} alt="Instagram" style={{ width: "25px" }} />
        </Link>
        <Link to="https://in.pinterest.com/#top" style={{ padding: "10px", backgroundColor: "#e5e7eb", border: "1px solid #d1d5db", borderRadius: "8px" }}>
          <img src={pintrest_icon} alt="Pinterest" style={{ width: "25px" }} />
        </Link>
        <Link to="https://whatsapp.smsmyntra.com/contacts-whatsapp-smsmyntra/" style={{ padding: "10px", backgroundColor: "#e5e7eb", border: "1px solid #d1d5db", borderRadius: "8px" }}>
          <img src={whatsapp_icon} alt="WhatsApp" style={{ width: "25px" }} />
        </Link>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", width: "100%", paddingBottom: "30px", color: "#374151", fontSize: "14px" }}>
        <hr style={{ width: "80%", border: "none", borderRadius: "10px", height: "2px", backgroundColor: "#d1d5db" }} />
        <p>Copyright &copy; {currentYear} - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;