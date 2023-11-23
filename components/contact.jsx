"use client";

import { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { playfair } from "./fonts";

const center = {
  lat: 48.35650634765625,
  lng: 5.692397117614746,
};

export default function Contact() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    // @ts-ignore
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback((map) => {
    const bounds = new google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return (
    <section
      className="bg-primary bg-contact bg-cover text-center"
      id="contact"
    >
      <div className="p-8">
        <h1 className={`${playfair.className} title-white`}>Contact / 接触</h1>
        <h2 className="text-lg text-white my-8">
          03 29 06 22 35 <br />
          8 rue de France, 88300 Neufchâteau <br />
          11h-14h et 18h-22h, fermé lundi et mardi !
        </h2>
      </div>

      {isLoaded && (
        <GoogleMap
          mapContainerClassName="map"
          center={center}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <Marker position={center} />
        </GoogleMap>
      )}
    </section>
  );
}
