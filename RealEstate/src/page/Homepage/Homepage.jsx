import React from "react";
import image from "../../../public/assets/images/HomePageWhoWeAre.png"
import "./Homepage.css";

export default function Homepage() {
   return <section className="bgHomePageWhoWeAre flex justify-between gap-4 max-xl:gap-[44px] max-xl:flex-col px-[130px] max-md:px-20 max-[480px]:px-5 py-10">
      <div className="flex flex-col w-[480px] max-xl:w-full mt-[23px]">
         <div className="flex flex-col gap-1 relative">
            <span className="uppercase AvenirNext text-4xl text-color6 leading-[40px]">Who We Are</span>
            <div className="w-[447px] h-[3px] bg-color4 absolute -bottom-1 -left-[130px]"></div>
         </div>
         <div className="flex flex-col gap-5 AvenirNextLight text-base text-color6 font-normal mt-6">
            <span className="leading-6 tracking-wide">
               PAM Consulting is built upon a team of motivated professionals aiming to provide families and businesses the services they need to relocate to the island of Cyprus.
            </span>

            <span className="leading-6 tracking-wide">
               We understand the challenges of deciding to relocate and this is why we prioritize our clients’ needs by making sure that the whole relocation process is as smooth and simple
               as possible.
            </span>
         </div>
         <div className="self-start leading-8 font-bold cursor-pointer text-xl MontserratMedium mt-[56px] text-color1 bg-color3 py-[9px] px-6 rounded-[30px]">More about us</div>
      </div>
      <div className="flex max-sm:flex-col gap-[33px] max-sm:gap-[14px] w-[580px] max-sm:w-full h-[440px] max-sm:h-full max-sm:items-center bg-color7 rounded-3xl p-5">
         <div className="flex-none">
            <img src={image} alt="" />
         </div>
         <div className="flex flex-col max-sm:items-center gap-4 mt-6 max-sm:mt-0">
            <div className="text-xl uppercase text-color1 MontserratMedium font-semibold">FOUNDER</div>
            <div className="text-base text-color5 AvenirNextLight">Anastasia Papaharidemou</div>
            <div className="self-start max-sm:self-center leading-5 font-semibold cursor-pointer text-lg MontserratMedium text-color1 bg-color3 w-[147px] h-[50px] flex justify-center items-center rounded-[30px]">Contact</div>
         </div>
      </div>
   </section>;
}
