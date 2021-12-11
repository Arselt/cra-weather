import { useState } from "react";
import axios from "axios";

const BASE_URL = "https://www.metaweather.com/api/location";
const CORS_FIX = "https://the-ultimate-api-challenge.herokuapp.com"
const REQUEST_URL = `${CORS_FIX}/${BASE_URL}`

// 1. Get WOEID
// 2. Get Weather with the WOEID

const useForecast = () => {
    const [isError, setError] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [forecast, setForecast] = useState(false)

    const getWOEID = async (location) => {
        const { data } = await axios(`${REQUEST_URL}/search`, { params: { query: location } })
    
        if (!data || data.length === 0) {   
            // if there is no data throw an error
            setError('There is no such location');
            setLoading(false);
            return;
        }

        return data[0];
    }

    const getWeatherData = async (woeid) => {
        const { data } = await axios(`${REQUEST_URL}/${woeid}`)
        if (!data || data.length === 0) {   
            // if there is no data throw an error
            setError('Something went wrong');
            setLoading('False');
            return;
        }
        return data
    }

    const submitRequest = async location => {
        setLoading(true)
        setError(false)
        
        const response = await getWOEID(location)
        if (!response?.woeid) return;

        const data = await getWeatherData(response.woeid)
        if (!data) return;

        console.log({ data })
    };

    return {
        isError,
        isLoading,
        forecast,
        submitRequest
    }
};

export default useForecast;