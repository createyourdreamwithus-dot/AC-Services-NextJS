"use client";

import { FaMapMarkerAlt, FaEnvelope, FaClock, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2e2d31] text-gray-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-600">
        
        <div className="flex items-center gap-3 px-6 py-6">
          <FaMapMarkerAlt className="text-[#f5d974]" size={20} />
          <p>
            <span className="font-semibold text-white">Address</span>{" "}
            No.2, Mookachantram Main Road, MMC, Chennai - 600051
          </p>
        </div>

        <div className="flex flex-col gap-3 px-6 py-6">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-[#f5d974]" size={20} />
            <p>
              <span className="font-semibold text-white">Email</span>{" "}
              sirularajan@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-[#f5d974]" size={20} />
            <p>
              <span className="font-semibold text-white">Phone</span>{" "}
              +91 9361259524
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 px-6 py-6">
          <FaClock className="text-[#f5d974]" size={20} />
          <p>
            <span className="font-semibold text-white">Open Hours</span>{" "}
            Open 24 Hours
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-600 py-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Loazzne. All Rights Reserved.
      </div>
    </footer>
  );
}
