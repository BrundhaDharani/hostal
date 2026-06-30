// src/Components/CommonGrid.jsx
import React from 'react';

function CommonGrid({ sectionTitle, sectionDesc, items }) {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 flex-grow">
      
      
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-extrabold text-gray-800 tracking-wide uppercase">
          {sectionTitle}
        </h2>
        <div className="w-24 h-1 bg-pink-500 mx-auto mt-3 mb-2"></div>
        <p className="text-gray-500 italic text-sm">{sectionDesc}</p>
      </div>

  
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="flex gap-5 items-start">
        
              <div className="p-3 border border-gray-100 rounded-md bg-gray-50 flex items-center justify-center shrink-0 shadow-sm text-pink-600 text-3xl">
                {item.icon}
              </div>
            
              <div>
                <h3 className="font-bold text-gray-800 text-base tracking-wide uppercase mb-1">
                  {item.title}
                </h3>
      
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc || item.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-red-500 font-medium grid col-span-full">No items found!</p>
        )}
      </div>

    </section>
  );
}

export default CommonGrid;
