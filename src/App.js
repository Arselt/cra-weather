import React from 'react';
import { WeatherHeader } from './components/WeatherHeader';
import { WeatherHero } from './components/WeatherHero';
import { WeatherInfo } from './components/WeatherInfo';
import './css/App.scss';

const WeatherLocation = [
  {
    day:'16',
    month:'09',
    hour: '9:54 pm',
    place: 'Mexico City',
    weather: 'Sunny',
    temp: '26°C'
  }
];

function App() {
  return (
    <React.Fragment>
      
      <WeatherHeader/>
      
      <WeatherHero>
        {WeatherLocation.map(data => (
          <WeatherInfo
            key = {data.place}
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
