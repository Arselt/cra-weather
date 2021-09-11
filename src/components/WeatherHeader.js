import React from "react";

function WeatherHeader() {
    return(
        <header>
            <section>
                <input type="text">
                </input>
                <button type="submit">
                    🔎
                </button>
            </section>
            <nav>
                Menu
            </nav>
        </header>
    );
}

export { WeatherHeader };