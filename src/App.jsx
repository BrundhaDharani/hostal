import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Breadcrumb from './Components/Breadcrumb';

import HostelNavbar from './Components/HostelNavbar';
import Footer from './Features/pages/Footer'; 
import Location from "./Components/Location"; 

import Hero from "./Components/Hero";
import ContactBanner from "./Components/ContactBanner";
import RichFeatures from "./Components/RichFeatures";


import AboutPage from './about/Aaboutpage'; 
import AboutUs from './about/AboutUs';
import Amenities from "./Amenities/Amenitiees";
import FeaturesPage from "./Features/pages/FeaturesPage";
import AmenitiesPage from "./Amenities/AmenitiesPage";
import FoodMenuPage from "./FoodMenu/FoodMenuPage";
import Gallary from './gallary/Gallary';

const App = () => {
  const hostelName = "SAGAYAMADHA LADIES HOSTEL";

  return (
    <BrowserRouter>
      {}
      <HostelNavbar hostelName="" />
      <Breadcrumb paths={['Home', 'Hostel']} />
      {}
      <Routes>

        <Route path="/" element={
          <>
            <Hero hostelName={hostelName} />
            <ContactBanner />
            <AboutUs />
            <RichFeatures /> 
            <Amenities />
            <Gallary/>
             <Location/>
          </>
        } />
        
        {}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/amenities" element={<AmenitiesPage />} />
        <Route path="/food" element={<FoodMenuPage />} />
        <Route path="/gallary" element={<Gallary/>}/>
      </Routes>
      
      {}
    
      <Footer />
    </BrowserRouter>
  );
}

export default App;