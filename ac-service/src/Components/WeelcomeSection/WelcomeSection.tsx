import Image from "next/image";
import Link from "next/link";
import React from "react";
import WelcomeBanner from "../../../public/images/banner/welcome-banner.jpeg";

const WelcomeSection = () => {
  return (
    <div>
      <div className="mx-auto px-4 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1170px]">
        <section className="welcome-banner-container mt-15">
          <div className="flex flex-col md:flex-row justify-between gap-16">
            <div className="w-full md:w-2.5/5">
              <Image
                src={WelcomeBanner}
                alt="welocme-banner"
              ></Image>
            </div>
            <div className="w-full md:w-2.3/5">
              <h4 className="text-[#38373c] font-medium text-[20px] relative before:content-[''] before:absolute before:left-0 before:top-0 before:h-[3px] before:w-[25px] before:bg-[#38adb6] pt-5">
                Welcome to loazzne
              </h4>
              <h2 className="text-[30px] font-light mt-8 leading-[36px]">
                Heating and air conditioning repair and installation company
              </h2>
              <p className="text-[#87868a] leading-[34px] text-[18px] mt-10 mb-10">
                There are many variations of passages of lorem ipsum available,
                but the majorify have suffered alteration in some form by
                injected humour, or randmised words which don&apos;t look even
                slightly believable.
              </p>
              <Link
                href="/"
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
