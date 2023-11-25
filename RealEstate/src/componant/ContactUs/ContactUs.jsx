import React from "react";
import callImage from "../../../public/assets/images/contact-tel-icon.png";
import emailImage from "../../../public/assets/images/contact-email-icon.png";
import "./ContactUs.css";
export default function ContactUs() {
  return (
    <section className="bgStyle flex flex-col items-center gap-[40px] md:gap-[60px] h-full w-full pb-20 pt-[120px] px-8 md:px-32">
      <div className="flex flex-col items-center gap-5 mt-16">
        <span className="uppercase text-4xl AvenirNext text-black font-semibold">
          Contact Us
        </span>
        <span className="h-1 w-[300px] min-[450px]:w-96 bg-color4"></span>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-[6px]">
          <span className="w-10 h-10 bgStyleIcon py-[6px] ps-[6.5px] pe-[5.5px]">
            <img src={callImage} alt="" />
          </span>
          <span className="MontserratMedium text-xl font-semibold text-color1">
            +357 9056759
          </span>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <span className="w-10 h-10 bgStyleIcon p-[6px]">
            <img src={emailImage} alt="" />
          </span>
          <span className="MontserratMedium text-xl font-semibold text-color1">
            contact@pamrelocation.com
          </span>
        </div>
      </div>
      <div className="bg-opacity-50 bg-color3 rounded-[60px] w-full md:w-[600px] min-[1000px]:w-full py-[34px] flex flex-col items-center gap-5">
        <div className="uppercase text-[28px] AvenirNext font-semibold text-black">
          send inquiry
        </div>
        <div className="flex flex-col items-center w-full md:w-[580px] gap-[14px] px-[10px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-[13px] w-full">
            <div className="bgStyleInput py-3 overflow-hidden px-6 AvenirNextLight text-base">
              <input
                className="outline-none"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="bgStyleInput py-3 overflow-hidden px-6 AvenirNextLight text-base">
              <input
                className="outline-none"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="bgStyleInput py-3 overflow-hidden px-6 AvenirNextLight text-base">
              <input
                className="outline-none"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="bgStyleInput py-3 overflow-hidden px-6 AvenirNextLight text-base">
              <input className="outline-none" type="text" placeholder="Phone" />
            </div>
          </div>
          <textarea
            className="bgStyleInput AvenirNextLight text-base py-3 px-6 overflow-hidden w-full h-[200px] outline-none resize-none"
            placeholder="Your message"
          ></textarea>
        </div>
        <div className="flex items-center gap-3 min-[450px]:gap-6 w-full md:w-[580px] px-[10px]">
          <div className="w-8 h-8 border-[1.5px] rounded border-color6 border-solid flex-none cursor-pointer"></div>
          <div className="AvenirNextLight text-black leading-6">
            By clicking “Submit button” you accept our{" "}
            <span className="text-color1 underline cursor-pointer">
              Terms & Conditions
            </span>{" "}
            and have read our{" "}
            <span className="text-color1 underline cursor-pointer">
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className="text-color1 underline cursor-pointer">
              Disclaimer
            </span>
          </div>
        </div>
        <div className="cursor-pointer text-xl text-color1 bg-color3 AvenirNextBlack py-[14px] px-[34px] rounded-[30px] mt-3">
          Submit
        </div>
      </div>
    </section>
  );
}
