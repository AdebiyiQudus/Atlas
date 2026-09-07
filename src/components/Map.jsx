// useSearchParams () - It is used to read and change query parameters in the URL.
// searchParams.get() - It is used to get the value of a specific query parameter from the URL.

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
      <h1>Map</h1>
      <h1> 
        Position: {lat}, {lng}
      </h1>

      <button onClick={() => {
        setSearchParams({ lat: 51.505, lng: -0.09 })
      }}>
        Change Position
      </button>
    </div>
  )
}


export default Map

