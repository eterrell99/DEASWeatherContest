import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Clock from './clock.js';
import './widgit.css';
import Wind from '../assets/images/wind.svg';
import Humidity from '../assets/images/Humidity.svg';
import Visibility from '../assets/images/Visibility.svg';
import W02n from '../assets/images/02n.svg';
function Widgit() {
  const [temperature, setTemperature] = useState('');
  const [city, setCity] = useState('albany');
  const [desc, setDesc] = useState('');
  const [name, setName] = useState('');
  const [humidity, setHumidity] = useState('');
  const [visibility, setVisibility] = useState('');
  const [windspeed, setWineSpeed] = useState('');
  const [wicon, setWicon] = useState('');
  const getWeatherData = () => {
    axios({
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e203317f0df5474c05874e35b030eda3`,
    })
      .then((response) => {
        setTemperature(Math.round(response.data.main.temp - 273.15) * 2 + 30);
        setDesc(response.data.weather[0].description);
        setName(response.data.name);
        setHumidity(response.data.main.humidity);
        setVisibility(response.data.visibility / 1000);
        setWineSpeed(response.data.wind.speed);
        setWicon(response.data.weather[0].icon);
        console.log(response);
      })
      .catch((error) => {});
  };

  return (
    <div
      onLoad={() => {
        getWeatherData(city);
      }}
      className="background"
    >
      <div id="card" className="weather">
        <div className="details">
          <div className="temp">
            {temperature}
            <span>&deg;</span>
          </div>
          <div className="right">
            <div id="summary">{desc}</div>
            <div style={{ fontWeight: 'bold', marginTop: '4px' }}>{name}</div>
            {Clock}
          </div>
        </div>
        <img className="weatherimg" alt="image1" src={W02n} />
        <div className="infos">
          <img
            alt="humidity1"
            className="humidityimg"
            style={{ width: '2', height: '2' }}
            src={Humidity}
          ></img>
          <div className="humidity">Humidity {humidity}%</div>
          <img
            alt="visibility1"
            className="visibilityimg"
            style={{ width: '5', height: '5' }}
            src={Visibility}
          ></img>
          <div className="visibility">Visibility {visibility} km</div>
          <img
            alt="windspeed1"
            className="windimg"
            style={{ width: '5', height: '5' }}
            src={Wind}
          ></img>
          <div className="windspeed">Wind Speed {windspeed} km</div>
        </div>
      </div>
    </div>


  );
}

export default Widgit;