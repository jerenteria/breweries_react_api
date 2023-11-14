import './App.css';
import React, { useState, Fragment } from 'react';
import Header from './UI/Header';
import BreweryList from './components/BreweryList';
import Input from './components/Input';


function App(value) {
  const [breweries, setBreweries] = useState([]);

  // fetch(`https://api.openbrewerydb.org/v1/breweries?by_city=${user_input}&per_page=`)
  // .then(res => {
  //   const authHeaders = ['access-token', 'client', 'uid']
  //     .reduce((result, key) => {
  //       let val = res.headers.get(key);
  //       if (val) {
  //         result[key] = val;
  //       }
  //     }, {});
  //   return res;

  // })
  // .then(res => res.json())
  // .then(data => setBreweries(data))


  return (
    <Fragment>
      <Header />
      <Input />
      <BreweryList breweries={breweries} />
    </Fragment>

  );

}

export default App;
