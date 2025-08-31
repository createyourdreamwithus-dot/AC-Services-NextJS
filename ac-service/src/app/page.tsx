import Image from "next/image";
import { FaMoneyBillAlt, FaHandshake, FaCalendarCheck } from "react-icons/fa";
import { BsEmojiSmileFill } from "react-icons/bs";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { IoIosSnow } from "react-icons/io";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { LuSatelliteDish } from "react-icons/lu";
import WelcomeBanner from "../../public/images/banner/welcome-banner.webp";
import ACServiceImg from "../../public/images/banner/service-1.webp";
import WashingMechineService from "../../public/images/banner/service-2.webp";
import DTHService from "../../public/images/banner/service-3.webp";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mx-auto px-4 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1170px]">
        <section className="card-container">
          <div className="flex flex-col md:flex-row justify-between gap-1">
            <div className="w-full md:w-55 bg-[#09aeb8] py-[60px] px-[20px] text-center text-white transition delay-50 duration-300 ease-in-out hover:-translate-y-2 hover:bg-[#FFD763] ">
              <p className="flex justify-center text-[60px] mb-5">
                <FaMoneyBillAlt />
              </p>
              <p className="text-[20px]">No Upfront Payments</p>
            </div>
            <div className="w-full md:w-55 bg-[#09aeb8] py-[60px] px-[20px] text-center text-white transition delay-50 duration-300 ease-in-out hover:-translate-y-2 hover:bg-[#FFD763]">
              <p className="flex justify-center text-[60px] mb-5">
                <BsEmojiSmileFill className="text-white" />
              </p>
              <p className="text-[20px]">Satisfaction Guarantee</p>
            </div>
            <div className="w-full md:w-55 bg-[#09aeb8] py-[60px] px-[20px] text-center text-white transition delay-50 duration-300 ease-in-out hover:-translate-y-2 hover:bg-[#FFD763]">
              <p className="flex justify-center text-[60px] mb-5">
                <FaCalendarCheck />
              </p>
              <p className="text-[20px]">
                Emergency <br /> Service
              </p>
            </div>
            <div className="w-full md:w-55 bg-[#09aeb8] py-[60px] px-[20px] text-center text-white transition delay-50 duration-300 ease-in-out hover:-translate-y-2 hover:bg-[#FFD763]">
              <p className="flex justify-center text-[60px] mb-5">
                <FaHandshake />
              </p>
              <p className="text-[20px]">Fixed Right Promise</p>
            </div>
            <div className="w-full md:w-55 bg-[#09aeb8] py-[60px] px-[20px] text-center text-white transition delay-50 duration-300 ease-in-out hover:-translate-y-2 hover:bg-[#FFD763]">
              <p className="flex justify-center text-[60px] mb-5">
                <FaPeopleCarryBox />
              </p>
              <p className="text-[20px]">
                8 Years <br /> Experience
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="mx-auto px-4 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1170px]">
        <section className="welcome-banner-container mt-15">
          <div className="flex flex-col md:flex-row justify-between gap-16">
            <div className="w-full md:w-2.5/5">
              <Image src={WelcomeBanner} alt="welocme-banner"></Image>
            </div>
            <div className="w-full md:w-2.3/5">
              <h4 className="text-[#38373c] font-medium text-[20px] relative before:content-[''] before:absolute before:left-0 before:top-0 before:h-[3px] before:w-[25px] before:bg-[#38adb6] pt-5">
                Welcome to loazzne
              </h4>
              <h2 className="text-[30px] font-light mt-8 leading-[36px]">
                Heating and air conditioning repair and installation company
              </h2>
              <p className="text-[#87868a] leading-[34px] text-[18px] mt-10 mb-6">
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
      <section className="our-services-container bg-[#f1f1f1] pt-[40px] pb-[40px] sm:pt-[120px] sm:pb-[120px] mt-15 text-center">
        <div className="mx-auto px-4 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1170px]">
          <h1 className="text-[40px] font-light text-[#38373c] leading-[30px] mb-[30px] sm:text-[54px] sm:leading-[54px] sm:mb-[60px]">
            Our Services
          </h1>
          <div className="services-box flex flex-col md:flex-row justify-between gap-8">
            <div className="group bg-white transition duration-300 border-[10px] border-white text-center w-full sm:w-1/3 hover:bg-[#38373c]">
              <div className="relative">
                <Image
                  src={ACServiceImg}
                  alt=""
                  className="transition duration-300 group-hover:opacity-20"
                />
                <div className="w-[77px] h-[75px] absolute bottom-0 left-0 bg-white flex justify-center items-center">
                  <IoIosSnow className="leading-[75px] text-[38px]" />
                </div>
              </div>
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
            <div className="group bg-white transition duration-300 border-[10px] border-white text-center w-full sm:w-1/3 hover:bg-[#38373c] relative">
              <div className="relative">
                <Image
                  src={WashingMechineService}
                  alt=""
                  className="transition duration-300 group-hover:opacity-20"
                />
                <div className="w-[77px] h-[75px] absolute bottom-0 left-0 bg-white flex justify-center items-center">
                  <CgSmartHomeWashMachine className="leading-[75px] text-[38px]" />
                </div>
              </div>
              <h2 className="mb-10 text-[24px] font-semibold pt-10 group-hover:text-[#f5d974] transition duration-300">
                Washing Mechine Services
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
              <div className="relative">
                <Image
                  src={DTHService}
                  alt=""
                  className="transition duration-300 group-hover:opacity-20"
                />
                <div className="w-[77px] h-[75px] absolute bottom-0 left-0 bg-white flex justify-center items-center">
                  <LuSatelliteDish className="leading-[75px] text-[38px]" />
                </div>
              </div>
              <h2 className="mb-10 text-[24px] font-semibold pt-10 group-hover:text-[#f5d974] transition duration-300">
                DTH Services
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
      <section className="map-container">
        <div className="mx-auto px-4 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1170px] text-center">
          <h1 className="text-[40px] font-light text-[#38373c] leading-[30px] mt-10 mb-[30px] sm:text-[54px] sm:leading-[54px] sm:mb-[60px]">
            Our Location
          </h1>
          <div className="w-full h-auto sm:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.1761290612785!2d80.24317257597704!3d13.151287687180869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52653de92f2311%3A0x93014d28d6591fb1!2sMoolachatram%20Main%20Rd%2C%20Chennai%2C%20Tamil%20Nadu%20600051!5e0!3m2!1sen!2sin!4v1756627833371!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              // allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
