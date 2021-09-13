import React from "react";
import './Menu.scss'

function Menu(){
    return(
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />

                <span></span>
                <span></span>
                <span></span>
                
                <ul id="menu">
                <a href="https://www.linkedin.com/in/arastorga/"><li>LinkedIn</li></a>
                <a href="https://github.com/Arselt"><li>Github</li></a>
                </ul>
            </div>
        </nav>
    );
}

export { Menu };