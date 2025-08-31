"use client";

import CountUp from "react-countup";

export default function CounterSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center mb-16 text-gray-800">
          Numbers Speakers.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-b border-gray-200 py-12">
          <div className="flex flex-col items-center justify-center min-h-[180px] px-4">
            <span className="text-5xl font-bold text-[#00bcd4]">
              <CountUp end={8870} duration={2} separator="," />
            </span>
            <p className="text-gray-600 mt-4 leading-snug">
              AC Repairs &<br />Installations
            </p>
          </div>
          <div className="flex flex-col items-center justify-center min-h-[180px] px-4">
            <span className="text-5xl font-bold text-[#00bcd4]">
              <CountUp end={4760} duration={2} separator="," />
            </span>
            <p className="text-gray-600 mt-4 leading-snug">
              Washing Machine<br />Services Done
            </p>
          </div>

          <div className="flex flex-col items-center justify-center min-h-[180px] px-4">
            <span className="text-5xl font-bold text-[#00bcd4]">
              <CountUp end={9032} duration={2} separator="," />
            </span>
            <p className="text-gray-600 mt-4 leading-snug">
              RO Water Purifier<br />Install & Repair
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
