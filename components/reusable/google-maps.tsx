/* eslint-disable prettier/prettier */
'use client';
import { Loader } from '@googlemaps/js-api-loader';

import React, { useEffect, useRef } from 'react';

export default function GoogleMaps() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
        version: 'weekly',
      });

      const { Map } = await loader.importLibrary('maps');

      //init marker
      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        'marker'
      )) as google.maps.MarkerLibrary;

      const position = {
        lat: -6.20177, // Latitude of the location
        lng: 106.782259, // Longitude of the location
      };

      // map options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 19,
        mapId: 'Cafe Location',
        disableDefaultUI: true,
      };

      // setup the map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      //put the marker
      const marker = new AdvancedMarkerElement({
        map,
        position: position,
      });
    };

    initMap();
  }, []);

  return (
    <div
      className="h-[250px] w-[300px] sm:h-[500px] sm:w-[1000px]"
      ref={mapRef}
      style={{ borderRadius: 4 }}
    />
  );
}
