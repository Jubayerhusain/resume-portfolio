import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft, FaVideo, FaMicrophone, FaCameraRetro } from "react-icons/fa";

const GellaryWithOthers = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div id="legacy" className="bg-gray-100 py-12 px-4 md:px-12 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
        Dr. Yunus's Legacy
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-0">
        {/* Photo Gallery */}
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between" data-aos="fade-up">
          <FaCameraRetro className="text-blue-500 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold text-center mt-4">Photo Gallery</h3>
          <p className="text-center text-gray-600">Explore moments from his journey.</p>
          <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md">
            View Gallery →
          </button>
        </div>
        {/* Quotes */}
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between" data-aos="fade-up">
          <FaQuoteLeft className="text-blue-500 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold text-center mt-4">Quotes</h3>
          <p className="text-center text-gray-600">Inspirational words from Dr. Yunus.</p>
          <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md">
            Read Quotes →
          </button>
        </div>
        {/* Videos */}
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between" data-aos="fade-up">
          <FaVideo className="text-blue-500 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold text-center mt-4">Videos</h3>
          <p className="text-center text-gray-600">Watch his inspiring talks.</p>
          <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md">
            Watch Videos →
          </button>
        </div>
        {/* PM's Speeches */}
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between" data-aos="fade-up">
          <FaMicrophone className="text-blue-500 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold text-center mt-4">Speeches</h3>
          <p className="text-center text-gray-600">Listen to his thoughts and vision.</p>
          <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md">
            Listen Now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default GellaryWithOthers;
