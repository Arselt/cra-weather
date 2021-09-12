import React from "react";

function WeatherHero(props) {
    return(
        <section className="WeatherHero">
            {props.children}
        </section>
    );
}

export { WeatherHero };