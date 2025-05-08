/* eslint-disable prettier/prettier */
import React from 'react';
import GoogleMaps from './reusable/google-maps';

export default function Location() {
  return (
    <div
      className="flex flex-col py-16 px-6 sm:px-16 xl:px-72 bg-background_color"
      id="location"
    >
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className=" font-bold text-brezee_primary text-4xl sm:text-5xl">Location</h1>
          <p className='text-md sm:text-lg text-dark_background_color '>Kunjungi Kami</p>
        </div>
        <GoogleMaps />
      </div>
    </div>
  );
}
