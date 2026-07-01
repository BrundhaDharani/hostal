import React from "react";

const Location = () => {
  return (
    <div className="w-full bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-[#3a2d38] uppercase tracking-wider">
            Our Location
          </h3>
          <p className="text-gray-500 text-sm mt-2 font-light">
            We are located in the heart of Trichy city, very close to Chatram Bus Stand.
          </p>
          <div className="w-12 h-[2px] bg-[#e91e63] mx-auto mt-4"></div>
        </div>
        
        {}
        <div className="w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl border-4 border-white relative bg-gray-100">
          <iframe
            title="Sagayamadha Hostel Map Location"
            src="https://maps.google.com/maps?q=Butterworth%20Road,%20Teppakulam,%20Trichy,%20Tamil%20Nadu&t=&z=16&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
      </div>
    </div>
  );
};

export default Location;