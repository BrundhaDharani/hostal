
import React from "react";
import hostelVideo from "../assets/explore.mp4";


const AboutUs = () => {


  return (
    <section id="about" className="py-16 px-8 bg-gray-50">

  
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          One of the Highly Well Reputed Ladies Hostel
        </h2>
        <p className="text-gray-600 text-lg font-semibold">
          Accommodations on daily / monthly basis with affordable charges
        </p>
      </div>

      
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">

        <div className="flex-1 bg-white rounded-xl shadow-md p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
          <h3 className="text-xl font-extrabold text-gray-900 mb-3">Why Choose Us</h3>
          <p className="text-gray-600 text-sm font-medium leading-relaxed">
            Our hostel has various accommodation plans — 2 sharing, 3 sharing to maximum 5 sharing at a very lowest price with unbelievable facilities.
          </p>
        </div>

        <div className="flex-1 bg-white rounded-xl shadow-md p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
          <h3 className="text-xl font-extrabold text-gray-900 mb-3">Our Mission</h3>
          <p className="text-gray-600 text-sm font-medium leading-relaxed">
            To provide safely, homely, friendly environment with good food for college students and working women in affordable price.
          </p>
        </div>

        <div className="flex-1 bg-white rounded-xl shadow-md p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
          <h3 className="text-xl font-extrabold text-gray-900 mb-3">What We Do</h3>
          <p className="text-gray-600 text-sm font-medium leading-relaxed">
            We provide various accommodation plans that suits even poor students to look over their career path while staying away from home.
          </p>
        </div>

      </div>
      <div className="w-full mt-16">
        <div className="relative overflow-hidden" style={{ height: "500px" }}>

          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={hostelVideo} type="video/mp4" />
          </video>

        
          <div className="absolute inset-0 bg-black/50" />

      
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
            <h3 className="text-white text-3xl md:text-4xl font-extrabold uppercase tracking-wide mb-4">
              Better Place to Stay in Trichy
            </h3>
            <p className="text-white/80 text-base md:text-lg mb-8">
              Safety... Homely... Friendly... Environment for College and Working Women.
            </p>
          
    
            <button
              onClick={() => navigate("/about")}
              className="text-white text-xl border-2 border-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300"
            >
              About Us
            </button>
            
    
          </div>

        </div>
      </div>

    </section>
  );
};

export default AboutUs;