/* eslint-disable prettier/prettier */
import { Button } from '@heroui/button';
import React from 'react';

export default function Hero() {
  return (
    <>
      <div
        className="flex items-center justify-center xl:block w-full min-h-screen bg-cover bg-center relative px-6 sm:px-16 xl:px-64"
        style={{
          backgroundImage: "url('/hero_image.jpg')",
          backgroundBlendMode: 'darken',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <div className="flex items-center justify-center min-h-screen text-white">
          <div className="flex flex-col gap-4 xl:w-3/4">
            <h1 className="font-bold text-3xl sm:text-6xl text-center xl:text-left">
              Brewed with Passion, Served with Love
            </h1>
            <h2 className="text-md sm:text-lg text-white/70 text-center xl:text-left">
              Nikmati kopi spesial dengan cita rasa yang hangat dan memikat,
              langsung dari tangan para barista terbaik kami.
            </h2>
            <div className="flex justify-center xl:justify-start">
              <Button className="bg-brezee_primary text-white p-4 sm:p-6">
                Kunjungi Kami
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
