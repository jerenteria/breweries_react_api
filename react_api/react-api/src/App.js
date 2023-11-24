import './App.css';
import React, { useState, Fragment } from 'react';
import Header from './UI/Header';
import BreweryList from './components/BreweryList';


function App(value) {
  const [breweries, setBreweries] = useState([]);
  const [cityQuery, setCityQuery] = useState('');

  const handleInputChange = (event) => {
    setCityQuery(event.target.value);
  }

  const sanitizeCityName = (city) => {
    return city.replace(/\s+/g, '_');
  };

  const handleSearch = () => {
    const sanitizedCity = sanitizeCityName(cityQuery);

    fetch(`https://api.openbrewerydb.org/v1/breweries?by_city=${sanitizedCity}&per_page=3`)
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

  };



  return (
    <Fragment>
      <Header />
      <div className="input-box">
        <input
          value={cityQuery}
          onChange={handleInputChange}
        />
      </div>
      <div className="button">
        <button onClick={handleSearch}>Search</button>
      </div>
      <BreweryList breweries={breweries} />
    </Fragment>

  );

}

export default App;
