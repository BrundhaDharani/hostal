import React from 'react';

import CommonHeader from '../componets/common/Header'; 
// import CommonGrid from '../Common/Grid';


function ContactPage() {
  const slugs = [{ label: "Home", path: "/" }, 
    { label: "Contact Us", path: "/contact-us" }
];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <CommonHeader title="CONTACT US" subtitle="Sagayamadha Ladies Hostel" 
      slugs={slugs} />
      
      <main className="py-12">
    

          <div className="col-span-1 md:col-span-2 bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-6">Send us an Email</h2>
            <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" placeholder="NAME *" className="border p-2 rounded" />
              <input type="email" placeholder="EMAIL *" className="border p-2 rounded" />
              <input type="tel" placeholder="PHONE *" className="border p-2 rounded" />
              <textarea placeholder="MESSAGE *" className="border p-2 rounded col-span-1 md:col-span-3 h-32"></textarea>
              <button className="bg-pink-600 text-white py-2 px-6 rounded w-max">SUBMIT</button>
            </form>
          </div>
          
    
          <div className="bg-white p-8 rounded-xl shadow-md">
             <h3 className="font-bold mb-2">Address</h3>
             <p className="text-sm text-gray-600 mb-4">No. 12, Sangili Konar Street, Andar St, Trichy - 620002</p>
             <p className="text-sm">Phone: +91 94892 22916</p>
             <p className="text-sm">Email: info@sagayamadhaladieshostel.com</p>
          </div>
    
      </main>
    </div>
  );
}

export default ContactPage;