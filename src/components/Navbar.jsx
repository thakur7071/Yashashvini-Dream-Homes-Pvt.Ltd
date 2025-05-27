import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaEllipsisH,
  FaProjectDiagram,
  FaBars,
  FaTimes,
  FaSignInAlt
} from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // SSR flash fix

  useEffect(() => {
    setHasMounted(true); // Delay rendering mobile menu until client-side
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', icon: <FaHome /> },
    { href: '/about', label: 'About us', icon: <FaInfoCircle /> },
   
    { href: '/project', label: 'Project', icon: <FaProjectDiagram /> },
    { href: '/contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  return (
    <>

 {/* Top bar */}
      <div style={{ backgroundColor: "#1d3e8e" }} className="p-1 text-white">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-end items-center px-4 gap-2 md:gap-4">
          <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm md:text-base">
            <span className="whitespace-nowrap">Support: +91-9876543210</span>
            <Link to="/login">
              <button className="bg-white text-[#1d3e8e] px-3 py-1 rounded font-medium hover:bg-gray-200 transition whitespace-nowrap">
                Login
              </button>
            </Link>
            <button className="hidden md:inline-block border border-white px-3 py-1 rounded hover:bg-white hover:text-[#1d3e8e] transition whitespace-nowrap">
              Download Brochure
            </button>
          </div>
        </div>
      </div>


      <nav className="p-2 shadow-sm relative z-50 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          
          {/* Logo on the left */}
          <Link to="/">
            <img
              // src=""
              alt="Logo"
             
            />
          </Link>

          {/* Desktop nav on the right */}
          <div className="hidden md:flex items-center gap-6 font-medium text-black">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="hover:underline transition flex items-center gap-2"
              >
                {link.icon}
                {link.label}
              </Link>
            ))}

           
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none text-2xl text-black"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {hasMounted && (
          <div
            className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ease-in-out
              ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <div className="text-lg font-bold text-black">Menu</div>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="focus:outline-none text-2xl text-black"
              >
                <FaTimes />
              </button>
            </div>
            <nav className="flex flex-col p-6 space-y-6 text-black font-medium text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:underline flex items-center gap-3"
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}

              {/* Login Button in Mobile Menu */}
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="w-fit bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
              >
                <FaSignInAlt />
                Login
              </Link>
            </nav>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
