// useSearchParams () - It is used to read and change query parameters in the URL.
// searchParams.get() - It is used to get the value of a specific query parameter from the URL.
// useNavigate() hook allows you to navigate from one page/route to another using JavaScript, instead of clicking a <Link>.

import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css'

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (  
    <div className={styles.mapContainer}
     onClick={() => navigate("form")}>
     <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    </div>
  )
}


export default Map

