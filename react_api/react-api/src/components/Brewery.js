import React from 'react';
import './Brewery.css';
import Card from './Card';

const Brewery = (props) => {
    return (
        <Card>
        <div className="breweryList">
                <h2>{props.name}</h2>
                <h2>{props.address_1}</h2>
                <h2>{props.city}</h2>
        </div>
        </Card>
    );
};

export default Brewery;