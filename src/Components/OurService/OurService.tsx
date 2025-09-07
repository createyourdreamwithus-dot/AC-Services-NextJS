import React from "react";
import Image from "next/image";
import ACServiceImg from "../../../public/images/banner/service-1.jpg";
import WashingMechineService from "../../../public/images/banner/service-2.jpg";
import DTHService from "../../../public/images/banner/service-3.jpg";
import { IoIosSnow } from "react-icons/io";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { LuSatelliteDish } from "react-icons/lu";

const OurService = () => {
  return (
    <div className="scroll-mt-24" id="services">
      <section className="our-services-container bg-[#f1f1f1] pt-[40px] pb-[40px] sm:pt-[120px] sm:pb-[120px] mt-15 text-center">
        <div className="mx-auto px-4 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1170px]">
          <h1 className="text-[40px] font-light text-[#38373c] leading-[30px] mb-[30px] sm:text-[54px] sm:leading-[54px] sm:mb-[60px]">
            Our Services
          </h1>

          <div className="services-box flex flex-col md:flex-row justify-between gap-8">
          <div className="group bg-white transition duration-300 border-[10px] border-white text-center w-full sm:w-1/3 hover:bg-[#38373c] relative">
          <div className="relative">
                <Image
                  src={ACServiceImg}
                  alt="AC Repair Service"
                  className="transition duration-300 group-hover:opacity-20"
                />
                <div className="w-[77px] h-[75px] absolute bottom-0 left-0 bg-white flex justify-center items-center">
                  <IoIosSnow className="leading-[75px] text-[38px]" />
                </div>
              </div>

              <h2 className="mb-10 text-[24px] font-semibold pt-10 group-hover:text-[#f5d974] transition duration-300">
                AC Repair & Maintenance
              </h2>
              <p className="text-[#87868a] text-[16px] mb-10 font-normal w-[83%] mx-auto group-hover:text-white transition duration-300">
                Keep your home cool and comfortable with our expert AC
                servicing. From split AC installation to gas refilling and
                repair, we ensure fast, affordable, and reliable solutions.
              </p>
            </div>

            <div className="group bg-white transition duration-300 border-[10px] border-white text-center w-full sm:w-1/3 hover:bg-[#38373c] relative">
              <div className="relative">
                <Image
                  src={WashingMechineService}
                  alt="Washing Machine Service"
                  className="transition duration-300 group-hover:opacity-20"
                />
                <div className="w-[77px] h-[75px] absolute bottom-0 left-0 bg-white flex justify-center items-center">
                  <CgSmartHomeWashMachine className="leading-[75px] text-[38px]" />
                </div>
              </div>
              <h2 className="mb-10 text-[24px] font-semibold pt-10 group-hover:text-[#f5d974] transition duration-300">
                Washing Machine Repair
              </h2>
              <p className="text-[#87868a] text-[16px] mb-10 font-normal w-[83%] mx-auto group-hover:text-white transition duration-300">
                We fix all brands and types of washing machines — front load,
                top load, semi-automatic. Get quick diagnosis, part replacement,
                and full-service care at your doorstep.
              </p>
            </div>

            <div className="group bg-white transition duration-300 border-[10px] border-white text-center w-full sm:w-1/3 hover:bg-[#38373c]">
              <div className="relative">
                <Image
                  src={DTHService}
                  alt="RO Water Purifier Service"
                  className="transition duration-300 group-hover:opacity-20"
                />
                <div className="w-[77px] h-[75px] absolute bottom-0 left-0 bg-white flex justify-center items-center">
                  <LuSatelliteDish className="leading-[75px] text-[38px]" />
                </div>
              </div>
              <h2 className="mb-10 text-[24px] font-semibold pt-10 group-hover:text-[#f5d974] transition duration-300">
                RO Water Purifier Service
              </h2>
              <p className="text-[#87868a] text-[16px] mb-10 font-normal w-[83%] mx-auto group-hover:text-white transition duration-300">
                Ensure safe and pure drinking water with our complete RO service
                solutions. We handle filter changes, maintenance, and repairs
                for all leading brands.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurService;
