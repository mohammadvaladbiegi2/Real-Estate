import React from "react";
import "./MostpopularcitiesCard.css";
export default function MostpopularcitiesCard(props) {
  return (
    <>
      <div className="main-cards ">
        <img src={`../public/assets/images/${props.cover}`} />
        <span className="main-text-box-">{props.title}</span>
      </div>
    </>
  );
}
