import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import logo from "../assets/logo.webp";
   
function HostelNavbar({ hostelName }) {
  const navigate = useNavigate(); 

  const link = `
    text-gray-700 
    font-semibold 
    text-sm 
    px-3 py-1 
    rounded-md 
    transition-all 
    duration-300 
    hover:text-pink-500
    hover:scale-110 
    hover:-translate-y-1 
    active:scale-95
  `;

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white shadow-lg">

      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Sagayamadha Logo"
          className="h-24 w-24 object-contain rounded-full"
        />
        <p className="text-red-600 font-extrabold text-lg">{hostelName}</p>
      </div>

      <div className="flex items-center gap-6">

    
        <button onClick={() => navigate("/")} className={link}>HOME</button>

      
        <button onClick={() => navigate("/about")} className={link}>
          ABOUT US
        </button>
        <button onClick={() => navigate("/features")} className={link}>
          FEATURES
        </button>
        
           <button onClick={() => navigate("/amenities")} className={link}>
        AMENITIES
        </button>
        <button onClick={() => navigate("/food")} className={link}>
        FOOD
        </button>
        
        
      
  
        <button onClick={()=>navigate("/gallary")}className={link}>GALLERY</button>
      
        <a href="#contact" className={link}>CONTACT US</a>
      </div>

    </nav>
  );
}

export default HostelNavbar;