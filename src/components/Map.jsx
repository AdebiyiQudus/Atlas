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
     
    </div>
  )
}


export default Map

