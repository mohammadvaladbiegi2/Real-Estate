import React from "react";
import "./About.css";
import CardChooseCprus from "../../componant/CardChooseCprus/CardChooseCprus";
import ContactUs from "../../componant/ContactUs/ContactUs";

export default function About() {
  window.scroll(0, 0);
  return (
    <>
      <section className="bg-color1 flex flex-col max-w-[1600px] mx-auto">
        <div className="flex">
          <div className="absolute bgShadow h-[280px] min-[1000px]:h-[530px] bg-gradient-to-b min-[1000px]:bg-gradient-to-r from-color6 from-60% via-color7 via-80% to-100% z-10 flex justify-center items-center">
            <span className="AvenirNext uppercase text-4xl font-semibold text-black">
              Who we are
            </span>
          </div>
          <div className="bgImageAbout min-[1000px]:right-0 h-[800px] min-[1000px]:h-[530px] w-full bg-no-repeat bg-center min-[1000px]:bg-right"></div>
        </div>
        <div className="flex flex-col gap-8 justify-center  max-md:text-justify py-20  max-md:py-[60px] max-[1000px]:px-[110px] max-md:px-16 max-[480px]:px-11 bg-color1 text-color6 MontserratMedium leading-8 text-xl min-[1000px]:w-[780px] self-center font-semibold">
          <span>
            PAM Consulting is a team of dedicated professionals, located in
            Cyprus. Our services rely upon the idea that the sunny island of
            Cyprus can be the solution families and businesses are searching
            for.
          </span>
          <span>
            We understand the challenges that come with moving from one location
            to another and the difficulties that may arise. For this reason, we
            aim to transform family and business relocation into a hassle-free
            experience for you and yours.
          </span>
        </div>
        <div className="flex max-xl:flex-col items-center justify-center gap-5 max-xl:gap-10 bg-color6 ps-[130px] max-xl:px-[110px] max-md:px-0 py-20 max-xl:pb-0">
          <div className="flex flex-col text-black gap-10 max-md:w-4/5">
            <h2 className="uppercase text-[40px] font-semibold AvenirNext">
              What we do
            </h2>
            <div className="text-base font-normal flex flex-col gap-8 AvenirNextLight">
              <p className="leading-6">
                We provide solutions based on strategic planning that responds
                to your needs. Our business relocation services prioritize your
                business goals and ambitions. Changing your businesses’ location
                is a big step towards progress and it is essential that
                everything goes as smooth as possible. While you focus on
                boosting your company’s strategies, we take care of everything
                else.
              </p>
              <p className="leading-6">
                The decision to move from one place to another with your family
                is life-changing. As you expect this change to be for the
                better, our family relocation services make sure to consider
                every aspect of your family’s requirements. As you settle in
                Cyprus, we also offer you the opportunity to discover different
                investment plans that can further enable you to expand your
                financial and business horizons.
              </p>
            </div>
          </div>
          <div className="w-[710px] h-[460px] max-md:h-[450px] max-md:bg-center bg-cover max-xl:w-[768px] max-md:w-full flex-none bgChess"></div>
        </div>
      </section>
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
      <ContactUs />
    </>
  );
}
