import React from "react";

const DescriptionBox = () => {
  return (
    <div style={{ margin: "120px 170px" }}>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            fontWeight: "600",
            width: "171px",
            height: "70px",
            border: "1px solid #d0d0d0",
          }}
        >
          Description
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            fontWeight: "600",
            width: "171px",
            height: "70px",
            border: "1px solid #d0d0d0",
            background: "#FBFBFB",
            color: "#555",
          }}
        >
          Reviews (122)
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          border: "1px solid #D0D0D0",
          padding: "48px",
          paddingBottom: "70px",
        }}
      >
        <p>
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individuals can
          showcase their products, interact with customers, and conduct
          transactions without the need for a physical presence. E-commerce
          websites have gained immense popularity due to their convenience,
          accessibility, and the global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
