import { Link } from "react-router-dom";
import PageNav from "../components/PageNav"
import AppNav from "../components/AppNav"
function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />

      <h1>WorldWise</h1>
      <p className="test">Global Styling</p>

      <Link to="/app">Go to App</Link>
    </div>
  )
}

export default Homepage;
