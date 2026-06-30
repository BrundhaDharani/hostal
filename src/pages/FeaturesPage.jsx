import React from 'react';
import { FaGraduationCap, FaBuilding, FaShieldAlt, FaBus, FaHospital, FaCheckCircle } from 'react-icons/fa';

import CommonHeader from '../Common/Header'; 
import CommonGrid from '../Common/Grid';

function FeaturesPage() {

  const slugs = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Features", path: "/features" }
  ];


  const featuresData = [
    { icon: <FaGraduationCap />, title: "COLLEGE & SCHOOLS", description: "Within one kilometer surrounding, you can find all popular colleges and schools." },
    { icon: <FaBuilding />, title: "BUSINESS CENTER", description: "Proximity to business centres like Chatram Bus Stand, N.S.B Road, Chinthamani Bazaar, FSM Mall, Sarathas, Pothis, Chennai Silks, etc." },
    { icon: <FaShieldAlt />, title: "SECURITY", description: "We provide high secure place for womens. Safe and secure neighbourhood. A warden will be available with the students for 24 hours." },
    { icon: <FaBus />, title: "NEARER TO CHATRAM BUS STAND", description: "We were located nearer to Chatram Bus Stand, Trichy. 24 x 7 Bus Service will be available from here." },
    { icon: <FaHospital />, title: "HOSPITALS & CLINICS", description: "Hospitals & Clinics were available in walkable distance. High equipped hospitals, Front Line, GVN, MS Hospitals were available nearer to us." },
    { icon: <FaCheckCircle />, title: "CORRECT CHOICE", description: "Suitable for Working Women, Girl Students, Wedding Guests, Leisure Tourists, Temporary Staffs, other short stay purpose for ladies." }
  ];

  return (
    
      
      <div className="min-h-screen bg-white">
      <CommonHeader 
        title="OUR FEATURES" 
        subtitle="Sagayamadha Ladies Hostel Specialties" 
        slugs={slugs} 
      />

      <CommonGrid 
        sectionTitle="Our Features"
        sectionDesc="The hostel is located in center of Trichy city, where it connects all the major colleges, schools and business centers."
        items={featuresData}
      />


    </div>
  );
}

export default FeaturesPage;
