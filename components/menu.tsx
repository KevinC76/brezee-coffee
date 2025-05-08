import React from 'react';
import Cards from './reusable/cards';

export default function Menu() {
  return (
    <div className="flex flex-col gap-8 py-16 px-6 sm:px-16 xl:px-72 ">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold text-brezee_primary">Menu</h1>
        </div>
        <div>
          <Cards image_path="/coffee/coffee1.jpg" name="manual brew" />
        </div>
      </div>
    </div>
  );
}
