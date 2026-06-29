import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#3a2d38] text-gray-300 pt-10 pb-6 border-t-4 border-[#e91e63]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3">
              SAGAYAMADHA LADIES HOSTEL
            </h3>
            <p className="text-white-400 text-sm leading-relaxed font-light">
              Located in the center of Trichy city. Safe, secure, and very close to all major colleges, 
              schools, and business centres.
            </p>
          </div>

      
          <div className="md:pl-10">
            <h3 className="text-base font-semibold text-white uppercase tracking-wider mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-[#e91e63] transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#e91e63] transition-colors duration-200">About Us</a>
              </li>
              <li>
                <a href="/amenities" className="hover:text-[#e91e63] transition-colors duration-200">Amenities</a>
              </li>
              <li>
                <a href="/features" className="hover:text-[#e91e63] transition-colors duration-200">Features</a>
              </li>
              <li>
                <a href="/food" className="hover:text-[#e91e63] transition-colors duration-200">Food Menu</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="text-base font-semibold text-white uppercase tracking-wider mb-3">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 Near Chatram Bus Stand, Trichy, Tamil Nadu</li>
              <li>📞 Phone: +91 9876543210</li>
              <li>✉️ Email: info@sagayamadhahostel.com</li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright section */}
        <div className="border-t border-gray-800 pt-6 text-center md:flex md:justify-between md:items-center">
          <p className="text-xs text-gray-500">
            © 2026 Sagayamadha Ladies Hostel. All Rights Reserved.
          </p>
          <div className="flex justify-center gap-4 text-xs text-gray-500 mt-2 md:mt-0">
            <a href="#" className="hover:text-[#e91e63] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#e91e63] transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;