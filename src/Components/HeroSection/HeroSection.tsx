"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

export default function HeroSection() {
  const slides = [
    {
      id: 1,
      subtitle: "Reliable Air Conditioning",
      title: "Installation Services & Expert Repair",
      desc: "Get your AC installed or repaired by certified professionals. Fast, affordable, and trusted service.",
      button: "Contact Us",
      image: "/images/Herosection/Ac.webp",
    },
    {
      id: 2,
      subtitle: "Fast & Trusted",
      title: "Washing Machine Maintenance & Cleaning",
      desc: "Keep your washing machine running like new with our expert cleaning and repair solutions.",
      button: "Contact Us",
      image: "/images/Herosection/Washingmachine.jpg",
    },
    {
      id: 3,
      subtitle: "24/7 Emergency Service",
      title: "Water Purifier Service & Repair",
      desc: "Pure water, pure health. We provide quick and reliable purifier repair & installation service.",
      button: "Contact Us",
      image: "/images/Herosection/Water.jpg",
    },
  ];

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-[70vh] sm:h-[80vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-[70vh] sm:h-[80vh] bg-cover bg-center relative flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/60"></div>

              <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-16 text-left">
                <motion.p
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-[10px] sm:text-xs md:text-sm font-medium text-teal-300 flex items-center gap-2"
                >
                  <span className="w-4 sm:w-5 border-t-2 border-teal-400"></span>
                  {slide.subtitle}
                </motion.p>

                <motion.h1
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
                  className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-snug max-w-sm sm:max-w-md md:max-w-xl drop-shadow-lg"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
                  className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-gray-200 max-w-xs sm:max-w-md"
                >
                  {slide.desc}
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.9, ease: "easeOut" }}
                  className="mt-4 sm:mt-5 bg-[#f5d974] px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-xs sm:text-sm md:text-base font-semibold text-gray-900 hover:bg-yellow-500 rounded-lg shadow-lg transition"
                >
                  {slide.button}
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
