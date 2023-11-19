import React from "react";
import "./Services.css";
import OurServices from "../../componant/OurServicesCard/OurServices";

export default function Services() {
  window.scroll(0, 0);
  return (
    <section>
      <div className="flex flex-col items-center container-Services w-[100%] gap-[20px] py-[80px] px-[110px]">
        <span className="text-center text-4xl not-italic font-semibold leading-10 uppercase title-Services">
          Our Services
        </span>
        <hr className="bg-color4 w-[380px] h-1 border-none" />
        <div className="flex justify-center items-start gap-[10px] lg:gap-[20px] flex-col md:flex-row">
          <div className="">
            <OurServices
              href="/familyrelocations"
              cover="../public/assets/images/services_cards_family_relocation_image.png"
              title="Family Relocation"
              desc="With strategic planning, we simplify the moving process so you and your family can feel safe and confident."
            />
          </div>
          <div className="">
            <OurServices
              href="/businessRelocation"
              cover="../public/assets/images/services_cards_business_relocation_image.png"
              title="Business Relocation"
              desc="We handle the responsibility of moving your business to Cyprus, so you can focus on your business goals."
            />
          </div>
          <div className="hidden xl:flex">
            <OurServices
              href="/investmentOpportunities"
              cover="../public/assets/images/services_cards_investment_schemes_image.png"
              title="Investment plans"
              desc="Discover the opportunity to further enhance your business ambitions, by choosing the optimal investment plan."
            />
          </div>
        </div>
        <div className=" xl:hidden">
          <OurServices
            href="/investmentOpportunities"
            cover="../public/assets/images/services_cards_investment_schemes_image.png"
            title="Investment plans"
            desc="Discover the opportunity to further enhance your business ambitions, by choosing the optimal investment plan."
          />
        </div>
      </div>
    </section>
  );
}
