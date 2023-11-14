import React from "react";
import "./MostpopularcitiesCard.css";
export default function MostpopularcitiesCard(props) {
  return (
    <>
      <div className="main-cards ">
        <img src={`../public/assets/images/${props.cover}`} />
        <span className="main-text">{props.title}</span>
      </div>
    </>
  );
}
