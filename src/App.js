import React from 'react';
import { WeatherHeader } from './components/WeatherHeader';
import { WeatherHero } from './components/WeatherHero';
import { WeatherInfo } from './components/WeatherInfo';

const WeatherLocation = [
  {
    day:'dia',
    month:'mes',
    hour: 'hora',
    place: 'lugar',
    weather: 'soleado',
    temp: '26 C'
  }
];

function App() {
  return (
    <React.Fragment>
      
      <WeatherHeader/>
      
      <WeatherHero>
        {WeatherLocation.map(data => (
          <WeatherInfo
            day = {data.day}
            month = {data.month}
            hour = {data.hour}
            place= {data.place}
            weather = {data.weather}
            temp = {data.temp}
          />
        ))}
      </WeatherHero>
    </React.Fragment>
  );
}

export default App;
