import Image from "next/image";
import Link from "next/link";
import React from "react";
import WelcomeBanner from "../../../public/images/banner/welcome-banner.webp";

const WelcomeSection = () => {
  return (
    <div>
<div className="mx-auto px-4 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1170px]">
  <section className="welcome-banner-container mt-15">
    <div className="flex flex-col md:flex-row justify-between gap-16">
      
      {/* Banner Image */}
      <div className="w-full md:w-2.5/5">
        <Image src={WelcomeBanner} alt="welcome-banner" />
      </div>
      
      {/* Text Content */}
      <div className="w-full md:w-2.3/5">
        <h4 className="text-[#38373c] font-medium text-[20px] relative before:content-[''] before:absolute before:left-0 before:top-0 before:h-[3px] before:w-[25px] before:bg-[#38adb6] pt-5">
          Join the Rajan Services Team
        </h4>
        
        <h2 className="text-[30px] font-light mt-8 leading-[36px]">
          We re hiring skilled technicians for AC, Washing Machine, and RO Services
        </h2>
        
        <p className="text-[#87868a] leading-[34px] text-[18px] mt-10 mb-10">
          Looking to take your career to the next level? Rajan Services is expanding and we re on the lookout for passionate, experienced professionals in AC repair, washing machine servicing, and RO maintenance. Competitive pay, supportive team, and growth opportunities await.
        </p>
        
        <Link
          href="#Contact"
          className="bg-[#ffd763] text-[#38373c] px-10 py-[17px] inline-block font-bold no-underline tracking-[1px] text-[12px] hover:bg-[#09aeb8] hover:text-white transition-colors delay-50"
        >
          Learn More
        </Link>
      </div>
    </div>
  </section>
</div>

    </div>
  );
};

export default WelcomeSection;
