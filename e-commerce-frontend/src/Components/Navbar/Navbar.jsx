import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/nav_dropdown.png";

const Navbar = () => {
  let [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.style.display =
      menuRef.current.style.display === "flex" ? "none" : "flex";
    e.target.style.transform =
      e.target.style.transform === "rotate(90deg)" ? "rotate(-90deg)" : "rotate(90deg)";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 1px 3px -2px black",
        padding: "15px 70px",
        position: "relative",
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        onClick={() => setMenu("shop")}
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <img src={logo} alt="logo" style={{ width: "45px" }} />
        <p style={{ color: "#171717", fontSize: "28px", fontWeight: "600" }}>
          STONEY
        </p>
      </Link>

      {/* Dropdown Menu (For Mobile) */}
      <img
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
        style={{
          display: "none",
          width: "30px",
          cursor: "pointer",
          transition: "0.5s",
        }}
        className="nav-dropdown"
      />

      {/* Navigation Links */}
      <ul
        ref={menuRef}
        style={{
          display: "flex",
          alignItems: "center",
          listStyle: "none",
          gap: "40px",
          color: "#626262",
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        {["shop", "mens", "womens", "kids"].map((item) => (
          <li
            key={item}
            onClick={() => setMenu(item)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "3px",
              cursor: "pointer",
            }}
          >
            <Link to={`/${item === "shop" ? "" : item}`} style={{ textDecoration: "none" }}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
            {menu === item ? (
              <hr
                style={{
                  border: "none",
                  width: "80%",
                  height: "3px",
                  borderRadius: "10px",
                  background: "#FF4141",
                }}
              />
            ) : null}
          </li>
        ))}
      </ul>

      {/* Login & Cart */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
        }}
      >
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
            style={{
              width: "130px",
              height: "45px",
              outline: "none",
              border: "1px solid #7a7a7a",
              borderRadius: "75px",
              color: "#515151",
              fontSize: "20px",
              fontWeight: "500",
              background: "white",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseDown={(e) => (e.target.style.background = "#f3f3f3")}
            onMouseUp={(e) => (e.target.style.background = "white")}
          >
            Logout
          </button>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button
              style={{
                width: "130px",
                height: "45px",
                outline: "none",
                border: "1px solid #7a7a7a",
                borderRadius: "75px",
                color: "#515151",
                fontSize: "20px",
                fontWeight: "500",
                background: "white",
                cursor: "pointer",
              }}
              onMouseDown={(e) => (e.target.style.background = "#f3f3f3")}
              onMouseUp={(e) => (e.target.style.background = "white")}
            >
              Login
            </button>
          </Link>
        )}

        {/* Cart */}
        <Link to="/cart">
          <img src={cart_icon} alt="cart" style={{ width: "35px" }} />
        </Link>
        <div
          style={{
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-30px",
            marginLeft: "-40px",
            fontSize: "14px",
            background: "red",
            color: "white",
          }}
        >
          {getTotalCartItems()}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
        @media (max-width: 900px) {
          .nav-menu {
            gap: 15px;
          }
        }

        @media (max-width: 750px) {
          .nav-dropdown {
            display: block !important;
            rotate: -90deg;
            transition: 0.5s;
          } 

          .nav-menu {
            display: none;
            height: 80px;
            width: 100%;
            position: absolute;
            background-color: white;
            justify-content: center;
            top: 60px;
            left: 0;
          }

          .nav-cart-count {
            margin-left: -25px;
          }
        }

        @media (max-width: 500px) {
          .nav-logo img {
            width: 30px;
          }
          .nav-logo p {
            font-size: 18px;
          }
          .nav-menu {
            height: 70px;
            top: 60px;
          }
          .nav-login-cart {
            transform: scale(0.8);
          } 
        }
        `}
      </style>
    </div>
  );
};

export default Navbar;
