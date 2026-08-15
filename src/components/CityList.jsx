import Spinner from './Spinner'
import styles from './CityList.module.css'
import CityItem from './CityItem'

function CityList({ citiesProp, isLoadingProp }) {

  if (isLoadingProp) return <Spinner />

  return (
    <ul className={styles.cityList}>
      {citiesProp.map((city) => (
        <CityItem cityProp={city} key={city.id} />
      ))}
    </ul>
  )
}

export default CityList;
