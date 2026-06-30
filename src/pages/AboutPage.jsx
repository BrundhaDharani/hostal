import Breadcrumb from "../Common/Breadcrumb";
import CommonHeader from "../Common/Header";

const AboutPage = () => {

  const slugs = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" }
  ];

  return (
    <div className="min-h-screen bg-white">
      
    
      <CommonHeader 
        title="ABOUT US" 
        subtitle="Sagayamadha Ladies Hostel" 
        slugs={slugs} 
      />
      
      {/* <div className="max-w-7xl mx-auto px-4 mt-4">
        <Breadcrumb slugs={slugs} />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-12">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
              SAGAYAMADHA LADIES HOSTEL
            </h1>
            
            <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed text-justify space-y-6">
              <p>
                Sagayamadha Ladies Hostel is the pioneer in providing accommodation for working 
                women and students in prime locations of Trichy for the past 5 years. Our Ladies 
                Hostel is noted as one of the highly well reputed Ladies Hostel offering various 
                kinds of hostel accommodation facilities on daily and monthly basis with 
                affordable charges. The Hostel is being run by the Chairperson <b>Mrs. Mariya Gracy,</b> 
                under the guidance of <b>Mr. Charles.</b> The Sagayamadha hostel for working women, 
                takes utmost care of the safety and security of working / studying girl inmates.
              </p>
              
              <p>
                We assure cleanliness and take special care in the preparation of food and served 
                neatly to the inmates and provide safe and secure place to live away from home in 
                our ladies hostel. A full time female warden will reside in our Ladies Hostel to 
                take care of the inmates and a security personnel will also be in our Ladies 
                Hostel throughout the day. Our aim is to serve women with best of our ability in 
                quality and facilities for their peaceful and comfortable stay in our Ladies Hostel.
              </p>
              
              <p>
                We provide safe and secure place at very lowest rentals suitable for students and 
                women who are in search of employment from various places with unbelievable facilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;