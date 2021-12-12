import React from "react";
import PropTypes from "prop-types";

import CurrentDay from './CurrentDay';
// import CurrentDayDescription from './CurrentDayDescription';
// import UpcomingDaysForecast from './UpcomingDaysForecast';

const Forecast = ({ forecast }) => (
    <section className="WeatherHero">
        <CurrentDay {...forecast.currentDay} />
    </section>
);

Forecast.propTypes = {
    forecast: PropTypes.shape({
        currentDay: PropTypes.object,
        currentDayDetails: PropTypes.array,
        upcomingDays: PropTypes.array,
    }),
};

export default Forecast;