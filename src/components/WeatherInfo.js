import React from 'react';

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
                <span className="Weather__icon">
                    ☀️
                </span>
                <h1 className="Weather__weather">
                    {props.weather} {props.temp}
                </h1>
            </section>
        </section>
    );
}

export { WeatherInfo };