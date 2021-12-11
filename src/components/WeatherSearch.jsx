import React, { useState } from "react";
import PropTypes from 'prop-types';

const WeatherSearch = ({ submitSearch }) => {
    const [location, setLocation] = useState('')
    
    const onSubmit = event => {
        event.preventDefault();     //PREVENT RELOAD
        if (!location || location === '') return;
        submitSearch(location)
    }
    
    return (
        <form 
            className="WeatherHeader__Search"
            onSubmit={onSubmit}
        >
            <input 
                type="text"
                aria-label="location"
                placeholder="Search your location"
                required
                value={location}
                onChange={event => setLocation(event.target.value)} //listen to changes on the input
            />
            <button
                type="submit"
                className="WeatherHeader__SearchButton wi wi-direction-right"
                onClick={onSubmit}
            />
        </form>
    );
};

WeatherSearch.propTypes = {
    submitSearch: PropTypes.func.isRequired,
}

export default WeatherSearch