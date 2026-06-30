import React from 'react';
import { 
  FaBatteryFull, FaUtensils, FaGlassMartiniAlt, 
  FaHotTub, FaTv, FaShieldAlt, FaHome, FaBus 
} from 'react-icons/fa';

import CommonHeader from "../componets/common/Header"; 
import CommonGrid from "../componets/common/Grid";

function AmenitiesPage() {

  const slugs = [
    { label: "Home", path: "/" },          
    // { label: "About Us", path: "/about" }, 
    { label: "Amenities", path: "/Amenities" } 
  ];
  const amenitiesList = [
    { id: 1, title: "POWER BACKUPS", desc: "Stretch your Website to the Full Width or make it boxed.", icon: <FaBatteryFull className="text-pink-500 text-3xl" /> },
    { id: 2, title: "WELL EQUIPED KITCHEN", desc: "Home prepared vegetarian and non-vegetarian food will be provided.", icon: <FaUtensils className="text-pink-500 text-3xl" /> },
    { id: 3, title: "PURIFIED DRINKING WATER", desc: "Display your Content attractively using Parallax Sections.", icon: <FaGlassMartiniAlt className="text-pink-500 text-3xl" /> },
    { id: 4, title: "WATER HEATER", desc: "Insomniacs provides support for Native HTML5 Videos.", icon: <FaHotTub className="text-pink-500 text-3xl" /> },
    { id: 5, title: "WIDE SCREEN LCD TV", desc: "Looks beautiful & ultra-sharp on Retina Displays.", icon: <FaTv className="text-pink-500 text-3xl" /> },
    { id: 6, title: "24 X 7 TOTAL SECURITY", desc: "Complete control on each & every element.", icon: <FaShieldAlt className="text-pink-500 text-3xl" /> },
    { id: 7, title: "GATED COMMUNITY", desc: "Change your Website's Primary Scheme instantly.", icon: <FaHome className="text-pink-500 text-3xl" /> },
    { id: 8, title: "TRANSPORTATION", desc: "Transportation facility will be provided.", icon: <FaBus className="text-pink-500 text-3xl" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      <CommonHeader 
        title="Amenities" 
        subtitle="Sagayamadha Ladies Hostel Facilities" 
        slugs={slugs} 
      />
      
    
      <CommonGrid 
        sectionTitle="AMENITIES WHICH WE PROVIDES" 
        sectionDesc="We provides all the required." 
        items={amenitiesList} 
      
      />

    </div>
  );
}

export default AmenitiesPage;
