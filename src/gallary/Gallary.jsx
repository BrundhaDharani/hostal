import React from 'react'
import CommonHeader from '../Components/CommonHeader'; 

const Gallary = () => {

    const slugs=[
         { label: "Home", path: "/" },
         {label:"gallary",path:"/gallary"}
    ]
  return (
    <div className="min-h-screen bg-white">
      <CommonHeader 
        title="Gallery" 
        subtitle="Sagayamadha Ladies Hostel Facilities"
        slugs={slugs}

        
      />
      
    
     

    </div>
  )
}

export default Gallary
