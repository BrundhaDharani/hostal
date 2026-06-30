import React from 'react';
import CommonHeader from '../componets/common/Header';
import { FaCoffee, FaSun, FaCookieBite, FaMoon } from 'react-icons/fa';

function FoodMenuPage() {
  const slugs = [
    { label: "Home", path: "/" },          
    { label: "About Us", path: "/about" }, 
    { label: "Food Menu", path: "/food-menu" }
  ];

  const menuData = [
    {
      day: "Monday",
      breakfast: "Ragi Semiya, Idly, Chutney, Sambar, Tea / Milk",
      lunch: "White Rice, Vathal Kozhambu, Poriyal, Rasam, Butter Milk, Mango Pickle, Appalam",
      snacks: "White Sundal, Tea / Milk",
      dinner: "Sambar Rice, Varuvall, White Rice, Rasam, Butter Milk, Color Appalam"
    },
    {
      day: "Tuesday",
      breakfast: "Uthappam, Rava Kichadi, Chutney, Sambar, Tea / Milk",
      lunch: "Sambar, Rice, Varuvall, Vadagam, Rasam, Butter Milk, Lemon Pickle",
      snacks: "Bajji, Tea / Milk",
      dinner: "Chapathi, Onion Raita, Kurma, White Rice, Rasam, Pickle"
    },
    {
      day: "Wednesday",
      breakfast: "Venpongal, Uzhuntha Vadai, Idly, Chutney, Sambar, Tea / Milk",
      lunch: "Rice, Egg Gravy, Poriyal (or) Kootu, Appalam, Rasam, Butter Milk, Any Pickle",
      snacks: "Pasi Payir Sundal, Tea / Milk",
      dinner: "Kuska, Onion Raita, White Rice, Rasam, Appalam"
    },
    {
      day: "Thursday",
      breakfast: "Wheat Rava Kichadi, Uthappam, Coconut Chutney, Kaara Chutney, Tea / Milk",
      lunch: "Any variety Rice (Lemon, Tamarind, Tomato, Pudhina, Coriander, Curd Rice), Poriyal, Appalam, Milagai Vathal",
      snacks: "Any Bonda, Tea / Milk",
      dinner: "Rava Idly or any variety of Idly, Rice, Rasam, Thuvaiyal"
    },
    {
      day: "Friday",
      breakfast: "Idly, Dosai, Kaara Chutney, Sambar, Tea / Milk",
      lunch: "Rice, Pasi Payir Kuzhambu, Any Poriyal, Rasam, Butter Milk, Vadagam, Garlic Pickle",
      snacks: "Black Sundal, Tea / Milk",
      dinner: "Idiyappam with Gurma (1st & 3rd weekend) / Poori with Potato Masala (2nd & 4th weekend), Chappathi, White Rice, Rasam, Appalam"
    },
    {
      day: "Saturday",
      breakfast: "Sweet Pongal (1st & 3rd Week), Poori, Potato Masala, Tomato Sauce (2nd & 4th), Tea / Milk",
      lunch: "Rice, Fried Rice, Curd Rice, Varuvall, Color Appalam, Mango Pickle",
      snacks: "Uluntha Vadai, Tea / Milk",
      dinner: "Parotta, Veg Kurma (1st & 3rd week) / Kothu Parotta (2nd & 4th week), White Rice, Rasam, Rice Appalam"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <CommonHeader 
        title="FOOD MENU" 
        subtitle="Sagayamadha Ladies Hostel" 
        slugs={slugs} 
      />

      <main className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuData.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-4">
              <h3 className="text-lg font-bold text-white uppercase">{item.day}</h3>
            </div>
            <div className="p-6 flex flex-col gap-4 text-sm">
              <div className="flex gap-4 items-start"><FaCoffee className="mt-1 text-amber-600" /> <div><h4 className="font-bold text-xs uppercase">Breakfast</h4><p>{item.breakfast}</p></div></div>
              <div className="flex gap-4 items-start"><FaSun className="mt-1 text-orange-600" /> <div><h4 className="font-bold text-xs uppercase">Lunch</h4><p>{item.lunch}</p></div></div>
              <div className="flex gap-4 items-start"><FaCookieBite className="mt-1 text-teal-600" /> <div><h4 className="font-bold text-xs uppercase">Snacks</h4><p>{item.snacks}</p></div></div>
              <div className="flex gap-4 items-start"><FaMoon className="mt-1 text-indigo-600" /> <div><h4 className="font-bold text-xs uppercase">Dinner</h4><p>{item.dinner}</p></div></div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default FoodMenuPage;