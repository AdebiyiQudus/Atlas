import ReactCountryFlag from "react-country-flag";
import styles from "./CountryItem.module.css";

function CountryItem({ countryProp }) {
  return (
    <li className={styles.countryItem}>
      <span>
        <ReactCountryFlag
          countryCode={countryProp.emoji}
          svg
          style={{
            fontSize: "2em",
            lineHeight: "2em",
          }}
          aria-label={countryProp.name}
        />
    </span>
      <span>
        {countryProp.name}</span>
    </li>
  );
}

export default CountryItem;
