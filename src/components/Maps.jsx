

import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useState } from "react";

const MapContainer = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyDvRPdW_4tfOa3B2orQ26ruxpNk1-Q_gsw",
      version: "weekly",
    });

    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById("map"), {
                center: { lat:  29.4295, lng: -98.66359 },
               
        zoom: 18,
      });
      setMap(map);
    });
  }, []);

  return (
    <div id="map" style={{ height: "400px" }}>
      {map && <div>Map is ready!</div>}
    </div>
  );
};

export default MapContainer;

