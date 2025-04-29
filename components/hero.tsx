/* eslint-disable prettier/prettier */
import { Button } from '@heroui/button';
import React from 'react';

export default function Hero() {
  return (
    <div
      className="w-screen h-full bg-cover bg-center relative sm:px-64"
      style={{
        backgroundImage: "url('/hero_image.jpg')",
        backgroundBlendMode: 'darken',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <div className="absolute top-1/3 text-white">
        <div className="flex flex-col gap-4 w-3/4">
          <h1 className="font-bold text-6xl">
            Brewed with Passion, Served with Love
          </h1>
          <h2 className="text-lg text-white/70">
            Nikmati kopi spesial dengan cita rasa yang hangat dan memikat,
            langsung dari tangan para barista terbaik kami.
          </h2>
          <div>
            <Button className="bg-brezee_primary text-white" size='lg'>
              Kunjungi Kami
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
