// Altanative to styling with CSS: UI libraries like Tailwind CSS, Material UI, Mantine, Chakra UI, Bootstrap
// <Outlet/> component acts as a placeholder or slot within a parent route's layout. It dictates where nested child route components should be rendered based on the current URL path.
// <Route index /> is for defining the default child route of a parent route. It specifies which component should be rendered when the parent route is accessed without any additional path segments.
// el.country => serves as each of the country name object

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";

const BASE_URL = "http://localhost:9000";

function App() {
  const [cities, setCities] = useState([]);
  const  [isLoading, setIsLoading] = useState(false);

  useEffect (function() {
    async function fetchCities() {
      try {
      setIsLoading(true);

      const res = await fetch(`${BASE_URL}/cities`)
      const data = await res.json();

      setCities(data);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
      // Default route for the "app" whenever the app page is rendered or when no specific child route is provided
          <Route index element={<CityList  citiesProp={cities}
           isLoadingProp={isLoading} />} />

      // Nested routes for the "app" path
          <Route path="cities" element={<CityList citiesProp={cities}
           isLoadingProp={isLoading}/>} />
          <Route path="countries" element={<CountryList citiesProp={cities}
           isLoadingProp={isLoading}/>} />
          <Route path="form" element={<p>Form</p>} />

        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;