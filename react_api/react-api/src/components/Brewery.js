import React from 'react';

const Brewery = (props) => {
    return (
        <section className="breweryList">
            <li>
                <h2>{props.name}</h2>
                <h2>{props.address_1}</h2>
                <h2>{props.city}</h2>
            </li>

        </section>
    );
};

export default Brewery;