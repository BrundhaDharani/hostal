// src/Components/CommonGrid.jsx
import React from 'react';

function CommonGrid({ sectionTitle, sectionDesc, items }) {
  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-16 flex-grow">

      <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-wide uppercase">
          {sectionTitle}
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-pink-500 mx-auto mt-3 mb-2"></div>
        <p className="text-gray-500 italic text-xs sm:text-sm px-2">{sectionDesc}</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-10 md:gap-y-12">
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="flex gap-4 sm:gap-5 items-start">

              <div className="p-2.5 sm:p-3 border border-gray-100 rounded-md bg-gray-50 flex items-center justify-center shrink-0 shadow-sm text-pink-600 text-2xl sm:text-3xl">
                {item.icon}
              </div>

              <div className="min-w-0">
                <h3 className="font-bold text-gray-800 text-sm sm:text-base tracking-wide uppercase mb-1">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed break-words">
                  {item.desc || item.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-red-500 font-medium col-span-full">No items found!</p>
        )}
      </div>

    </section>
  );
}

export default CommonGrid;