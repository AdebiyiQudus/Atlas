import Spinner from './Spinner';
import styles from './CountryList.module.css';
import CountryItem from './CountryItem';
import Message from './Message';
import { useCities } from '../contexts/CitiesContext';

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  // Safety check prevents reading length if cities is undefined
  if (!cities || !cities.length)
    return (
      <Message message="Add your first city by clicking a city on the map" />
    );

  const countries = cities.reduce((accArr, curCity) => { 
    if (!accArr.map((countryObj) => 
      countryObj.name).includes(curCity.country)) 
    
      return [...accArr, { name: curCity.country, 
      emoji: curCity.emoji, id: curCity.id }];
    else return accArr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem countryProp={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;