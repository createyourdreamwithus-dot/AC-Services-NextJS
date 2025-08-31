
import React from 'react'
import Image from "next/image";
import ACServiceImg from "../../../public/images/banner/service-1.webp";
import WashingMechineService from "../../../public/images/banner/service-2.webp";
import DTHService from "../../../public/images/banner/service-3.webp";
import Link from "next/link";
const OurService = () => {
  return (
    <div>
      <section className="our-services-container bg-[#f1f1f1] pt-[40px] pb-[40px] sm:pt-[120px] sm:pb-[120px] mt-15 text-center">
<div className="mx-auto px-4 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1170px]">
  <h1 className="text-[40px] font-light text-[#38373c] leading-[30px] mb-[30px] sm:text-[54px] sm:leading-[54px] sm:mb-[60px]">
    Our Services
  </h1>
  <div className="services-box flex flex-col md:flex-row justify-between gap-8">
    <div className="group bg-white transition duration-300 border-[10px] border-white text-center w-full sm:w-1/3 hover:bg-[#38373c]">
      <Image
        src={ACServiceImg}
        alt=""
        className="transition duration-300 group-hover:opacity-20"
      />

      <h2 className="mb-10 text-[24px] font-semibold pt-10 group-hover:text-[#f5d974] transition duration-300">
        Cooling Services
      </h2>
      <p className="text-[#87868a] text-[16px] mb-10 font-normal w-[83%] mx-auto group-hover:text-white transition duration-300">
        There are many variations passages of lorem ipsum available but
        the majority have suffered alteration.
      </p>
      <Link
        href="/"
        className="inline-block font-bold text-[#38373c] px-10 py-[17px] text-[12px] tracking-[1px] no-underline bg-[#F1F1F1] w-full group-hover:text-black group-hover:bg-[#f5d974] transition duration-300"
      >
        Learn More
      </Link>
    </div>
    <div className="group bg-white transition duration-300 border-[10px] border-white text-center w-full sm:w-1/3 hover:bg-[#38373c]">
      <Image
        src={WashingMechineService}
        alt=""
        className="transition duration-300 group-hover:opacity-20"
      />
      <h2 className="mb-10 text-[24px] font-semibold pt-10 group-hover:text-[#f5d974] transition duration-300">
        Heating Services
      </h2>
      <p className="text-[#87868a] text-[16px] mb-10 font-normal w-[83%] mx-auto group-hover:text-white transition duration-300">
        There are many variations passages of lorem ipsum available but
        the majority have suffered alteration.
      </p>
      <Link
        href="/"
        className="inline-block font-bold text-[#38373c] px-10 py-[17px] text-[12px] tracking-[1px] no-underline bg-[#F1F1F1] w-full group-hover:text-black group-hover:bg-[#f5d974] transition duration-300"
      >
        Learn More
      </Link>
    </div>
    <div className="group bg-white transition duration-300 border-[10px] border-white text-center w-full sm:w-1/3 hover:bg-[#38373c]">
      <Image
        src={DTHService}
        alt=""
        className="transition duration-300 group-hover:opacity-20"
      />
      <h2 className="mb-10 text-[24px] font-semibold pt-10 group-hover:text-[#f5d974] transition duration-300">
        Other Services
      </h2>
      <p className="text-[#87868a] text-[16px] mb-10 font-normal w-[83%] mx-auto group-hover:text-white transition duration-300">
        There are many variations passages of lorem ipsum available but
        the majority have suffered alteration.
      </p>
      <Link
        href="/"
        className="inline-block font-bold text-[#38373c] px-10 py-[17px] text-[12px] tracking-[1px] no-underline bg-[#F1F1F1] w-full group-hover:text-black group-hover:bg-[#f5d974] transition duration-300"
      >
        Learn More
      </Link>
    </div>
  </div>
</div>
</section>
    </div>
  )
}

export default OurService


