import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1800 });
  }, []);

  return (
    <section className="bg-gray-800 text-white py-16 px-6 md:px-20" id="about-section">
      <div className="max-w-6xl mx-auto space-x-14 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
          <img
            src="https://www.abac-bd.com/wp-content/uploads/dr-yunus-nobel.jpg"
            alt="Dr. Muhammad Yunus"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>
        
        {/* Content Section */}
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <h2 className="text-4xl font-bold text-orange-400 mb-4">
            About Dr. Muhammad Yunus
          </h2>
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            Dr. Muhammad Yunus is a Nobel Laureate, economist, and social entrepreneur, 
            widely known as the pioneer of microfinance. He founded Grameen Bank, 
            which provides micro-loans to the underprivileged, empowering millions 
            to escape poverty. His vision of a world without poverty has inspired 
            global financial inclusion initiatives.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Through his leadership, social business has become a transformative force 
            in tackling social and economic challenges. His contributions continue to 
            shape sustainable development worldwide.
          </p>
          
          {/* Achievements Section */}
          <h3 className="text-2xl font-bold text-blue-500 mt-6">Major Achievements</h3>
          <ul className="list-disc list-inside text-gray-300 text-lg">
            <li>Nobel Peace Prize (2006)</li>
            <li>Presidential Medal of Freedom (USA)</li>
            <li>World Food Prize</li>
            <li>Congressional Gold Medal</li>
          </ul>

          {/* Books & Contributions */}
          <h3 className="text-2xl font-bold text-blue-500 mt-6">Books & Contributions</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Dr. Yunus has authored several influential books, including:
          </p>
          <ul className="list-disc list-inside text-gray-300 text-lg">
            <li>"Banker to the Poor"</li>
            <li>"Creating a World Without Poverty"</li>
            <li>"Building Social Business"</li>
          </ul>
          
          {/* Social Impact */}
          <h3 className="text-2xl font-bold text-blue-500 mt-6">Social Impact</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            His innovative microfinance model has lifted millions out of poverty and influenced 
            global economic policies to support social business initiatives.
          </p>

          {/* CTA Section */}
          <div className="mt-6">
            <a 
              href="https://en.wikipedia.org/wiki/Muhammad_Yunus" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg text-lg">
              Learn More About Dr. Yunus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;