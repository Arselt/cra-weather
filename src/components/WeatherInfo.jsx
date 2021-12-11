import React from 'react';
import 'weather-icons/css/weather-icons.css'

function WeatherInfo(props){
    return(
        <section className="WeatherInfo">
            <section className="WeatherInfo__Calendar">
                <p>
                    {/* date: month and day */}
                </p>
                <p>
                    {/* hour */}
                </p>
            </section>
            <section className="WeatherInfo__Weather">
                <h1 className="Weather__location">
                    {/* place */}
                </h1>
                <i className="wi wi-day-sunny"></i>
                <h1 className="Weather__weather">
                    {/* weather and temp */}
                </h1>
            </section>
        </section>
    );
}

export { WeatherInfo };