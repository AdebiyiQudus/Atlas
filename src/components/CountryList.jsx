import Spinner from './Spinner'
import styles from './CountryList.module.css'
import CityItem from './CityItem'
import CountryItem from './CountryItem'
import Message from './Message'

function CountryList({ citiesProp, isLoadingProp }) {

  if (isLoadingProp) return <Spinner />

  if (!citiesProp.length)
    return (
     <Message message="Add your first city by clicking a
      city on the map" />
    );

  const countries = citiesProp.reduce((accArr, curCity) => { 
    if (!accArr.map((countryObj) => countryObj.name).includes(curCity.country)) 
      return [...accArr, { name: curCity.country, emoji: 
    curCity.emoji, id: curCity.id }];
    else return accArr;
  }, []);


  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem countryProp={country} key={country.id} />
      ))}
    </ul>
  )
}

export default CountryList;
