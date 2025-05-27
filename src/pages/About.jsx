import React from "react";
import { AboutBanner, ProjectImg } from "../Assets";
import { FaBullseye, FaEye } from "react-icons/fa";

function About() {
  return (
    <>
      {/* Image Banner */}
      <div className="lg:h-[22rem] overflow-hidden">
        <img
          src={AboutBanner}
          alt="About Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Section */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-10 gap-8 mb-[-20px]">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={ProjectImg}
            alt="About us"
            className="w-full max-w-[90%] sm:max-w-[400px] lg:max-w-[400px] xl:max-w-[450px] rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Right: Heading + Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#1d3e8e]">
            Welcome to Yashashvini Dream Homes Pvt. Ltd.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
            Yashashvini Dream Homes Pvt. Ltd. is a visionary real estate company
            committed to delivering quality housing and commercial spaces that
            blend innovation, sustainability, and affordability. With a passion
            for excellence and attention to detail, we aim to create vibrant
            communities where families and businesses can thrive. Our
            experienced team is driven by integrity, customer satisfaction, and
            a belief in turning dreams into reality—brick by brick.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#1d3e8e] text-center mt-16 mb-8">
        Mission & Vision
      </h1>

      {/* Mission & Vision Cards */}
      <div className="px-4 sm:px-6 md:px-20 pt-5 pb-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 bg-black/5">
        {/* Mission Card */}
        <div className="bg-gradient-to-br from-white via-white to-[#1d3e8e] rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-t-4 border-[#1d3e8e]/60">
          <h3 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-[#1d3e8e] mb-3">
            <FaBullseye className="w-6 h-6 text-[#1d3e8e]" />
            Our Mission
          </h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Our mission is to redefine urban living by delivering high-quality,
            affordable real estate solutions that enrich lives and communities.
            We strive to exceed customer expectations through transparency,
            timely delivery, and architectural excellence—while maintaining
            trust as our cornerstone.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-gradient-to-br from-white via-white to-[#1d3e8e] rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-t-4 border-[#1d3e8e]/60">
          <h3 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-[#1d3e8e] mb-3">
            <FaEye className="w-6 h-6 text-[#1d3e8e]" />
            Our Vision
          </h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Our vision is to become a trusted name in Indian real estate—known
            for building sustainable, modern homes and commercial spaces that
            inspire growth and pride. We aim to lead with innovation, enhance
            lifestyles, and contribute to the development of smart cities across
            the nation.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
