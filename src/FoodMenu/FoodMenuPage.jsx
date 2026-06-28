
import React from 'react';
import FoodMenuHeader from './FoodMenuHeader';
import FoodMenuTable from './FoodMenuTable';

function FoodMenuPage() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-50">
      <FoodMenuHeader />
      <FoodMenuTable />

    </div>
  );
}

export default FoodMenuPage;