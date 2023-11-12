import React from "react";
import "./About.css";

export default function About() {
   return <section className="bg-color1 flex flex-col max-w-[1600px] mx-auto">
      <div className="flex">
         <div className="absolute bgShadow h-[280px] min-[1000px]:h-[530px] bg-gradient-to-b min-[1000px]:bg-gradient-to-r from-color6 from-60% via-color7 via-80% to-100% z-10 flex justify-center items-center">
            <span className="AvenirNext uppercase text-4xl font-semibold text-black">Who we are</span>
         </div>
         <div className="bgImageAbout min-[1000px]:right-0 h-[800px] min-[1000px]:h-[530px] w-full bg-no-repeat bg-center min-[1000px]:bg-right"></div>
      </div>
      <div className="flex flex-col gap-8 justify-center  max-md:text-justify py-20  max-md:py-[60px] max-[1000px]:px-[110px] max-md:px-16 max-[480px]:px-11 bg-color1 text-color6 MontserratMedium leading-8 text-xl min-[1000px]:w-[780px] self-center font-semibold">
         <span>PAM Consulting is a team of dedicated professionals, located in Cyprus.
            Our services rely upon the idea that the sunny island of Cyprus can be the solution families and businesses are searching for.</span>
         <span>We understand the challenges that come with moving from one location to another and the difficulties that may arise. For this reason, we aim to transform family and business relocation into a hassle-free experience for you and yours.</span>
      </div>
      <div className="flex max-xl:flex-col items-center justify-center gap-5 max-xl:gap-10 bg-color6 ps-[130px] max-xl:px-[110px] max-md:px-0 py-20 max-xl:pb-0">
         <div className="flex flex-col text-black gap-10 max-md:w-4/5">
            <h2 className="uppercase text-[40px] font-semibold AvenirNext">What we do</h2>
            <div className="text-base font-normal flex flex-col gap-8 AvenirNextLight">
               <p className="leading-6">
                  We provide solutions based on strategic planning that responds to your needs.  Our business relocation services prioritize your business goals and ambitions. Changing your businesses’ location is a big step towards progress and it is essential that everything goes as smooth as possible. While you focus on boosting your company’s strategies, we take care of everything else.
               </p>
               <p className="leading-6">
                  The decision to move from one place to another with your family is life-changing. As you expect this change to be for the better, our family relocation services make sure to consider every aspect of your family’s requirements.  As you settle in Cyprus, we also offer you the opportunity to discover different investment plans that can further enable you to expand your financial and business horizons.
               </p>
            </div>
         </div>
         <div className="w-[710px] h-[460px] max-md:h-[450px] max-md:bg-center bg-cover max-xl:w-[768px] max-md:w-full flex-none bgChess"></div>
      </div>
   </section>;
}
