import React from 'react';
import { ContactBanner, HomeAboutImg } from '../Assets';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <>
      {/* Banner */}
  <div className="lg:h-[22rem] overflow-hidden">
        <img src={ContactBanner} alt="About Banner" className="w-full h-full object-cover" />
      </div>


      {/* Main Content */}
      <div className="max-w-6xl mx-auto my-10 px-4 flex flex-col lg:flex-row gap-10">
        
        {/* Contact Form */}
        <div className="flex-1 bg-white p-8 shadow-xl rounded-2xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#1d3e8e] text-white p-3 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Address Info */}
        <div className="flex-1 bg-gray-50 p-8 shadow-xl rounded-2xl flex flex-col justify-center items-center text-center space-y-5">
          {/* Logo */}
          <div className="w-20 h-20 bg-[#1d3e8e] text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4">
            <img src=''  alt="logo" />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-800">Reach Out to Us</h2>

          {/* Address */}
          <div className="text-gray-700 space-y-4">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#1d3e8e] mt-1" />
              <p>
                123 Main Street
                Your City,<br/> Your State,
                Country
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#1d3e8e]" />
              <p>+1 234 567 8901</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#1d3e8e]" />
              <p>contact@yourdomain.com</p>
            </div>
            <div>
              <p className="font-semibold">Working Hours:</p>
              <p>Mon - Fri: 9 AM - 6 PM<br />Sat - Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
