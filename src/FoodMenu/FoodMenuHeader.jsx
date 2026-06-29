
import React from 'react';
import Breadcrumb from '../Components/Breadcrumb';


function FoodMenuHeader() {

const slugs = [
    { label: "Home", path: "/" },          
    { label: "About Us", path: "/about" }, 
    { label: "FoodMENU", path: "/Foodmenu" } 
  ];

  return (
    
    <div className="w-full bg-gray-100 py-12 px-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">FOOD MENU</h1>
          <p className="text-pink-500 font-medium text-sm mt-1">Sagayamadha Ladies Hostel</p>
        </div>
<>
<Breadcrumb slugs={slugs}/>
</>
      </div>
    </div>
  );
}

export default FoodMenuHeader;