/* eslint-disable prettier/prettier */
import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <div className="flex flex-col gap-8 py-16 px-6 sm:px-16 xl:px-72 bg-[#252324]">
      <div className="text-white flex gap-4 xl:gap-16 items-center justify-center">
        {/* left */}
        <div className="h-full">
          <Image
            width={1000}
            height={1000}
            src="/brew.jpg"
            alt="coffee brew image"
            className="h-full w-auto aspect-square object-cover rounded-md"
          />
        </div>
        {/*  right */}
        <div className="flex flex-col gap-2 xl:gap-8">
          <h1 className="text-md sm:text-3xl xl:text-5xl font-bold text-brezee_primary">
            ☕ Your Daily Calm, Brewed to Perfection
          </h1>
          <p className="text-xs sm:text-base xl:text-xl">
            Brezee Coffee bukan sekadar kopi—ini adalah momen ketenangan yang
            bisa kamu bawa ke mana saja. Dibuat dari biji pilihan dengan
            sentuhan rasa yang menenangkan, setiap tegukan menghadirkan rasa
            nyaman dan damai untuk mengawali harimu.
          </p>
        </div>
      </div>
      <hr />
      <div className="text-white flex gap-4 xl:gap-16 items-center justify-center">
        {/* left */}
        <div className="flex flex-col gap-2 xl:gap-8">
          <h1 className="text-md sm:text-3xl xl:text-5xl font-bold text-brezee_primary">
            🌿 Sustainably Sourced, Mindfully Roasted
          </h1>
          <p className="text-xs sm:text-base xl:text-xl">
            Kami percaya bahwa setiap cangkir kopi bisa membuat dunia lebih
            baik. Itulah kenapa Brezee Coffee bekerja sama langsung dengan
            petani lokal untuk menghasilkan kopi yang tidak hanya enak, tapi
            juga etis dan ramah lingkungan.
          </p>
        </div>

        {/*  right */}
        <div className="h-full">
          <Image
            width={1000}
            height={1000}
            src="/roasted.jpg"
            alt="roasted coffee image"
            className="h-full w-auto aspect-square object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
