// Navlink is a component that allows us to create links to different routes in our application => Navigates UI elements (header navbars, sidebars, active tabs).
// <Link> => General page navigation (in-text links, buttons, cards).This component allows users to navigate between different pages or views without triggering a full page reload.

import { NavLink } from "react-router-dom"
import styles from "./AppNav.module.css"
// import {nav} from "./AppNav.module.css"

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
      </nav>

    // <nav className={nav}>App Navigation</nav>
  )
}

export default AppNav
