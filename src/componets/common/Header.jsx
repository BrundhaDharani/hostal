import React from 'react';
import Breadcrumb from './Breadcrumb';

function CommonHeader({ title, subtitle, slugs }) {
  return (
    <div className="bg-gray-100 py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 border-b border-gray-200">

      <div className="flex justify-between items-center flex-wrap gap-2">
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 uppercase break-words">
            {title}
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">{subtitle}</p>
        </div>
      </div>
      <div className="mt-4 sm:mt-6 overflow-x-auto">
        <Breadcrumb slugs={slugs} />
      </div>
    </div>
  );
}

export default CommonHeader;