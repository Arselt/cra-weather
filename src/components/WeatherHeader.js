import React from "react";
import { Menu } from './menu/Menu';

function WeatherHeader() {
    return(
        <header className="WeatherHeader">
            <section className="WeatherHeader__Search">
                <input type="text" placeholder="Search your location"></input>
            </section>
            <Menu />
        </header>
    );
}

export { WeatherHeader };