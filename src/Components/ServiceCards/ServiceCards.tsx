"use client";

import { useState } from "react";
import Image from "next/image";
import { FaSnowflake, FaTshirt, FaWater, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "AC Installation",
    icon: <FaSnowflake className="text-3xl text-cyan-500 drop-shadow-sm" />,
    src: "/images/Servicecard/Ac.jpg",
    description:
      "Professional AC installation with full support and quick turnaround.",
  },
  {
    id: 2,
    title: "Washing Machine Setup",
    icon: <FaTshirt className="text-3xl text-pink-500 drop-shadow-sm" />,
    src: "/images/Servicecard/Washingmachine.jpg",
    description:
      "Reliable setup for all types of washing machines – hassle-free!",
  },
  {
    id: 3,
    title: "RO Water Purifier Install",
    icon: <FaWater className="text-3xl text-blue-500 drop-shadow-sm" />,
    src: "/images/Servicecard/Ro.webp",
    description:
      "Pure water made easy with expert RO installation at your home.",
  },
];

export default function ServiceCards() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <section className="w-full bg-gradient-to-br from-gray-100 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left - List */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
            🛠️ Installation Services
          </h2>
          <div className="flex flex-col gap-5">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`flex items-center gap-4 p-5 rounded-xl border shadow-md transition-all duration-300 
                  hover:scale-[1.02] hover:shadow-xl 
                  ${
                    selectedService.id === service.id
                      ? "border-2 border-[#000] bg-[#f5d974]"
                      : "bg-white/70 border border-transparent"
                  }`}
              >
                <div className="bg-white p-3 rounded-full shadow-inner">
                  {service.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden transition-all">
          <div className="relative w-full h-80">
            <Image
              src={selectedService.src}
              alt={selectedService.title}
              fill
              className="object-cover transition duration-500"
            />
          </div>
          <div className="p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {selectedService.title}
            </h3>
            <p className="text-gray-600 mb-6">{selectedService.description}</p>

            <Link href="/#Contact" passHref>
              <button className="inline-flex items-center gap-3 bg-[#f5d974] text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400 transition">
                Book Installation <FaArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
