import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiTwitterXLine } from "react-icons/ri";


const Bannar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="flex items-center justify-center bg-gray-800 py-24 h-[600px]">
        <div
          data-aos="fade-up"
          className="text-white text-center p-8  "
        >
          <img
            src="https://www.bssnews.net/assets/news_photos/2024/12/30/image-234498-1735556781.jpg"
            alt="Donald J. Trump"
            className="w-48 h-48 mx-auto object-cover rounded-full border-4 border-gray-100"
          />
          <h1 className="text-6xl font-extrabold mt-4 mb-2 ">Dr. Yunus's </h1>
          <p className="text-gray-400 text-xl">
          Dr Yunus among world's most influential Muslims in 2025
          </p>
          <a
            href="https://x.com/yunus_centre?lang=en&mx=2"
            className="flex items-center justify-center mt-4 text-yellow-400 hover:text-yellow-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXLine></RiTwitterXLine>
            @realdryunus
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
