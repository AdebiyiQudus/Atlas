import ReactCountryFlag from "react-country-flag";
import styles from './CityItem.module.css'


const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ cityProp }) {
  const { cityName, emoji, date } = cityProp;

  return (
    <li className={styles.cityItem}>
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
    </li>
  );
}

export default CityItem;