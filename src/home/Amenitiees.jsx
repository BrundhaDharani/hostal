import React, { useEffect, useState, useRef } from "react";


const WifiIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8.24 14.76a6 6 0 018.52 0M5.07 11.59a10 10 0 0113.86 0M1.9 8.41a14 14 0 0120.2 0" />
  </svg>
);

const BusIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2zM17 14h.01M7 14h.01" />
  </svg>
);

const PlugIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const UtensilsIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  </svg>
);

const WaterIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const HeaterIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 4H15m0 0a2 2 0 110-4m0 0a2 2 0 110 4m-3.5 3.5a2.5 2.5 0 115 0" />
  </svg>
);

const TvIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 4h10M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM9 20l3-3 3 3" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const HomeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);
const AmenityCard = ({ icon: Icon, title, description, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
      }}
      className={`flex items-start gap-5 p-6 rounded-xl transition-all duration-[1000ms] transform hover:bg-gray-50/80 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Premium Pinkish-Red Icon Frame matching image_31f2bc.png */}
      <div className="flex-shrink-0 text-[#e91e63] p-3 bg-pink-50 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-sm group-hover:shadow-pink-100">
        <Icon />
      </div>

      {/* Content Side */}
      <div className="flex-1">
        <h4 className="text-base font-bold text-gray-800 uppercase tracking-wider group-hover:text-[#e91e63] transition-colors duration-300">
          {title}
        </h4>
        <p className="text-gray-500 mt-2 text-sm leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  );
};

const AmenitiesPage = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);


  const amenitiesData = [
    {
      id: 1,
      icon: WifiIcon,
      title: "FREE WI-FI",
      description: "We provide high speed fiber-optics broadband for all the hostelers in free of cost."
    },
    {
      id: 2,
      icon: BusIcon,
      title: "TRANSPORTATION",
      description: "Transportation facility will be provided to the college and school students for their easier / safer journey."
    },
    {
      id: 3,
      icon: PlugIcon,
      title: "POWER BACKUPS",
      description: "Stretch your Website to the Full Width or make it boxed to surprise your visitors."
    },
    {
      id: 4,
      icon: UtensilsIcon,
      title: "WELL EQUIPED KITCHEN",
      description: "Home prepared vegetarian and non-vegetarian food will be provided."
    },
    {
      id: 5,
      icon: WaterIcon,
      title: "PURIFIED DRINKING WATER",
      description: "Display your Content attractively using Parallax Sections that have unlimited customizable areas."
    },
    {
      id: 6,
      icon: HeaterIcon,
      title: "WATER HEATER",
      description: "Insomniacs provides support for Native HTML5 Videos that can be added to a Full Width Background."
    },
    {
      id: 7,
      icon: TvIcon,
      title: "WIDE SCREEN LCD TV",
      description: "Looks beautiful & ultra-sharp on Retina Displays with Retina Icons, Fonts & Images."
    },
    {
      id: 8,
      icon: ShieldIcon,
      title: "24 X 7 TOTAL SECURITY",
      description: "Complete control on each & every element that provides endless customization possibilities."
    },
    {
      id: 9,
      icon: HomeIcon,
      title: "GATED COMMUNITY",
      description: "Change your Website's Primary Scheme instantly by simply adding the dark class to the body."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Elegant Header Section */}
        <div 
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 transform ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3a2d38] tracking-widest uppercase">
            AMENITIES WHICH WE PROVIDES
          </h2>
          <p className="text-gray-400 mt-4 text-lg md:text-xl font-light">
            We provides all the required .
          </p>
          
          <div className="w-16 h-[2.5px] bg-[#3a2d38] mx-auto mt-6"></div>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {amenitiesData.map((amenity, index) => {
          
            const delay = (index % 3) * 150 + Math.floor(index / 3) * 100;
            return (
              <AmenityCard
                key={amenity.id}
                icon={amenity.icon}
                title={amenity.title}
                description={amenity.description}
                delay={delay}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AmenitiesPage;