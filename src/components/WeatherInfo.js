import React from 'react';
import 'weather-icons/css/weather-icons.css'

function WeatherInfo(props){
    return(
        <section className="WeatherInfo">
            <section className="WeatherInfo__Calendar">
                <p>
                    {props.month} / {props.day}
                </p>
                <p>
                    {props.hour}
                </p>
            </section>
            <section className="WeatherInfo__Weather">
                <h1 className="Weather__location">
                    {props.place}
                </h1>
                <i class="wi wi-day-sunny"></i>
                <h1 className="Weather__weather">
                    {props.weather} {props.temp}
                </h1>
            </section>
        </section>
    );
}

export { WeatherInfo };