import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa"; 

const ContactBanner = () => {
      const navigate = useNavigate();
  return (
    <div className="w-full bg-[#583d53] text-white py-10 px-4 flex flex-wrap items-center justify-center gap-2 text-center text-lg md:text-xl font-medium tracking-wide">
      <span>Looking for Paying Guest accomodation in best rate...</span>
      <a 
        href="#contact" 
        onClick={() => navigate("/contact")}
        className="font-bold underline hover:text-gray-200 inline-flex items-center gap-1 transition-colors"
      >
        Contact Us 
        <FaPlay className="text-xs ml-1" />
      </a>
    </div>
  );
};

export default ContactBanner;