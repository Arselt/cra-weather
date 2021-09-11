import React from "react";

function WeatherHero(props) {
    return(
        <section>
            <p>
                {props.children}
            </p>
        </section>
    );
}

export { WeatherHero };