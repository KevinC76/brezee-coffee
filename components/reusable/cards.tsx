/* eslint-disable prettier/prettier */
'use client';

import Image from 'next/image';
import React, { useState } from 'react';

type CardProps = {
  image_path: string;
  name: string;
};

export default function Cards({ image_path, name }: CardProps) {
  const [overlay, setOverlay] = useState(false);

  return (
    <div
      className="relative w-[250px] h-[250px]"
      onMouseMove={() => setOverlay(true)}
      onMouseLeave={() => setOverlay(false)}
    >
      {overlay && (
        <div className="absolute inset-0 z-10 flex  items-center justify-center transition delay-150 duration-300 ease-in-out">
          <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full flex items-center justify-center rounded-md"></div>
          <h1 className="z-10 px-3 py-1 text-white opacity-100 bg-brezee_primary rounded-full">
            <span>{name}</span>
          </h1>
        </div>
      )}

      <Image
        src={image_path}
        alt="menu image"
        fill
        style={{ objectFit: 'cover', borderRadius: '4px' }}
      />
    </div>
  );
}
