import React from "react";
import "./InvestmentOpportunities.css";
import CardChooseCprus from "../../componant/CardChooseCprus/CardChooseCprus";
import ContactUs from "../../componant/ContactUs/ContactUs";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import FrequentlyAskedQuestionsCard from "../../componant/FrequentlyAskedQuestionsCard/FrequentlyAskedQuestionsCard";

export default function InvestmentOpportunities() {
  window.scroll(0, 0);
  return (
    <section>
      <div className="flex pt-[120px]">
        <div className="absolute bgShadow2InvestmentOpportunities h-[280px] min-[1000px]:h-[530px] bg-gradient-to-b min-[1000px]:bg-gradient-to-r from-color6 from-60% via-color7 via-80% to-100% z-10 flex justify-center items-center">
          <span className="AvenirNext text-4xl font-semibold text-black">
            Investment Opportunities
          </span>
        </div>
        <div className="bgImage2InvestmentOpportunities min-[1000px]:right-0 h-[800px] min-[1000px]:h-[530px] w-full bg-no-repeat bg-center min-[1000px]:bg-right max-[1000px]:mt-[70px]"></div>
      </div>
      <div className="flex flex-col gap-20 py-20 px-[130px] max-md:px-0 bg-color6">
        <div className="flex flex-row-reverse max-[1300px]:flex-col gap-5">
          <div className="flex flex-col text-black gap-10 max-md:px-[50px]">
            <h2 className="uppercase w-[510px] max-md:w-full leading-8 text-[28px] font-semibold AvenirNext">
              Business-Friendly Environment
            </h2>
            <div className="text-base font-normal leading-6 flex flex-col gap-7 AvenirNextLight">
              <p>
                Apart from being one of the most attractive holiday destinations
                globally, Cyprus is also recognized as an ever-growing hub for
                business in the EU. Every year, entrepreneurs from all around
                the world are moving to Cyprus with the aim to maximize their
                business efforts and opportunities. Every big city on the island
                – Nicosia, Limassol, Paphos, and Larnaca – has something to
                offer to every ambition-driven individual. This
                business-friendly environment is the result of effective
                business initiatives taken by the government which focus on
                providing a variety of benefits to people moving from abroad.
                Among the multitude of reasons why Cyprus is the ideal place to
                relocate your business are the following:
              </p>

              <ul>
                <li className="list-disc">
                  Great Market access: The Geostrategic position of the island
                  enables businesses to access major markets of the EU
                </li>
                <li className="list-disc">
                  12.5% corporate tax rate: One of the lowest Corporate tax
                  rates in the EU
                </li>
                <li className="list-disc">
                  Simple Immigration & Employment process
                </li>
                <li className="list-disc">
                  Investment Opportunities: some of the most powerful businesses
                  include real estate, shipping companies, financial, and
                  insurance industries
                </li>
                <li className="list-disc">
                  Cypriot Citizenship on naturalization grounds can be applied
                  for following 7 years of employment and residence
                </li>
                <li className="list-disc">
                  Straightforward Corporate Structures: simple compliance and
                  legal processes
                </li>
              </ul>
              <p>
                These benefits create an attractive and inviting business
                environment for those seeking to expand their businesses in one
                of the most dominant corporate locations of the world.
              </p>
            </div>
          </div>
          <div className="w-[580px] h-[500px] max-md:h-[450px] max-md:bg-top bg-cover bg-no-repeat max-xl:w-[768px] max-md:w-full flex-none bgPhoto1BusinessInvestmentOpportunities">
            <div className="max-[1000px]:hidden w-20 h-full bg-color6 opacity-50 absolute right-0"></div>
          </div>
        </div>
        <div className="flex flex-row max-[1300px]:flex-col gap-5">
          <div className="flex flex-col text-black gap-10 max-md:px-[50px]">
            <h2 className="uppercase w-[510px] max-md:w-full leading-8 text-[28px] font-semibold AvenirNext">
              Quality of Life in Cyprus
            </h2>
            <div className="text-base font-normal leading-6 flex flex-col gap-7 AvenirNextLight">
              <p>
                A minimum of around 4 million tourists choose Cyprus as their
                holiday destination per year. This makes the island one of the
                most popular destinations in the world. In fact, many people who
                experience life in Cyprus tend to return either for another
                holiday or decide to move permanently. As a business
                entrepreneur looking to relocate, the most essential point to
                carefully consider is the new location of your business
                activities. This is why apart from the outstanding business
                advantages of Cyprus, you can also find the ideal location for
                you and your employees to work and live.
              </p>

              <ul>
                <li className="list-disk">
                  The cost of living is lower than in most other EU countries
                </li>
                <li className="list-disk">
                  High quality of living for expatriates: there are thousands of
                  expat communities around the island
                </li>
                <li className="list-disk">
                  Low crime rate: one of the safest countries to live globally
                </li>
                <li className="list-disk">Exceptional healthcare facilities</li>
                <li className="list-disk">
                  Among the world's top retirement destinations
                </li>
                <li className="list-disk">
                  One of the best state pension systems worldwide
                </li>
                <li className="list-disk">
                  A strong education sector with a wide range of public and
                  private higher education institutions.
                </li>
              </ul>

              <p>
                Choosing Cyprus is more than just relocating your business –
                it’s about starting a new life built on quality and security.
              </p>
            </div>
          </div>
          <div className="w-[580px] h-[500px] max-md:h-[450px] max-md:bg-top bg-cover bg-no-repeat max-xl:w-[768px] max-md:w-full flex-none bgPhoto2BusinessInvestmentOpportunities"></div>
        </div>
        <div className="flex flex-row-reverse max-[1300px]:flex-col gap-5">
          <div className="flex flex-col text-black gap-10 max-md:px-[50px] max-sm:px-8">
            <h2 className="uppercase w-[550px] max-md:w-full leading-8 text-[28px] font-semibold AvenirNext">
              Positive Economic Outlook
            </h2>
            <div className="text-base font-normal leading-6 flex flex-col gap-8 AvenirNextLight">
              <p>
                The decision to relocate your business comes with the need to
                discover a location with a strong and promising economic future
                for your business. Cyprus has established its resilient economic
                reputation with one of the fastest growth rates in the EU. This
                is achieved by focusing on the diversification of services and
                business opportunities found on the island. Some of the most
                dominant services include communications, real estate, and
                financial industries. The government’s efforts to support
                businesses has proved fundamental in the growth of the economy.
              </p>

              <ul className="ps-5">
                <li className="list-disc">Robust GDP growth</li>
                <li className="list-disc">
                  Among the fastest-growing economies in the EU
                </li>
                <li className="list-disc">Positive macroeconomic forecasts</li>
                <li className="list-disc">
                  Key focus on investing in interconnectivity in the following
                  years
                </li>
                <li className="list-disc">
                  Exceptional Regulatory Structure: closely aligned to the
                  English common law legal system
                </li>
              </ul>

              <p>
                Since the 1st of January 2022, the Government of Cyprus has
                launched a new action plan to attract foreign businesses to
                Cyprus for the purpose of creating or expanding their
                operations. This creates unlimited possibilities when it comes
                to growing your business in Cyprus.
              </p>
            </div>
          </div>
          <div className="w-[580px] h-[500px] max-md:h-[450px] max-md:bg-top bg-cover bg-no-repeat max-xl:w-[768px] max-md:w-full flex-none bgPhoto3BusinessInvestmentOpportunities relative">
            <div className="max-[1000px]:hidden w-20 h-full bg-color6 opacity-50 absolute left-0"></div>
          </div>
        </div>
      </div>

      <section>
        <div className="container-Sections w-full flex  px-[133px] py-[80px] flex-col items-center gap-[60px] ">
          <div className="title w-[410px] md:w-[580px] h-5">
            <h2 className="title-firs-text   h-[30px] flex-shrink-0 text-center text-3xl md:text-4xl not-italic font-semibold leading-10 uppercase">
              How We Can Help{" "}
            </h2>
          </div>
          <div className="container-cards mt-[60px] hidden xl:flex  justify-center items-start gap-[20px]">
            <CardChooseCprus
              cover="../../../public/assets/images/location.png"
              title="Location Selection"
              desc="We assist in the process of selecting the ideal location for your business."
              bg="linear-gradient(103deg, rgba(130,140,222,1) 38%, rgba(109,49,208,1) 100%)"
            />
            <CardChooseCprus
              cover="../../../public/assets/images/listener11.png"
              title="Setting Up Your Business"
              desc="We help with the corporate establishment, handling compliance and legal matters."
              bg="linear-gradient(103deg, rgba(254,111,45,1) 22%, rgba(255,208,89,1) 100%)"
            />
            <CardChooseCprus
              cover="../../../public/assets/images/relocation_icon.png"
              title="Relocating Family and Staff"
              desc="Our consultation
services will
simplify
immigration
matters, helping
you arrange the
documents you
need."
              bg="linear-gradient(103deg, rgba(130,140,222,1) 0%, rgba(0,184,195,1) 100%)"
            />
            <CardChooseCprus
              cover="../../../public/assets/images/facilitation.png"
              title="Facilitation of Newcomers"
              desc="Our services include providing you with any information you may need about living in Cyprus with your family."
              bg=" linear-gradient(103deg, rgba(255,185,175,0.3) 0%, rgba(166,81,251,1) 100%)"
            />
          </div>

          <div className="container-cards flex xl:hidden mt-[60px]  justify-center items-start gap-[20px]">
            <CardChooseCprus
              cover="../../../public/assets/images/location.png"
              title="Location Selection"
              desc="We assist in the process of selecting the ideal location for your business."
              bg="linear-gradient(103deg, rgba(130,140,222,1) 38%, rgba(109,49,208,1) 100%)"
            />
            <CardChooseCprus
              cover="../../../public/assets/images/listener11.png"
              title="Setting Up Your Business"
              desc="We help with the corporate establishment, handling compliance and legal matters."
              bg="linear-gradient(103deg, rgba(254,111,45,1) 22%, rgba(255,208,89,1) 100%)"
            />
          </div>
          <div className="container-cards flex xl:hidden mt-[60px]  justify-center items-start gap-[20px]">
            <CardChooseCprus
              cover="../../../public/assets/images/relocation_icon.png"
              title="Relocating Family and Staff"
              desc="Our consultation
services will
simplify
immigration
matters, helping
you arrange the
documents you
need."
              bg="linear-gradient(103deg, rgba(130,140,222,1) 0%, rgba(0,184,195,1) 100%)"
            />
            <CardChooseCprus
              cover="../../../public/assets/images/facilitation.png"
              title="Facilitation of Newcomers"
              desc="Our services include providing you with any information you may need about living in Cyprus with your family."
              bg=" linear-gradient(103deg, rgba(255,185,175,0.3) 0%, rgba(166,81,251,1) 100%)"
            />
          </div>
        </div>
      </section>
      <ContactUs />
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
  );
}
