import React from "react";
import "./migration.css";
import ContactUs from "../../componant/ContactUs/ContactUs";
import FrequentlyAskedQuestionsCard from "../../componant/FrequentlyAskedQuestionsCard/FrequentlyAskedQuestionsCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Migration() {
  window.scroll(0, 0);
  return (
    <>
      <section>
        <div className="flex pt-[120px]">
          <div className="absolute bgShadow h-[280px] min-[1000px]:h-[530px] bg-gradient-to-b min-[1000px]:bg-gradient-to-r from-color6 from-60% via-color7 via-80% to-100% z-10 flex justify-center items-center">
            <span className="AvenirNext text-4xl font-semibold text-black">
              Moving to Cyprus
            </span>
          </div>
          <div className="bgImage min-[1000px]:right-0 h-[800px] min-[1000px]:h-[530px] w-full bg-no-repeat bg-center min-[1000px]:bg-right max-[1000px]:mt-[70px]"></div>
        </div>
        <div className="flex flex-col gap-20 py-20 px-[130px] max-md:px-0 bg-color6">
          <div className="flex flex-row max-[1300px]:flex-col gap-5">
            <div className="flex flex-col text-black gap-10 max-md:px-[50px]">
              <h2 className="uppercase w-[510px] max-md:w-full leading-8 text-[28px] font-semibold AvenirNext">
                Permanent Residency in Cyprus Benefits
              </h2>
              <div className="text-base font-normal leading-6 flex flex-col gap-7 AvenirNextLight">
                <p>
                  The decision to relocate your business or move with your
                  family to Cyprus comes with the decision to enhance your
                  quality of life. As Cyprus is among the most beloved travel
                  destinations for millions of tourists every year, an
                  increasing number of individuals and families have decided to
                  turn the Mediterranean island into their permanent home. With
                  over 17% of its population being international migrants,
                  Cyprus has numerous expat communities all around the island.
                </p>
                <p>
                  Becoming a permanent resident in Cyprus offers you the
                  opportunity to enjoy a multitude of benefits, helping your
                  business thrive and making your family feel welcome and safe.
                </p>
                <p>
                  It’s important to know that Cyprus Permanent Residency can be
                  obtained by purchasing property or living in Cyprus for a
                  continuous period of five years or more. Some of the most
                  important benefits of becoming a permanent resident in Cyprus
                  are the following:
                </p>
                <ul>
                  <li className="list-disc">
                    Obtaining EU residency in a safe and secure jurisdiction
                  </li>
                  <li className="list-disc">
                    Easy access to Europe due to great geographical location
                  </li>
                  <li className="list-disc">
                    Exceptional education standards for your children
                  </li>
                  <li className="list-disc">
                    Outstanding medical facilities and high quality healthcare
                  </li>
                  <li className="list-disc">No inheritance tax</li>
                  <li className="list-disc">
                    Opportunity to have obtain an EU passport
                  </li>
                  <li className="list-disc">Enjoying a high quality of life</li>
                </ul>
                <p>
                  Once you experience life on the island, you will have gained a
                  new perspective on life. The blue-flagged clear beaches and
                  the sunny weather all year long, will become your own personal
                  oasis where you can boost your business opportunities and
                  enjoy a relaxed lifestyle with your family.
                </p>
              </div>
            </div>
            <div className="w-[580px] h-[500px] max-md:h-[450px] max-md:bg-top bg-cover bg-no-repeat max-xl:w-[768px] max-md:w-full flex-none bgPhoto1Migration relative self-center">
              <div className="max-[1000px]:hidden w-20 h-full bg-color6 opacity-50 absolute right-0"></div>
            </div>
          </div>
          <div className="flex flex-row-reverse max-[1300px]:flex-col gap-5">
            <div className="flex flex-col text-black gap-10 max-md:px-[50px]">
              <h2 className="uppercase w-[510px] max-md:w-full leading-8 text-[28px] font-semibold AvenirNext">
                Why to Invest in Cyprus
              </h2>
              <div className="text-base font-normal leading-6 flex flex-col gap-7 AvenirNextLight">
                <p>
                  PAM Consulting services include assistance and consulting when
                  it comes to your investing plans in Cyprus. We will prioritize
                  your needs and expectations by offering you a variety of
                  investment options for you to choose from. In an accelerating
                  pace, Cyprus has grown into one of the dominant
                  investment-friendly countries in the EU. It is evident that
                  due to the government’s efforts to welcome more immigrants to
                  Cyprus, the investment opportunities are vast and customizable
                  for individuals.
                </p>
                <p>
                  The main reasons why more and more people are investing in
                  Cyprus are:
                </p>
                <ul className="ps-5">
                  <li className="list-disc">
                    Cyprus has the lowest corporate tax rate in Europe at 12.5%
                  </li>
                  <li className="list-disc">
                    No capital gains tax or inheritance tax
                  </li>
                  <li className="list-disc">
                    Tax exemptions on worldwide dividends as well as interest
                    income
                  </li>
                  <li className="list-disc">No Immovable Property Tax</li>
                  <li className="list-disc">
                    Corporate tax relief up to 75% for holdings
                  </li>
                  <li className="list-disc">
                    Competitive VAT rates ranging from 0- 19%
                  </li>
                  <li className="list-disc">
                    Low national healthcare tax contribution of 2.65-4.7%
                  </li>
                </ul>
                <p>
                  Whether you’re aiming to increase your financial possibilities
                  or increase your business outlook, Cyprus is an ideal place to
                  start. With the ability to choose from endless investment
                  plans, you can be one step closer to manifesting your goals.
                </p>
              </div>
            </div>
            <div className="w-[580px] h-[500px] max-md:h-[450px] max-md:bg-top bg-cover bg-no-repeat max-xl:w-[768px] max-md:w-full flex-none bgPhoto2Migration relative self-center"></div>
          </div>
          <div className="flex flex-row max-[1300px]:flex-col gap-5">
            <div className="flex flex-col text-black gap-10 max-md:px-[50px] max-sm:px-8">
              <h2 className="uppercase w-[550px] max-md:w-full leading-8 text-[28px] font-semibold AvenirNext">
                Important Information to Know Before Immigrating to Cyprus
              </h2>
              <div className="text-base font-normal leading-6 flex flex-col gap-8 AvenirNextLight">
                <p>
                  As you are planning to achieve a fresh start in Cyprus, we
                  would like to provide you with some basic information about
                  the island and what to expect when you arrive.
                </p>
                <ul className="ps-6">
                  <li className="list-disc">
                    <span className="AvenirNextBold">Capital City:</span>{" "}
                    Nicosia is the largest city of the island which has over
                    200000 residents, meaning about{" "}
                    <span className="AvenirNextBold">16.6%</span> of the
                    country’s population.
                  </li>
                  <li className="list-disc">
                    <span className="AvenirNextBold">Currency:</span> The
                    currency of Cyprus is the Euro.
                  </li>
                  <li className="list-disc">
                    <span className="AvenirNextBold">Population:</span> Cyprus’s
                    current population is{" "}
                    <span className="AvenirNextBold">1.207 million</span>.
                  </li>
                  <li className="list-disc">
                    <span className="AvenirNextBold">Official Languages:</span>{" "}
                    The official languages of the island are{" "}
                    <span className="AvenirNextBold">Greek and Turkish</span>,
                    and <span className="AvenirNextBold">English</span> is
                    widely spoken by locals.
                  </li>
                  <li className="list-disc">
                    <span className="AvenirNextBold">Cost of Living:</span>{" "}
                    Compared to other European countries, the cost of living is
                    relative ly low in Cyprus.
                  </li>
                  <li className="list-disc">
                    <span className="AvenirNextBold">Job Market:</span> As a
                    member of the{" "}
                    <span className="AvenirNextBold">EU since 2004</span>, the
                    business-friendly environment provides access to a wide
                    range of <span className="AvenirNextBold">markets</span>,
                    with some of theprominent being in the{" "}
                    <span className="AvenirNextBold">
                      financial sector, IT and technology services
                    </span>
                    , and <span className="AvenirNextBold">tourism</span>.
                  </li>
                  <li className="list-disc">
                    <span className="AvenirNextBold">Education:</span> Public
                    and Private Education in Cyprus meets outstanding quality
                    standards.
                  </li>
                </ul>
                Getting to know the ins and outs of the island is easy and
                exciting. Our team at PAM Consulting is also here to assist you
                with any additional information you may require.
              </div>
            </div>
            <div className="w-[580px] h-[500px] max-md:h-[450px] max-md:bg-top bg-cover bg-no-repeat max-xl:w-[768px] max-md:w-full flex-none bgPhoto3Migration relative self-center">
              <div className="max-[1000px]:hidden w-20 h-full bg-color6 opacity-50 absolute left-0"></div>
            </div>
          </div>
        </div>
        <div className="bgStyleSection3Migration flex flex-col items-center py-20 gap-[60px]">
          <div className="uppercase AvenirNext text-4xl font-semibold text-black text-center">
            How We Can Help
          </div>
          <div className="w-[780px] max-[1000px]:w-[580px] max-md:w-full max-md:px-10 flex flex-col items-center AvenirNextLight text-black gap-5">
            <p className="leading-6 text-center tracking-[0.5px]">
              Leaving your home country to settle in another is always
              accompanied by complex immigration processes such as registration,
              finding housing, signing documents, opening a bank account,
              finding schooling for your children, and much more. This process
              can make anyone feel stressed and uncertain about the next move.
              For this reason, our all-encompassing services make sure to make
              the relocation process as smooth as possible by handling
              everything that has to do with relocating your family and your
              business to Cyprus.
            </p>
            <ul className="leading-6 flex flex-col items-center text-color1 tracking-[0.5px]">
              <li className="list-disc">Business Relocation</li>
              <li className="list-disc">Family Relocation</li>
              <li className="list-disc">Investment Plans</li>
            </ul>
          </div>
          <div className="AvenirNextLight tracking-[0.5px] text-center leading-6 text-black w-[780px] max-[1000px]:w-[580px] max-md:w-full max-md:px-10 ">
            We want you to feel confident in your decision to relocate to
            Cyprus, as we take care of the challenging parts of moving. Moving
            to Cyprus is in itself an investment in your future.
          </div>
        </div>
        <ContactUs />
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
      </section>
    </>
  );
}
