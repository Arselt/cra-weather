import React from 'react';
import PropTypes from 'prop-types';

import 'weather-icons/css/weather-icons.css'

const CurrentDay = ({ 
    weekday,
    date,
    location,
    time,
    temperature,
    weatherIcon,
    weatherDescription 
}) => (
    <section className="WeatherInfo">
        <section className="WeatherInfo__Calendar">
            <p>
                {/* date: month and day */}
                {weekday}, {date}
            </p>
        </section>
            <h2 className='WeatherInfo__Hour'>
                {time}
            </h2>
        <section className="WeatherInfo__Weather">
            <h3 className="Weather__location">
                {location}
            </h3>
            <img src={weatherIcon} alt={weatherDescription} />
            <h1 className="Weather__forecast">
                {/* weather and temp */}
                {temperature}°C
            </h1>
            <h3>
                {weatherDescription}
            </h3>
        </section>
    </section>
);

CurrentDay.propTypes = {
    weekday: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    weatherIcon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    weatherDescription: PropTypes.string.isRequired,
};

export default CurrentDay;