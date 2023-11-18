import React from "react";
import "./Navbar.css";
import logo from "../../../public/assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <section className="w-full fixed z-20">
      <div className="flex justify-between px-[50px] min-[480px]:px-[110px] items-center bg- h-[120px] w-full sticky bg-gradient-to-r from-color5 to-color1">
        <div className="w-[100px] md:w-[120px]">
          <img src={logo} className="w-full" />
        </div>
        <div className="flex font-AvenirNext items-center gap-[60px] min-[1000px]:gap-[85px] AvenirNext text-color6">
          <div className="flex gap-7 max-[1300px]:hidden AvenirNext uppercase">
            <Link to="/" className="cursor-pointer">
              Home
            </Link>
            <Link to="/about" className="cursor-pointer">
              AbouT us
            </Link>
            <Link
              to="/services"
              className="cursor-pointer flex items-center gap-1"
            >
              Services
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L5 5L9 1" stroke="white" />
              </svg>
            </Link>
            <div className="cursor-pointer">Invest in cyprus</div>
            <Link to="/migration" className="cursor-pointer">
              migration
            </Link>
            <Link to="/contactus" className="cursor-pointer">
              Contuct us
            </Link>
          </div>
          <div
            className="max-md:hidden flex items-center justify-center text-color1 bg-color3 w-[180px] h-12 text-xl rounded-[30px] font-semibold cursor-pointer"
            Montserrat
          >
            Get in touch
          </div>
          <div className="min-[1300px]:hidden cursor-pointer">
            <svg
              width="40"
              height="30"
              viewBox="0 0 40 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="2" fill="white" />
              <rect y="14" width="40" height="2" fill="white" />
              <rect y="28" width="40" height="2" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
