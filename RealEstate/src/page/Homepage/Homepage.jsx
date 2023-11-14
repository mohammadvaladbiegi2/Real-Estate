import React, { useState, useRef } from "react";
import "./Homepage.css";
import MostpopularcitiesCard from "../../componant/MostpopularcitiesCard/MostpopularcitiesCard";
import OurServices from "../../componant/OurServicesCard/OurServices";
import ChooseCyprus from "../../componant/ChooseCyprus/ChooseCyprus";
import CardChooseCprus from "../../componant/CardChooseCprus/CardChooseCprus";
import FrequentlyAskedQuestionsCard from "../../componant/FrequentlyAskedQuestionsCard/FrequentlyAskedQuestionsCard";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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
            <span className="cities-img lg:ms-[158px] ms-[30px] mt-5 lg:mt-14 flex w-50 h-3 flex-col justify-center flex-shrink-0 text-xl not-italic font-semibold leading-8">
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
      {/* Our Services */}
      <section>
        <div className="flex flex-col items-center container-Services w-[100%] gap-[60px] py-[80px] px-[110px]">
          <span className="text-center text-4xl not-italic font-semibold leading-10 uppercase title-Services">
            Our Services
          </span>
          <hr className="bg-color4 w-[380px] h-1" />
          <div className="flex justify-center items-start gap-[10px] lg:gap-[20px] flex-col md:flex-row">
            <div className="">
              <OurServices
                cover="../public/assets/images/services_cards_family_relocation_image.png"
                title="Family Relocation"
                desc="With strategic planning, we simplify the moving process so you and your family can feel safe and confident."
              />
            </div>
            <div className="">
              <OurServices
                cover="../public/assets/images/services_cards_business_relocation_image.png"
                title="Business Relocation"
                desc="We handle the responsibility of moving your business to Cyprus, so you can focus on your business goals."
              />
            </div>
            <div className="hidden xl:flex">
              <OurServices
                cover="../public/assets/images/services_cards_investment_schemes_image.png"
                title="Investment plans"
                desc="Discover the opportunity to further enhance your business ambitions, by choosing the optimal investment plan."
              />
            </div>
          </div>
          <div className=" xl:hidden">
            <OurServices
              cover="../public/assets/images/services_cards_investment_schemes_image.png"
              title="Investment plans"
              desc="Discover the opportunity to further enhance your business ambitions, by choosing the optimal investment plan."
            />
          </div>
        </div>
      </section>
      {/* Moving to Paradise */}
      <section>
        <div className="flex justify-center items-center flex-col xl:flex-row xl:py-[80px] gap-[70px] container-Moving-To-Paradise">
          <div className="flex-shrink-0 flex justify-end  w-full min-[1500px]:w-[430px] min-[1460px]:w-[410px] min-[1400px]:w-[380px] min-[1380px]:w-[360px] min-[1360px]:w-[340px] xl:w-[321px] h-[499.994px] img-left">
            <div className="w-20 flex-shrink-0 h-[499.998px] hidden xl:flex shadow-left"></div>
          </div>
          <div className="xl:w-[480px] w-[482px]  h-[526px] xl:h-[448px] flex flex-col gap-8 ">
            <span className="title-Move-to-paradise h-8 flex-shrink-0 w-[480px]  text-center not-italic font-semibold leading-7 uppercase">
              Moving to Paradise
            </span>
            <span className="xl:w-[480px] w-[460px] h-[200px] shrink-0 text-justify text-base not-italic font-normal leading-6 text-Moving-To-paradies">
              Have you ever dreamed about the perfect place to live? Your
              definition of perfect may be different someone else’s. Are you
              longing to live by the beach and listen to the soothing waves or
              are you a kind of person who enjoys the bustling sounds of the
              city? Whatever lifestyle you desire, Cyprus has it all! Whether
              you’re travelling with your family, your partner, or as a solo
              business entrepreneur, this exotic island can offer you a little
              bit of everything.{" "}
            </span>
            <span className="xl:w-[480px] w-[460px] h-[98px] shrink-0 text-center text-base not-italic font-normal leading-6 text-Moving-To-paradies">
              If you’ve made the decision to relocate to Cyprus, then you are
              expecting to find a safe place to settle. With extremely low crime
              rate, stunning sandy beaches, and awe-inspiring mountain views,
              Cyprus is the place to be!
            </span>
            <div className="flexh-12 justify-center items-center w-[480px]">
              <button className="btn-find flex justify-center items-center mx-32 gap-[20px] py-4 px-5">
                <a
                  href="#"
                  className="btn-link flex w-40 h-4 flex-col justify-center text-center text-xl not-italic font-semibold leading-8"
                >
                  Find Out More
                </a>
              </button>
            </div>
          </div>
          <div className="flex-shrink-0   w-full min-[1500px]:w-[430px] min-[1460px]:w-[410px] min-[1400px]:w-[380px] min-[1380px]:w-[360px] min-[1360px]:w-[340px] xl:w-[321px] h-[499.994px] img-right">
            <div className="w-20 flex-shrink-0 h-[499.998px] hidden xl:flex shadow-left"></div>
          </div>
        </div>
      </section>
      {/* Chooose Cyruse */}
      <ChooseCyprus />
      {/* map */}
      <section>
        <img
          src="../../public/assets/images/e876fcd08144f84de5886c32ab47f2a0.png"
          className="w-full hidden xl:block"
        />
        <img
          src="../../public/assets/images/maplg.png"
          className="w-full  xl:hidden"
        />
      </section>
      {/* how make it hapend */}
      <section>
        <div className="container-Sections w-full flex  px-[133px] py-[80px] flex-col items-center gap-[60px] ">
          <div className="title w-[410px] md:w-[580px] h-5">
            <h2 className="title-firs-text   h-[30px] flex-shrink-0 text-center text-3xl md:text-4xl not-italic font-semibold leading-10 uppercase">
              how we make it happen{" "}
            </h2>
          </div>
          <div className="container-cards mt-[60px] hidden xl:flex  justify-center items-start gap-[20px]">
            <CardChooseCprus
              cover="../../../public/assets/images/listener.png"
              title="We listen"
              desc="Our most prominent purpose is to understand and identify with your needs so we can effectively find ways to provide solutions."
              bg="linear-gradient(103deg, rgba(130,140,222,1) 0%, rgba(0,184,195,1) 100%)"
            />
            <CardChooseCprus
              cover="../../../public/assets/images/target.png"
              title="We strategize"
              desc="According to your requirements, our team designs a thorough series of steps that will make the relocation process as smooth as possible."
              bg="linear-gradient(103deg, rgba(254,111,45,1) 22%, rgba(255,208,89,1) 100%)"
            />
            <CardChooseCprus
              cover="../../../public/assets/images/heart.png"
              title="We provide"
              desc="We implement our services that are based on efficient strategic planning that respond to your family’s and business’s goals and ambitions."
              bg="linear-gradient(103deg, rgba(130,140,222,1) 38%, rgba(109,49,208,1) 100%)"
            />
            <CardChooseCprus
              cover="../../../public/assets/images/heart(2).png"
              title="We manage"
              desc="Once you are settled, we make sure that everything is according to your expectations and your vision of the quality of our services."
              bg=" linear-gradient(103deg, rgba(255,185,175,0.3) 0%, rgba(166,81,251,1) 100%)"
            />
          </div>

          <div className="container-cards flex xl:hidden mt-[60px]  justify-center items-start gap-[20px]">
            <CardChooseCprus
              cover="../../../public/assets/images/listener.png"
              title="We listen"
              desc="Our most prominent purpose is to understand and identify with your needs so we can effectively find ways to provide solutions."
              bg="linear-gradient(103deg, rgba(130,140,222,1) 0%, rgba(0,184,195,1) 100%)"
            />
            <CardChooseCprus
              cover="../../../public/assets/images/target.png"
              title="We strategize"
              desc="According to your requirements, our team designs a thorough series of steps that will make the relocation process as smooth as possible."
              bg="linear-gradient(103deg, rgba(254,111,45,1) 22%, rgba(255,208,89,1) 100%)"
            />
          </div>
          <div className="container-cards flex xl:hidden mt-[60px]  justify-center items-start gap-[20px]">
            <CardChooseCprus
              cover="../../../public/assets/images/heart.png"
              title="We provide"
              desc="We implement our services that are based on efficient strategic planning that respond to your family’s and business’s goals and ambitions."
              bg="linear-gradient(103deg, rgba(130,140,222,1) 38%, rgba(109,49,208,1) 100%)"
            />
            <CardChooseCprus
              cover="../../../public/assets/images/heart(2).png"
              title="We manage"
              desc="Once you are settled, we make sure that everything is according to your expectations and your vision of the quality of our services."
              bg=" linear-gradient(103deg, rgba(255,185,175,0.3) 0%, rgba(166,81,251,1) 100%)"
            />
          </div>
        </div>
      </section>
      {/* Our Partners */}
      <section>
        <div className="flex flex-col items-center py-20 px-32 gap-14 bg-color6">
          <h2 className="title-Partners w-72 h-7 text-center text-4xl not-italic font-semibold leading-10 uppercase">
            Our Partners
          </h2>
          <div className="container-partners-img hidden xl:flex  items-start gap-5">
            <span className="Partners-img1 flex w-48 h-16 p-4 items-center gap-4"></span>
            <span className="Partners-img2 flex w-48 h-16 p-4 items-center gap-4"></span>
            <span className="Partners-img3 flex w-48 h-16 p-4 items-center gap-4"></span>
            <span className="Partners-img4 flex w-48 h-16 p-4 items-center gap-4"></span>
            <span className="Partners-img5 flex w-48 h-16 p-4 items-center gap-4"></span>
            <span className="Partners-img6 flex w-48 h-16 p-4 items-center gap-4"></span>
          </div>
          <div className="container-partners-img hidden lg:flex  xl:hidden items-start gap-5">
            <span className="Partners-img1 flex w-48 h-16 p-4 items-center gap-4"></span>
            <span className="Partners-img2 flex w-48 h-16 p-4 items-center gap-4"></span>
            <span className="Partners-img3 flex w-48 h-16 p-4 items-center gap-4"></span>
            <span className="Partners-img4 flex w-48 h-16 p-4 items-center gap-4"></span>
          </div>
          <div className="container-partners-img hidden lg:flex  xl:hidden items-start gap-5">
            <span className="Partners-img5 flex w-48 h-16 p-4 items-center gap-4"></span>
            <span className="Partners-img6 flex w-48 h-16 p-4 items-center gap-4"></span>
          </div>
          <div className="container-partners-img hidden md:flex  lg:hidden items-start gap-5">
            <span className="Partners-img1 flex w-48 h-16 p-4 items-center gap-4"></span>
            <span className="Partners-img2 flex w-48 h-16 p-4 items-center gap-4"></span>
            <span className="Partners-img3 flex w-48 h-16 p-4 items-center gap-4"></span>
          </div>
          <div className="container-partners-img hidden md:flex  lg:hidden items-start gap-5">
            <span className="Partners-img4 flex w-48 h-16 p-4 items-center gap-4"></span>
            <span className="Partners-img5 flex w-48 h-16 p-4 items-center gap-4"></span>
            <span className="Partners-img6 flex w-48 h-16 p-4 items-center gap-4"></span>
          </div>
          <div className="container-partners-img  flex  md:hidden items-start gap-5">
            <span className="Partners-img1 flex w-48 h-16 p-4 items-center gap-4"></span>
            <span className="Partners-img2 flex w-48 h-16 p-4 items-center gap-4"></span>
          </div>
          <div className="container-partners-img  flex  md:hidden items-start gap-5">
            <span className="Partners-img3 flex w-48 h-16 p-4 items-center gap-4"></span>
            <span className="Partners-img4 flex w-48 h-16 p-4 items-center gap-4"></span>
          </div>
          <div className="container-partners-img  flex  md:hidden items-start gap-5">
            <span className="Partners-img5 flex w-48 h-16 p-4 items-center gap-4"></span>
            <span className="Partners-img6 flex w-48 h-16 p-4 items-center gap-4"></span>
          </div>
        </div>
      </section>
      {/* Frequently Asked Questions slider */}
      <section>
        <div className=" flex flex-col justify-center items-center w-full gap-14 py-20 bg-color1">
          <h2 className="title-Frequently-Asked h-8 flex-col justify-center flex-shrink-0 w-[380px] md:w-[610px] text-color6  text-center text-4xl not-italic font-semibold leading-10 uppercase">
            Frequently Asked Questions
          </h2>
          <div className="container-slider-card flex items-start gap-5 w-[380px] md:w-[780px]  xl:w-[1180px]">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              breakpoints={{
                700: {
                  slidesPerView: 1,
                },
                850: {
                  slidesPerView: 2,
                },
                1400: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <FrequentlyAskedQuestionsCard />
              </SwiperSlide>
              <SwiperSlide>
                <FrequentlyAskedQuestionsCard />
              </SwiperSlide>
              <SwiperSlide>
                <FrequentlyAskedQuestionsCard />
              </SwiperSlide>
              <SwiperSlide>
                <FrequentlyAskedQuestionsCard />
              </SwiperSlide>
              <SwiperSlide>
                <FrequentlyAskedQuestionsCard />
              </SwiperSlide>
              <SwiperSlide>
                <FrequentlyAskedQuestionsCard />
              </SwiperSlide>
              <SwiperSlide>
                <FrequentlyAskedQuestionsCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
