import React from 'react';
import Brewery from './Brewery';


const BreweryList = (props) => {
    return (
        <ul>
            {props.breweries.map((brewery) => (
                <Brewery
                key={brewery.id}
                name={brewery.name}
                />
            ))}
        </ul>
    );
};

export default BreweryList;