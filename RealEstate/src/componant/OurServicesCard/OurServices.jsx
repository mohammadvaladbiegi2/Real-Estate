import React from "react";
import "./OurServices.css";

export default function OurServices() {
  return (
    <div className="main-card bg-color2">
      <img src="../public/assets/images/services_cards_family_relocation_image.png" />
      <div className="container-title">
        <span className="title-card">Family Relocation</span>
      </div>
      <span className="desc">
        With strategic planning, we simplify the moving process so you and your
        family can feel safe and confident.
      </span>
      <button className="btn-find">Find Out More</button>
    </div>
  );
}
