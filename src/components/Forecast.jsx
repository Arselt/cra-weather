import React from "react";
import { WeatherInfo } from "./WeatherInfo";

function Forecast(props) {
    return(
        <section className="WeatherHero">
            <WeatherInfo/>
        </section>
    );
}

export default Forecast;