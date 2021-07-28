import React, { useState, useEffect } from "react";
import axios from "axios"; 
import Button from "./components/Button/Button";
import Weather from "./components/Weather/Weather";

function App() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  let getWeather = async (lat, long) => {
    let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
        lang: 'pt',
        units: 'metric'
      }
    });
    setWeather(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  if (location === false) {
    return (
      <>
        Habilite sua localização no browser 📍
      </>
    )
  } else if (weather === false) {
    return (
      <>
        Carregando o clima...
      </>
    )
  } else {
    return (
      <>
        <h3>Condições climáticas em sua localização ({weather['weather'][0]['description']})</h3>
        <hr/>
        <h4>Cidade: {weather['name']}</h4>
        <ul>
          <li>Temperatura atual: {weather['main']['temp']}°</li>
          <li>Sensação térmica: {weather['main']['feels_like']}°</li>
          <li>Temperatura máxima: {weather['main']['temp_max']}°</li>
          <li>Temperatura minima: {weather['main']['temp_min']}°</li>
          <li>Umidade: {weather['main']['humidity']}%</li>
        </ul>
        <Weather/>
      </>   
    );
  }   
}
export default App;
