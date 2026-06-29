import React, { useState } from "react";
import banner1 from "../assets/banner-1.jpg";
import banner2 from "../assets/banner-2.webp"; 
import safeImage from "../assets/safe_image.webp"; 

const Hero = () => {
  
  const images = [banner1, banner2, safeImage];
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      
      <div className="absolute inset-0">
        <img 
          src={images[currentIndex]} 
          alt="Background" 
          className="w-full h-full object-cover transition-all duration-50 ease-in-out" 
        />
      </div>

    
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 tracking-wide">
          WELCOME TO<br/> <b className="text-black-500">SAGAYAMADHA</b> LADIES HOSTEL
        </h1>
        <p className="text-white text-lg md:text-xl font-medium">
          Safety... Homely... Friendly... Environment for College and Working Women.
        </p>
        
  
        <div className="absolute bottom-6 flex gap-2">
          {images.map((_, index) => (
            <div 
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${currentIndex === index ? 'bg-pink-600 scale-125' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>

    
      <button 
        onClick={() => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/50 text-white w-10 h-16 transition-all duration-300 z-10 font-bold text-xl flex items-center justify-center focus:outline-none"
      >
        &lt;
      </button>

  
      <button 
        onClick={() => setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/50 text-white w-10 h-16 transition-all duration-300 z-10 font-bold text-xl flex items-center justify-center focus:outline-none"
      >
        &gt;
      </button>

    </section>
  );
};

export default Hero;
