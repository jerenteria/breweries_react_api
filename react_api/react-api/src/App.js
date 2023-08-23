import './App.css';
import React, { useState } from 'react';
import Brewery from './components/Brewery';
import BreweryList from './components/BreweryList';


function App() {
  const [breweries, setBreweries] = useState([]);

  fetch('https://api.openbrewerydb.org/v1/breweries?by_city=san_jose&per_page=')
  .then(res => {
    const authHeaders = ['access-token', 'client', 'uid']
      .reduce((result, key) => {
        let val = res.headers.get(key);
        if (val) {
          result[key] = val;
        }
      }, {});
    return res;
  })
  .then(res => res.json())
  .then(data => setBreweries(data))



  return(
    <section>
      <h1>Welcome To The Fastest Way To Find Your Nearest Brewery!</h1>
      <BreweryList breweries={breweries} />
    </section>
  );

}

export default App;
