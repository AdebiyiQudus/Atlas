// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

// Geocoding is the process of converting a physical address or place name into geographical coordinates — usually latitude and longitude — that can be used to identify its exact location on a map
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUrlPosition } from "../hooks/useUrlPosition";
import ReactCountryFlag from "react-country-flag";
import styles from "./Form.module.css";
import Button from "./Button";
import BackButton from "./BackButton";
import Spinner from "./Spinner";
import Message from "./Message";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
 const navigate = useNavigate();
 const [lat, lng] = useUrlPosition();
 

 const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [geocodingError, setGeocodingError] = useState("");

  useEffect(function () {
   async function fetchCityData() {
    try {
      setIsLoadingGeocoding(true);
      setGeocodingError("");
      const res = await fetch(
        `${BASE_URL}?latitude=${lat}&longitude=${lng}`);
      const data = await res.json();
      console.log(data)

      if (!data.countryCode) 
        throw new Error("That doesn't seem to be a city. Click somewhere else on the map.");

      setCityName(data.city || data.locality || "");
      setCountry(data.countryName);
      setCountryCode(data.countryCode);
    } catch (err) {
      setGeocodingError(err.message);
    } finally {
      setIsLoadingGeocoding(false);
    }
   }
   fetchCityData();
 }, [lat, lng]);

  if (isLoadingGeocoding) return <Spinner />;
  if (geocodingError) 
    return <Message message={geocodingError} />;

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>
          <ReactCountryFlag countryCode={countryCode} svg/>
        </span>
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
