// useSearchParams () - It is used to read and change query parameters in the URL.
// searchParams.get() - It is used to get the value of a specific query parameter from the URL.
// useNavigate() hook allows you to navigate from one page/route to another using JavaScript, instead of clicking a <Link>.

import { useNavigate, useSearchParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from './Map.module.css'
import ReactCountryFlag from "react-country-flag";
import { useState } from 'react';
import { useCities } from '../contexts/CitiesContext';

function Map() {
  const navigate = useNavigate();
  const {cities} = useCities();

  const [mapPosition, setMapPosition] = useState([40, 0]); // Default position (latitude, longitude)
  const [searchParams, setSearchParams] = useSearchParams();
  
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (  
    <div className={styles.mapContainer}>
     <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={true}
     className={styles.map}
     >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
    />
    {cities.map((city) => (
      <Marker position={[city.position.lat,city.position.lng]} 
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
                /> {city.cityName}
              </span> 
        </Popup>
      </Marker>
    ))}
  </MapContainer>
    </div>
  )
}


export default Map

