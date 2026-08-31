import ReactCountryFlag from "react-country-flag";
import styles from './CityItem.module.css'
import { Link } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ cityProp }) {
  const { cityName, emoji, date, id, position } = cityProp;

  return (
    <li>
      <Link className={styles.cityItem} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
      <span className={styles.emoji}>
        <ReactCountryFlag
          countryCode={emoji}
          svg
          style={{
            fontSize: "1.6em",
            lineHeight: "1.6em",
          }}
          aria-label={cityName}
        />
      </span>

      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>({formatDate(date)})</time>
      <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;