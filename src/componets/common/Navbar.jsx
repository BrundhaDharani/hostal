import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.webp";

function HostelNavbar({ hostelName }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const link = `
    text-gray-700
    font-semibold
    text-sm
    px-3 py-2
    rounded-md
    transition-all
    duration-300
    hover:text-pink-500
    hover:scale-110
    hover:-translate-y-1
    active:scale-95
  `;

  const mobileLink = `
    text-gray-700
    font-semibold
    text-sm
    px-4 py-3
    w-full text-left
    border-b border-gray-100
    hover:text-pink-500
    hover:bg-gray-50
    transition-colors
    duration-200
  `;

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/about" },
    { label: "FEATURES", path: "/features" },
    { label: "AMENITIES", path: "/amenities" },
    { label: "FOOD", path: "/food" },
    { label: "GALLERY", path: "/gallary" },
    { label: "CONTACT US", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 md:py-4">

        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src={logo}
            alt="Sagayamadha Logo"
            className="h-14 w-14 sm:h-16 sm:w-16 md:h-24 md:w-24 object-contain rounded-full"
          />
          <p className="text-red-600 font-extrabold text-sm sm:text-base md:text-lg">
            {hostelName}
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigate(item.path)}
              className={link}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-gray-700 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-700 transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-700 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen border-t border-gray-100" : "max-h-0"
        }`}
      >
        <div className="flex flex-col bg-white">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigate(item.path)}
              className={mobileLink}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default HostelNavbar;