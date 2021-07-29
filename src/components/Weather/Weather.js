import React, { useState, useEffect } from "react";
import axios from "axios";
import { Li } from "./styles.js";
import { H3 } from "./styles.js";
import { Div } from "./styles.js";
import { Div2 } from "./styles.js";

const Weather = () => {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  let getWeather = async (lat, long) => {
    let res = await axios.get(
      "http://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: lat,
          lon: long,
          appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
          lang: "pt",
          units: "metric",
        },
      }
    );
    setWeather(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  if (!location) {
    return <>Habilite sua localização no browser 📍</>;
  } else if (!weather) {
    return <>Carregando o clima...</>;
  } else {
    return (
      <>
        <Div2>
          <H3>
            Condições climáticas em {weather["name"]} (
            {weather["weather"][0]["description"]})
          </H3>
        </Div2>
        <Div>
          <ul>
            <Li><img src="temp.png" height="25rem" alt="Umidade do ar"></img> Temperatura atual: {weather["main"]["temp"]}°</Li>
            <Li><img src="sens.png" height="25rem" alt="Umidade do ar"></img> Sensação térmica: {weather["main"]["feels_like"]}°</Li>
            <Li><img src="tempmax.png" height="25rem" alt="Umidade do ar"></img> Temperatura máxima: {weather["main"]["temp_max"]}°</Li>
            <Li><img src="tempmin.png" height="25rem" alt="Umidade do ar"></img> Temperatura minima: {weather["main"]["temp_min"]}°</Li>
            <Li><img src="humidity.png" height="25rem" alt="Umidade do ar"></img> Umidade: {weather["main"]["humidity"]}%</Li>
          </ul>
        </Div>
      </>
    );
  }
};

export default Weather;
