import React from "react";
import "./CardChooseCprus.css";

export default function CardChooseCprus({ bg, cover, title, desc }) {
  return (
    <div className="card flex flex-col justify-center items-center w-[180px] md:w-[280px] gap-6">
      <div
        className="container-icon flex w-24 md:w-40 md:h-40 h-24 p-5 justify-center items-center"
        style={{
          backgroundImage: bg,
        }}
      >
        <img
          src={cover}
          className="icon-card w-14 h-14 md:w-24 md:h-24 flex-shrink-0"
        />
      </div>
      <div className="container-desc flex flex-col items-center self-stretch py-[10px] gap-1">
        <h4 className="title-desc flex w-48 h-16 flex-col justify-center text-center text-xl not-italic font-semibold leading-8 ">
          {title}
        </h4>
        <h5 className="self-stretch text-center text-base not-italic font-normal leading-6 desc-desc">
          {desc}
        </h5>
      </div>
    </div>
  );
}
