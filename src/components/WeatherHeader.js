import React from "react";

function WeatherHeader() {
    return(
        <header className="WeatherHeader">
            <section className="WeatherHeader__Search">
                <input type="text" placeholder="Search your location"></input>
            </section>
        </header>
    );
}

export { WeatherHeader };