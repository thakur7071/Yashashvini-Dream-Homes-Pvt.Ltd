import { Link } from 'react-router-dom';
import { HomeAboutImg } from '../../Assets';

function HomeAbout() {
  return (
    <div className="bg-white py-20 px-4 md:px-8 lg:px-16">
      {/* Company Introduction */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1d3e8e] mb-6">
         Yashashvini Homes Pvt. Ltd
        </h2>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
          At <strong>Yashashvini Dream Homes Pvt. Ltd</strong>, we aim to transform the way you experience
          real estate. We craft homes that combine aesthetic appeal, modern architecture,
          and sustainable living — all delivered with transparency and trust. Whether it’s your
          first home or your next investment, we are committed to delivering long-term value.
        </p>
        <Link to="/about">
          <button className="mt-8 inline-block bg-[#1d3e8e] text-white font-medium px-8 py-3 rounded-md hover:bg-[#251f5c] transition duration-300 shadow-md">
            Learn More
          </button>
        </Link>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 mb-24">
        <div className="w-full">
          <img
            src={HomeAboutImg}
            alt="Why Choose Us"
            className="w-full h-80 object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full text-gray-700">
          <h3 className="text-3xl font-semibold text-[#1d3e8e] mb-5">Why Choose Us</h3>
          <ul className="space-y-4 text-lg leading-relaxed list-disc list-inside">
            <li>
              <strong>Trust & Transparency:</strong> Clear communication, honest pricing, and no hidden surprises.
            </li>
            <li>
              <strong>On-Time Delivery:</strong> We meet deadlines with precision without compromising quality.
            </li>
            <li>
              <strong>Innovative Designs:</strong> Our homes reflect modern aesthetics blended with functional living.
            </li>
            <li>
              <strong>Customer-First Approach:</strong> We build relationships that last beyond the project.
            </li>
          </ul>
        </div>
      </div>

      {/* Vision / Banner Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden"
        style={{ backgroundImage: `url(${HomeAboutImg})` }}
      >
        <div className="bg-black bg-opacity-60 backdrop-blur-sm py-20 px-4 md:px-10">
          <div className="max-w-4xl mx-auto text-white text-center">
            <h3 className="text-4xl font-bold mb-4">Building Tomorrow, Today</h3>
            <p className="text-lg md:text-xl leading-relaxed">
              Yashashvini Dream Homes is dedicated to shaping modern communities with future-ready
              infrastructure. Every brick we lay is rooted in our commitment to excellence,
              sustainability, and a better tomorrow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
