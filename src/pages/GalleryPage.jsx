import React from 'react'
import CommonHeader from '../componets/common/Header'; 

const Gallary = () => {

    const imageNames = [
    "12.webp", "15.webp", "17.webp", "img 18.webp", "img 19.webp", 
    "img 20.webp", "img1.webp", "img2.webp", "img3.webp", "img4.webp", 
    "img5.webp", "img6.webp", "img7.webp", "img8.webp", "img9.webp", 
    "img10.webp", "img11.webp", "img13.webp", "img14.webp"

  ];

    const slugs=[
         { label: "Home", path: "/" },
         {label:"gallary",path:"/gallary"}
    ]
  return (
    <div className="min-h-screen bg-white">
      <CommonHeader 
        title="Gallery" 
        subtitle="Sagayamadha Ladies Hostel Facilities"
        slugs={slugs}/>

        <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {imageNames.map((name, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
    
            <img 
              src={`/gallary/${name}`} 
              alt={`Hostel view ${index}`} 
              className="w-full h-64 object-cover hover:scale-105 transition-transform" 
            />
          </div>
        ))}
      </div>
      

     

    </div>
  )
}

export default Gallary
