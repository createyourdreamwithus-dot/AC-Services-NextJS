import React from 'react'

import { FaMoneyBillAlt, FaHandshake, FaCalendarCheck } from "react-icons/fa";
import { BsEmojiSmileFill } from "react-icons/bs";
import { FaPeopleCarryBox } from "react-icons/fa6";
const DetailCard = () => {
  return (
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
  )
}

export default DetailCard
