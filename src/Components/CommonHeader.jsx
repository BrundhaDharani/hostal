import React from 'react';
import Breadcrumb from './Breadcrumb'; 

function CommonHeader({ title, subtitle, slugs }) {
  return (
    <div className="bg-gray-100 py-10 px-8 border-b border-gray-200">

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 uppercase">{title}</h1>
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        </div>
      </div>
      <div className="mt-6">
        <Breadcrumb slugs={slugs} />
      </div>
    </div>
  );
}

export default CommonHeader;