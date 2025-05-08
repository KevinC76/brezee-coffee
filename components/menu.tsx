/* eslint-disable prettier/prettier */
'use client';

import React, { useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';
import {
  motion,
  animate,
  useMotionValue,
  AnimationPlaybackControls,
} from 'framer-motion';

import Cards from './reusable/cards'; // Pastikan path ini benar

export default function Menu() {
  const images_data = [
    { path: '/coffee/coffee1.jpg', nama: 'Kopi Hitam Filter' },
    { path: '/coffee/coffee2.jpg', nama: 'Espresso Shot' },
    { path: '/coffee/coffee3.jpg', nama: 'Es Kopi Hitam' },
    { path: '/coffee/coffee4.jpg', nama: 'Kopi Susu Klasik' },
    { path: '/coffee/coffee5.jpg', nama: 'Es Kopi Susu' },
    { path: '/coffee/coffee6.jpg', nama: 'Manual Brew Spesial' },
  ];

  const [ref, { width }] = useMeasure();

  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [renderer, setRenderer] = useState(false);
  const xTranslation = useMotionValue(0);

  const [durationReverse, setDurationReverse] = useState(FAST_DURATION);
  const [mustFinishReverse, setMustFinishReverse] = useState(false);
  const [rendererReverse, setRendererReverse] = useState(false);
  const xTranslationReverse = useMotionValue(0);

  useEffect(() => {
    let controls: AnimationPlaybackControls;

    // useEffect untuk marquee pertama (bergerak ke kiri)
    if (width > 0) {
      const finalPosition = -width / 2 - 8;

      if (mustFinish) {
        controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
          ease: 'linear',
          duration: duration * (1 - xTranslation.get() / finalPosition),
          onComplete: () => {
            setMustFinish(false);
            setRenderer(!renderer);
          },
        });
      } else {
        xTranslation.set(0);
        controls = animate(xTranslation, [0, finalPosition], {
          ease: 'linear',
          duration: duration,
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 0,
        });
      }

      return () => controls?.stop();
    }
  }, [xTranslation, width, duration, mustFinish, renderer]);

  // useEffect untuk marquee kedua (bergerak ke kanan)
  useEffect(() => {
    let controlsReverse: AnimationPlaybackControls;

    if (width > 0) {
      const finalPosition = -width / 2 - 8;

      if (mustFinishReverse) {
        controlsReverse = animate(
          xTranslationReverse,
          [xTranslationReverse.get(), 0],
          {
            ease: 'linear',
            duration:
              durationReverse * (xTranslationReverse.get() / finalPosition),
            onComplete: () => {
              setMustFinishReverse(false);
              setRendererReverse(!rendererReverse);
            },
          }
        );
      } else {
        xTranslationReverse.set(finalPosition);
        controlsReverse = animate(xTranslationReverse, [finalPosition, 0], {
          ease: 'linear',
          duration: durationReverse,
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 0,
        });
      }

      return () => controlsReverse?.stop();
    }
  }, [
    xTranslationReverse,
    width,
    durationReverse,
    mustFinishReverse,
    rendererReverse,
  ]);

  const duplicatedImages = [...images_data, ...images_data];

  return (
    <div className="flex flex-col gap-8 py-16 w-full overflow-hidden bg-dark_background_color" id='menu'>
      <div className="relative flex flex-col gap-8">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Menu ☕</h1>
        </div>

        <motion.div
          ref={ref}
          className="flex gap-4"
          style={{ x: xTranslation }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
        >
          {duplicatedImages.map((image, index) => (
            <Cards
              image_path={image.path}
              name={`${image.nama}`}
              key={`forward-${image.nama}-${index}`}
            />
          ))}
        </motion.div>

        {/* Marquee Kedua (bergerak ke kanan) */}
        <motion.div
          ref={ref}
          className="flex gap-4"
          style={{ x: xTranslationReverse }}
          onHoverEnd={() => {
            setMustFinishReverse(true);
            setDurationReverse(FAST_DURATION);
          }}
          onHoverStart={() => {
            setMustFinishReverse(true);
            setDurationReverse(SLOW_DURATION);
          }}
        >
          {duplicatedImages.map((image, index) => (
            <Cards
              key={`reverse-${image.nama}-${index}`}
              image_path={image.path}
              name={`${image.nama}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
