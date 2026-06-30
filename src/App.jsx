import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Breadcrumb from './Common/Breadcrumb';
import HostelNavbar from './Common/Navbar';
import Footer from './common/Footer'; 
import Location from "./Common/Location"; 

import Hero from "./home/Hero";
import ContactBanner from "./home/ContactBanner";
import RichFeatures from "./home/RichFeatures";
import AboutUs from "./home/AboutUs";
import Amenities from "./home/Amenitiees"; 

import AboutPage from "./pages/AboutPage";
import FeaturesPage from "./pages/FeaturesPage";
import AmenitiesPage from "./pages/AmenitiesPage";
import FoodMenuPage from "./pages/FoodMenuPage";
import ContactPage from './pages/ContactPage';
import Gallary from './pages/GalleryPage';

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
             <Location/>
          </>
        } />
        
        {}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/amenities" element={<AmenitiesPage />} />
        <Route path="/food" element={<FoodMenuPage />} />
        <Route path="/gallary" element={<Gallary/>}/>
        <Route path="/contact" element={<ContactPage />}/>

      </Routes>
      
      {}
    
      <Footer />
    </BrowserRouter>
  );
}

export default App;