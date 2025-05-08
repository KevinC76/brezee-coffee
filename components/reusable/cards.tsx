/* eslint-disable prettier/prettier */
'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

type CardProps = {
  image_path: string;
  name: string;
};

export default function Cards({ image_path, name }: CardProps) {
  const [overlay, setOverlay] = useState(false);

  return (
    <motion.div
      className="relative w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] flex-shrink-0"
      onHoverStart={() => {
        setOverlay(true);
      }}
      onHoverEnd={() => {
        setOverlay(false);
      }}
    >
      <AnimatePresence>
        {overlay && (
          <motion.div
            className="absolute inset-0 z-10 flex  items-center justify-center transition delay-150 duration-300 ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={name}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full flex items-center justify-center rounded-md"></div>
            <motion.h1
              className="z-10 px-3 py-1 text-white opacity-100 bg-brezee_primary rounded-full"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
              key={name}
            >
              <span>{name}</span>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <Image
        src={image_path}
        alt="menu image"
        fill
        style={{ objectFit: 'cover', borderRadius: '4px' }}
      />
    </motion.div>
  );
}
