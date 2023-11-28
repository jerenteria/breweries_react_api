import './App.css';
import React, { useState, Fragment } from 'react';
import Header from './UI/Header';
import BreweryList from './components/BreweryList';


function App(value) {
  const [breweries, setBreweries] = useState([]);
  const [cityQuery, setCityQuery] = useState('');
  const [searched, setSearched] = useState(false);

  // get the value of what the user is inputting
  const handleInputChange = (event) => {
    setCityQuery(event.target.value);
  }

  // replace all white space with underscores inputted by user
  const sanitizeCityName = (city) => {
    return city.replace(/\s+/g, '_');
  };

  const handleSearch = () => {
    // set sanitizedCity = (city name with whitespaces replaced with underscored) using const sanitizeCityName by taking in 
    // cityQuery which is the city taken from user input form
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
      .then(data => setBreweries(data));
      setSearched(true);

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
      {searched && <p className="top-results-paragraph">Here are the top results in {cityQuery}!</p>
      }
      <BreweryList breweries={breweries} />
    </Fragment>

  );

}

export default App;
