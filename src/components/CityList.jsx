import Spinner from './Spinner'
import styles from './CityList.module.css'
import CityItem from './CityItem'
import Message from './Message'

function CityList({ citiesProp, isLoadingProp }) {

  if (isLoadingProp) return <Spinner />

  if (!citiesProp.length)
    return (
     <Message message="Add your first city by clicking a
      city on the map" />
    )

  return (
    <ul className={styles.cityList}>
      {citiesProp.map((city) => (
        <CityItem cityProp={city} key={city.id} />
      ))}
    </ul>
  )
}

export default CityList;
