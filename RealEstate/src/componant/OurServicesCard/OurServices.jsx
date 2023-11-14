import React from "react";
import "./OurServices.css";

export default function OurServices(props) {
  return (
    <div className="main-card w-[380px] md:w-[360px] lg:w-[380px]">
      <img src={props.cover} className="img-card" />
      <div className="flex flex-col items-center gap-[20px]">
        <span className="w-[380px] md:w-[360px] lg:w-[380px] h-16 text-center text-3xl not-italic font-semibold leading-8 uppercase title-card">
          {props.title}
        </span>
        <span className="desc-card flex h-16 flex-col justify-center w-[320px] text-center text-base not-italic font-normal leading-6">
          {props.desc}
        </span>
        <div className="flex w-48 h-12 justify-center items-center">
          <button className="btn-find flex justify-center items-center gap-[20px] py-4 px-5">
            <a
              href="#"
              className="btn-link flex w-40 h-4 flex-col justify-center text-center text-xl not-italic font-semibold leading-8"
            >
              Find Out More
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
