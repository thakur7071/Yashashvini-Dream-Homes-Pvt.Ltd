import React from "react";
import { AboutBanner, ProjectImg, Homepage1 } from "../Assets";
import { FaBullseye, FaEye } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [ProjectImg, Homepage1];

function About() {
  return (
    <>
      {/* Banner */}
      <div className="lg:h-[22rem] overflow-hidden">
        <img src={AboutBanner} alt="About Banner" className="w-full h-full object-cover" />
      </div>

      {/* About Section */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-10 gap-8 mb-[-20px]">
        {/* Carousel */}
        <div className="w-full md:w-1/2">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            loop
            className="rounded-lg shadow-md h-[300px] sm:h-[350px] md:h-[400px]"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={`Slide ${i + 1}`} className="w-full h-full object-cover rounded-lg" />
              </SwiperSlide>
            ))}
          </Swiper>
          <style>{`
            .swiper-button-next, .swiper-button-prev {
              color: #1d3e8e; width: 30px; height: 30px;
            }
            .swiper-button-next::after, .swiper-button-prev::after {
              font-size: 18px;
            }
            .swiper-pagination-bullet {
              background: #d1d5db; opacity: 1;
            }
            .swiper-pagination-bullet-active {
              background: #1d3e8e;
            }
          `}</style>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#1d3e8e]">
            Welcome to Yashashvini Dream Homes Pvt. Ltd.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
            Yashashvini Dream Homes Pvt. Ltd. is a visionary real estate company delivering quality housing and commercial spaces blending innovation, sustainability, and affordability. With passion and detail, we build communities for families and businesses to thrive—driven by integrity and a belief in turning dreams into reality, brick by brick.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#1d3e8e] text-center mt-16 mb-8">Mission & Vision</h1>
      <div className="px-4 sm:px-6 md:px-20 pt-5 pb-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 bg-black/5">
        {[{
          icon: <FaBullseye className="w-6 h-6 text-[#1d3e8e]" />,
          title: "Our Mission",
          text: "Our mission is to redefine urban living with high-quality, affordable real estate that enriches lives and communities. We exceed expectations through transparency, timely delivery, and trust."
        }, {
          icon: <FaEye className="w-6 h-6 text-[#1d3e8e]" />,
          title: "Our Vision",
          text: "Our vision is to become a trusted name in Indian real estate, building modern, sustainable spaces that inspire pride and support smart city growth."
        }].map((item, i) => (
          <div key={i} className="bg-gradient-to-br from-white via-white to-[#1d3e8e] rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-t-4 border-[#1d3e8e]/60">
            <h3 className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-[#1d3e8e] mb-3">
              {item.icon} {item.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default About;
