import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroImage = () => {
      useEffect(() => {
        AOS.init({ duration: 1800 });
      }, []);
  return (
    <div 
    data-aos="fade-up"
    className="flex justify-center items-center h-[300px] md:h-[600px] w-full mb-20">
      <div className="relative bg-white  overflow-hidden flex items-center justify-center w-full h-full">
        {/* Gradient at the bottom */}
        <div
          className="absolute h-full inset-0 z-10"
          style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.2), rgba(255,255,255,3))",
          }}
        ></div>
        <img
          src="https://i.ytimg.com/vi/0cWUpxwlyz4/maxresdefault.jpg"
          alt="Dr. Yunus Image"
          className="w-full h-full object-cover z-0"
        />
      </div>
    </div>
  );
};

export default HeroImage;
