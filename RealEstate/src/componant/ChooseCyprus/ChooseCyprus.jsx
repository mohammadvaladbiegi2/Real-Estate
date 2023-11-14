import React from "react";
import "./ChooseCyprus.css";
import CardChooseCprus from "../CardChooseCprus/CardChooseCprus";

export default function ChooseCyprus() {
  return (
    <section>
      <div className="container-Sections w-full flex  px-[133px] py-[80px] flex-col items-center gap-[60px] ">
        <div className="title w-[580px] h-[144px]">
          <h2 className="title-firs-text mb-[60px]  h-[30px] flex-shrink-0 text-center text-4xl not-italic font-semibold leading-10 uppercase">
            Why Choose Cyprus?{" "}
          </h2>
          <h5 className="title-second-text h-24 flex-shrink-0 text-center text-base not-italic font-normal leading-6">
            When you’re searching for the ideal home you want everything to be
            perfect. This is why over the years more and more people from all
            around the world are choosing Cyprus as their ultimate destination.
            This smal Mediterranean mesmerizes millions of visitors every year.
          </h5>
        </div>
        <div className="container-cards mt-[60px] hidden xl:flex  justify-center items-start gap-[20px]">
          <CardChooseCprus
            cover="../../../public/assets/images/money.png"
            title="Progressive tax system"
            desc="Offering one of the most attractive tax regimes in Europe"
            bg="linear-gradient(103deg, rgba(130,140,222,1) 38%, rgba(109,49,208,1) 100%)"
          />
          <CardChooseCprus
            cover="../../../public/assets/images/haze.png"
            title=" Stunning weather and climate"
            desc="Enjoy a high quality of life with over 324 days of sun annually"
            bg="linear-gradient(103deg, rgba(254,111,45,1) 22%, rgba(255,208,89,1) 100%)"
          />
          <CardChooseCprus
            cover="../../../public/assets/images/human-resources.png"
            title="Blooming expat community"
            desc="Become part of an increasingly diverse community"
            bg="linear-gradient(103deg, rgba(130,140,222,1) 0%, rgba(0,184,195,1) 100%)"
          />
          <CardChooseCprus
            cover="../../../public/assets/images/house.png"
            title="Family-oriented values"
            desc="Excellent education standards and extremely low crime rates"
            bg=" linear-gradient(103deg, rgba(255,185,175,0.3) 0%, rgba(166,81,251,1) 100%)"
          />
        </div>

        <div className="container-cards flex xl:hidden mt-[60px]  justify-center items-start gap-[20px]">
          <CardChooseCprus
            cover="../../../public/assets/images/money.png"
            title="Progressive tax system"
            desc="Offering one of the most attractive tax regimes in Europe"
            bg="linear-gradient(103deg, rgba(130,140,222,1) 38%, rgba(109,49,208,1) 100%)"
          />
          <CardChooseCprus
            cover="../../../public/assets/images/haze.png"
            title=" Stunning weather and climate"
            desc="Enjoy a high quality of life with over 324 days of sun annually"
            bg="linear-gradient(103deg, rgba(254,111,45,1) 22%, rgba(255,208,89,1) 100%)"
          />
        </div>
        <div className="container-cards flex xl:hidden mt-[60px]  justify-center items-start gap-[20px]">
          <CardChooseCprus
            cover="../../../public/assets/images/human-resources.png"
            title="Blooming expat community"
            desc="Become part of an increasingly diverse community"
            bg="linear-gradient(103deg, rgba(130,140,222,1) 0%, rgba(0,184,195,1) 100%)"
          />
          <CardChooseCprus
            cover="../../../public/assets/images/house.png"
            title="Family-oriented values"
            desc="Excellent education standards and extremely low crime rates"
            bg=" linear-gradient(103deg, rgba(255,185,175,0.3) 0%, rgba(166,81,251,1) 100%)"
          />
        </div>
      </div>
    </section>
  );
}
