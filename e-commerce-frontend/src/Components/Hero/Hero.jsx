import React from "react";
import { Link } from "react-router-dom";
import hero_image from "../Assets/girl-with-bag.png";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import user_review from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div
      style={{
        minHeight: "90vh",
        background: "linear-gradient(180deg, #fdf1ff, #e1ffea22 60%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 10%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left Section */}
      <div style={{ maxWidth: "50%", lineHeight: "1.2", position: "relative" }}>
        <h2 style={{ color: "#333", fontSize: "20px", fontWeight: "600" }}>
          Trendy Collection's
        </h2>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "85px",
                fontWeight: "700",
                color: "#171717",
              }}
            >
              Building
            </p>
            <img src={hand_icon} alt="" style={{ width: "60px" }} />
          </div>
          <p
            style={{
              fontSize: "85px",
              fontWeight: "700",
              color: "#171717",
            }}
          >
            a better you
          </p>
        </div>

        <p
          style={{
            color: "#555",
            fontSize: "16px",
            marginTop: "10px",
          }}
        >
          Anyone can dream big, but no one can build your outfit as long as
          you're using our Exciting outfits.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            gap: "15px",
          }}
        >
          <Link to="/">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "15px 30px",
                background: "#ff4141",
                color: "white",
                fontSize: "18px",
                fontWeight: "500",
                borderRadius: "50px",
                cursor: "pointer",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                transition: "0.3s ease-in-out",
              }}
            >
              Start Shopping
            </div>
          </Link>
        </div>

        {/* User Review */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "30px",
            background: "#fff",
            padding: "15px",
            borderRadius: "15px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            width: "280px",
          }}
        >
          <img
            src={user_review}
            alt="user"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          <div>
            <p style={{ fontSize: "14px", fontWeight: "600", margin: "0" }}>
              Hannah
            </p>
            <p style={{ fontSize: "12px", color: "#777", margin: "0" }}>
              “I just love Ecstasy! The best outfits for every occasion.”
            </p>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div
        style={{
          position: "relative",
          maxWidth: "40%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={hero_image}
          alt="hero"
          style={{
            width: "450px",
            borderRadius: "20px",
            boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
          }}
        />
      </div>

      {/* Floating Elements */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "60%",
          width: "150px",
          height: "150px",
          background: "rgba(255, 165, 0, 0.1)",
          borderRadius: "50%",
          filter: "blur(30px)",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "20%",
          width: "100px",
          height: "100px",
          background: "rgba(255, 0, 150, 0.1)",
          borderRadius: "50%",
          filter: "blur(20px)",
        }}
      ></div>
    </div>
  );
};

export default Hero;
