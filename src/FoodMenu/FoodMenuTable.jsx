// File: src/FoodMenu/FoodMenuTable.jsx
import React from 'react';
import { FaCoffee, FaSun, FaCookieBite, FaMoon } from 'react-icons/fa';

function FoodMenuTable() {
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
    <section className="w-full bg-gray-50 py-16 px-4 md:px-12 flex-grow">
      {/* Upper Main Heading block */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-wide uppercase">
          NUTRITIOUS, TASTY, AND TIMELY — OUR WEEKLY MENU AT A GLANCE
        </h2>
        <div className="w-24 h-1 bg-pink-500 mx-auto mt-3 mb-4"></div>
        <p className="text-gray-500 max-w-3xl mx-auto text-sm italic leading-relaxed">
          At Sagayamadha Ladies Hostel, we believe food is more than just a meal — it's comfort, care, and community. Here's what's our meal plan for a week!
        </p>
      </div>

    
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuData.map((item, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
        
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-4">
              <h3 className="text-lg font-bold text-white tracking-wider uppercase">
                {item.day}
              </h3>
            </div>


            <div className="p-6 flex flex-col gap-5 text-sm">
              
              {/* Breakfast Slot */}
              <div className="flex gap-4 items-start pb-4 border-b border-gray-100">
                <div className="p-2 bg-amber-50 rounded-lg text-amber-600 shrink-0 mt-0.5">
                  <FaCoffee className="text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-700 tracking-wide uppercase text-xs mb-1">Breakfast</h4>
                  <p className="text-gray-500 leading-relaxed">{item.breakfast}</p>
                </div>
              </div>

              {/* Lunch Slot */}
              <div className="flex gap-4 items-start pb-4 border-b border-gray-100">
                <div className="p-2 bg-orange-50 rounded-lg text-orange-600 shrink-0 mt-0.5">
                  <FaSun className="text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-700 tracking-wide uppercase text-xs mb-1">Lunch</h4>
                  <p className="text-gray-500 leading-relaxed">{item.lunch}</p>
                </div>
              </div>

              {/* Evening Snacks Slot */}
              <div className="flex gap-4 items-start pb-4 border-b border-gray-100">
                <div className="p-2 bg-teal-50 rounded-lg text-teal-600 shrink-0 mt-0.5">
                  <FaCookieBite className="text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-700 tracking-wide uppercase text-xs mb-1">Evening Snacks</h4>
                  <p className="text-gray-500 leading-relaxed">{item.snacks}</p>
                </div>
              </div>

              {/* Dinner Slot */}
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600 shrink-0 mt-0.5">
                  <FaMoon className="text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-700 tracking-wide uppercase text-xs mb-1">Dinner</h4>
                  <p className="text-gray-500 leading-relaxed">{item.dinner}</p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FoodMenuTable;