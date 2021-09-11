import React from 'react';

function WeatherInfo(props){
    return(
        <section>
            <section>
                <p>
                    {props.day}
                </p>
                <p>
                    {props.month}
                </p>
            </section>
            <p>
                {props.hour}
            </p>
            <p>
                {props.place}
            </p>
            <p>
                {props.weather}
            </p>
            <p>
                {props.temp}
            </p>
        </section>
    );
}

export { WeatherInfo };