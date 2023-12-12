import React from "react";
import "./FrequentlyAskedQuestionsCard.css";

export default function FrequentlyAskedQuestionsCard() {
  return (
    <>
      <div className="Nav-container bg-color6 cursor-pointer w-[320px] sm:w-[370px]">
        <img src="../public/assets/images/q&a_slider_card1_image.png" />
        <span className="main-text w-[290px] sm:w-[320px] text-[18px] sm:text-[20px]">
          Question: How is the business environment in Cyprus?
        </span>
        <span className="second-text w-[280px] sm:w-[320px]">
          Answer: Cyprus is considered to be one of the most business-oriented
          countries of the EU, offering business entrepreneurs a variety of
          opportunities to expand their corporate dreams andambitions.
        </span>
      </div>
    </>
  );
}
