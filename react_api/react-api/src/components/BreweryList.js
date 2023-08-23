import React from 'react';
import Brewery from './Brewery';


const BreweryList = (props) => {
    return (
        <ul>
            {props.breweries.map((brewery) => (
                <Brewery
                id={brewery.id}
                name={brewery.name}
                address_1={brewery.address_1}
                city={brewery.city}
                />
            ))}
        </ul>
    );
};

export default BreweryList;