import './App.css';
import React, { useState } from 'react';


function App() {
  // const [breweries, setBreweries] = useState([]);
  // function fetchBoozeHandler() {
  //   fetch('https://api.openbrewerydb.org/v1/breweries?by_city=san_jose&per_page=')
  //     .then((response) => {
  //       response.json()
  //       console.log(response);


  //     })
  //     .then((data) => {
  //     const transformedBooze = data.response.map(brewData => {
  //       return {
  //         name: brewData.name
  //       };
  //     });
  //     setBreweries(transformedBooze);
  //     });
  //   }
  // return (
  //   <React.Fragment>
  //     <section>
  //       <button onClick={fetchBoozeHandler}>Fetch Booze</button>
  //     </section>
  //     <section>
  //       something
  //     </section>
  //   </React.Fragment>
  // );

  // 'https://api.openbrewerydb.org/v1/breweries?by_city=san_jose&per_page='

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
  .then(jsonResponse => console.log(jsonResponse))

  return(
    <section>
      
    </section>
  );

}

export default App;
