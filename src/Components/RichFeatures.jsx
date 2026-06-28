import React, { useEffect, useState, useRef } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaWifi,
  FaShieldAlt,
  FaBus,
  FaHospital
} from "react-icons/fa";
import corridorImg from "../assets/bannar3.webp";


const ScrollRevealItem = ({ children, direction = "left", delay = 0 }) => {
  const [isElementVisible, setIsElementVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsElementVisible(true);
          
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15, 
        rootMargin: "0px 0px -80px 0px" 
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);


  const directionClasses = {
    left: isElementVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16",
    right: isElementVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16",
    center: isElementVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
    header: isElementVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
  };

  return (
    <div
      ref={elementRef}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
      }}
      className={`transition-all duration-[1200ms] transform ${directionClasses[direction]}`}
    >
      {children}
    </div>
  );
};

const RichFeatures = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <ScrollRevealItem direction="header">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#3a2d38] tracking-wider uppercase">
              EVEN MORE FEATURE RICH
            </h2>
            <p className="text-gray-500 mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
              The hostel is located in center of Trichy city, where it connects all the major
              colleges, schools and business centres.
            </p>
          
            <div className="w-12 h-[2.5px] bg-[#3a2d38] mx-auto mt-6"></div>
          </div>
        </ScrollRevealItem>

        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
          
        
          <div className="space-y-12 order-2 lg:order-1">
            
            {/* Feature 1 - College & Schools */}
            <ScrollRevealItem direction="left" delay={0}>
              <div className="flex items-start gap-4 text-right justify-end group">
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-800 uppercase tracking-wide group-hover:text-[#e91e63] transition-colors duration-300">
                    COLLEGE & SCHOOLS
                  </h4>
                  <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                    Within one kilometer surrounding, you can find all popular colleges and schools.
                  </p>
                </div>
                <div className="w-12 h-12 bg-[#e91e63] rounded-full flex items-center justify-center text-white text-xl flex-shrink-0 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[#e91e63]/30">
                  <FaGraduationCap />
                </div>
              </div>
            </ScrollRevealItem>

    
            <ScrollRevealItem direction="left" delay={200}>
              <div className="flex items-start gap-4 text-right justify-end group">
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-800 uppercase tracking-wide group-hover:text-[#e91e63] transition-colors duration-300">
                    BUSINESS CENTER
                  </h4>
                  <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                    Proximity to business centers like Chatram Bus Stand, N.S.B. Road, Chinthamani Bazaar, etc.
                  </p>
                </div>
                <div className="w-12 h-12 bg-[#e91e63] rounded-full flex items-center justify-center text-white text-xl flex-shrink-0 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[#e91e63]/30">
                  <FaBriefcase />
                </div>
              </div>
            </ScrollRevealItem>

            
            <ScrollRevealItem direction="left" delay={400}>
              <div className="flex items-start gap-4 text-right justify-end group">
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-800 uppercase tracking-wide group-hover:text-[#e91e63] transition-colors duration-300">
                    FREE WI-FI
                  </h4>
                  <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                    We provide high speed fiber optics broadband for all the hostelers in free of cost.
                  </p>
                </div>
                <div className="w-12 h-12 bg-[#e91e63] rounded-full flex items-center justify-center text-white text-lg flex-shrink-0 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[#e91e63]/30">
                  <FaWifi />
                </div>
              </div>
            </ScrollRevealItem>

          </div>

          
          <div className="order-1 lg:order-2 flex justify-center py-6 lg:py-0">
            <ScrollRevealItem direction="center" delay={150}>
              <div className="relative rounded-md overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] max-w-[340px] md:max-w-sm border-8 border-white transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)] hover:scale-[1.02]">
                <img 
                  src={corridorImg} 
                  alt="Sagayamadha Ladies Hostel Corridor" 
                  className="w-full h-auto object-cover max-h-[520px] block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
              </div>
            </ScrollRevealItem>
          </div>

    
          <div className="space-y-12 order-3">
            
          
            <ScrollRevealItem direction="right" delay={0}>
              <div className="flex items-start gap-4 text-left justify-start group">
                <div className="w-12 h-12 bg-[#e91e63] rounded-full flex items-center justify-center text-white text-xl flex-shrink-0 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[#e91e63]/30">
                  <FaShieldAlt />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-800 uppercase tracking-wide group-hover:text-[#e91e63] transition-colors duration-300">
                    SECURITY
                  </h4>
                  <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                    We provide high secure place for womens. Safe and secure neighbourhood.
                  </p>
                </div>
              </div>
            </ScrollRevealItem>

          
            <ScrollRevealItem direction="right" delay={200}>
              <div className="flex items-start gap-4 text-left justify-start group">
                <div className="w-12 h-12 bg-[#e91e63] rounded-full flex items-center justify-center text-white text-xl flex-shrink-0 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[#e91e63]/30">
                  <FaBus />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-800 uppercase tracking-wide group-hover:text-[#e91e63] transition-colors duration-300">
                    NEARER TO CHATRAM BUS STAND
                  </h4>
                  <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                    We were located nearer to Chatram Bus Stand, Trichy.
                  </p>
                </div>
              </div>
            </ScrollRevealItem>

  
            <ScrollRevealItem direction="right" delay={400}>
              <div className="flex items-start gap-4 text-left justify-start group">
                <div className="w-12 h-12 bg-[#e91e63] rounded-full flex items-center justify-center text-white text-xl flex-shrink-0 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[#e91e63]/30">
                  <FaHospital />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-800 uppercase tracking-wide group-hover:text-[#e91e63] transition-colors duration-300">
                    HOSPITALS & CLINICS
                  </h4>
                  <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                    Hospitals & Clinics were available in walkable distance.
                  </p>
                </div>
              </div>
            </ScrollRevealItem>

          </div>

        </div>

      </div>
    </section>
  );
};

export default RichFeatures;