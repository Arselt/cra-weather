import { useState } from "react";
import axios from "axios";
import latinize from "latinize";

// Helpers
import getCurrentDayForecast from '../helpers/getCurrentDayForecast.js';
import getCurrentDayDetailedForecast from '../helpers/getCurrentDayDetailedForecast.js';
import getUpcomingDaysForecast from '../helpers/getUpcomingDaysForecast';

const BASE_URL = "https://www.metaweather.com/api/location";
const CORS_FIX = "https://cors-arselt.herokuapp.com"
const REQUEST_URL = `${CORS_FIX}/${BASE_URL}`

// 0. Separate location string with diacritics and gets rid of diacritics
// 1. Get WOEID
// 2. Get Forecast with the WOEID
// 3. Format the data with the helpers

const useForecast = () => {
    const [isError, setError] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [forecast, setForecast] = useState(null)

    const getLocation = location => {
        switch (location) {
            case "Bogota":
            case "bogota":
                return location = "Bogotá";
            case "Montreal":
            case "montreal":
                return location = "Montréal";
            default:
                return latinize(location); // gets rid of diacritics
        }
    }

    const getWoeid = async location => {
        const { data } = await axios(`${REQUEST_URL}/search`, { params: { query: location } });

        if (!data || data.length === 0) {
            setError('There is no such location');
            setLoading(false);
            return;
        }

        return data[0];
    };

    const getForecastData = async woeid => {
        const { data } = await axios(`${REQUEST_URL}/${woeid}`);

        if (!data || data.length === 0) {
            setError('Something went wrong');
            setLoading(false);
            return;
        }

        return data;
    };

    const gatherForecastData = data => {
        const currentDay = getCurrentDayForecast(data.consolidated_weather[0], data.title, data.time);
        const currentDayDetails = getCurrentDayDetailedForecast(data.consolidated_weather[0]);
        const upcomingDays = getUpcomingDaysForecast(data.consolidated_weather);

        setForecast({ currentDay, currentDayDetails, upcomingDays });
        setLoading(false);
    };

    const submitRequest = async location => {
        setLoading(true);
        setError(false);
        setForecast(false);

        const bestLocation = getLocation(location);

        const response = await getWoeid(bestLocation);
        if (!response?.woeid) return;

        const data = await getForecastData(response.woeid);
        if (!data) return;

        console.log(data)
        gatherForecastData(data);
    };

    return {
        isError,
        isLoading,
        forecast,
        submitRequest,
    };
};

export default useForecast;