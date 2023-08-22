import React from 'react';

const Brewery = (props) => {
    return (
        <section>
            <h2>{props.id}</h2>
            <h2>{props.name}</h2>
            <h2>{props.address_1}</h2>
        </section>
    );
};

export default Brewery;