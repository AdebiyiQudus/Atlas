// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

// Geocoding is the process of converting a physical address or place name into geographical coordinates — usually latitude and longitude — that can be used to identify its exact location on a map
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import Button from "./Button";
import BackButton from "./BackButton";
import { useUrlPosition } from "../hooks/useUrlPosition";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
 const navigate = useNavigate();
 const [lat, lng] = useUrlPosition();
 

  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");

  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  useEffect(function () {
   async function fetchCityData() {
     try {
      setIsLoadingGeocoding(true);
      const res = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
      );
      const data = await res.json();
      setCityName(data.city || data.locality || "");
      setCountry(data.countryCode || "");
     } catch (err) {
      console.error("Error fetching city data:", err);
     } finally {
      setIsLoadingGeocoding(false);
     }
   }

   if (lat && lng) {
     fetchCityData();
   }
 }, [lat, lng]);

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
         <BackButton />
      </div>
    </form>
  );
}

export default Form;
