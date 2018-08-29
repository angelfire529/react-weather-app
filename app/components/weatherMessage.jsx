import React from 'react';

export const WeatherMessage = props => {
    const {temp, location} = props;
    return (
        <div>
            <h3>It's {temp} &#8457; in {location}</h3>
        </div>
    );
}




