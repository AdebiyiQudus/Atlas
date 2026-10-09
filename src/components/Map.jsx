// useSearchParams () - It is used to read and change query parameters in the URL.
// searchParams.get() - It is used to get the value of a specific query parameter from the URL.
// useNavigate() hook allows you to navigate from one page/route to another using JavaScript, instead of clicking a <Link>.
// useMap() hook allows React components to gain direct access to the Leaflet map instance and handle things like zooming, panning, and markers.
// useMapEvents () to define properties for different types of event

import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import styles from "./Map.module.css";
import ReactCountryFlag from "react-country-flag";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";

function Map() {
  const { cities } = useCities();

  const [mapPosition, setMapPosition] = useState([40, 0]); // Default position (latitude, longitude)
  const [searchParams] = useSearchParams();

  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng],
  );
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>
                <ReactCountryFlag
                  countryCode={city.emoji}
                  svg
                  style={{
                    fontSize: "1.6em",
                    lineHeight: "1.6em",
                    marginRight: "8px",
                  }}
                  aria-label={city.cityName}
                />{" "}
                {city.cityName}
              </span>
            </Popup>
          </Marker>
        ))}

        <ChangePosition position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function  ChangePosition({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvent({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

export default Map;
