import React from "react";
import "./Homepage.css";
import MostpopularcitiesCard from "../../componant/MostpopularcitiesCard/MostpopularcitiesCard";

export default function Homepage() {
  return (
    <>
      {/* headers */}
      <section>
        <div className="container-header">
          <div className="container-title w-[300px] lg:w-[560px] lg:ps-[158px] ps-[10px] sm:ps-[30px] pe-[372px] md:pe-[516px] lg:pe-[722px]">
            <div className="Slogan-container w-[346px] lg:w-[564px]">
              <span className="Slogan-item">investments</span>
              <span className="Slogan-item">business relocation</span>
              <span className="Slogan-item hidden lg:flex">
                business relocation
              </span>
            </div>
            <span className="Slogan-item w-[210px] visible lg:hidden">
              business relocation
            </span>
            <span className="title  flex h-8 flex-col justify-center flex-shrink-0 w-[300px] md:w-[400px] text-2xl md:text-4xl not-italic font-semibold leading-10">
              Relocating to Cyprus
            </span>
            <span className="title  flex  flex-col justify-center flex-shrink-0 w-[300px] md:w-[400px] text-[15px] not-italic font-semibold leading-10">
              Seamless – Exceptional – Experience
            </span>
            <span className="txet-title h-32 flex-shrink-0 lg:w-[520px] w-[365px] text-base not-italic font-normal leading-6">
              The captivating Mediterranean island of Cyprus has become a
              business haven with a flourishing expat community. The strategic
              location that grants networking opportunities and the stability of
              being in the EU offers entrepreneurs the abilities they need to
              thrive.{" "}
            </span>
          </div>
          <div className="lg:ms-[138px] ms-[15px] flex w-48 h-12 mt-[80px] lg:mt-[20px] justify-center items-center flex-shrink-0">
            <button className="flex justify-center items-center btn-title">
              Find Out More
            </button>
          </div>
          <div className="flex h-56 flex-col items-start flex-shrink-0 lg:w-[700px] w-[378px] gap-[16px]">
            <span className="cities-img lg:ms-[158px] ms-[30px] mt-14 flex w-50 h-3 flex-col justify-center flex-shrink-0 text-xl not-italic font-semibold leading-8">
              Most popular cities
            </span>
            <div className="flex items-start gap-[40px] w-[100px]  lg:ms-[158px] ms-[30px]">
              <div>
                <MostpopularcitiesCard
                  cover="offer_cities_slider1_image.png"
                  title="Nicosia"
                />
              </div>
              <div>
                <MostpopularcitiesCard
                  cover="offer_cities_slider2_image.png"
                  title="Limassol"
                />
              </div>
              <div className="hidden sm:flex">
                <MostpopularcitiesCard
                  cover="offer_cities_slider3_image.png"
                  title="Paphos"
                />
              </div>
              <div className="hidden md:flex">
                <MostpopularcitiesCard
                  cover="offer_ciities_slider4_image.png"
                  title="Larnaka"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
