import React, { useState, useEffect } from "react";
import axios from "axios"; 
import { Li } from './styles.js'
import { H3 } from './styles.js'
import { Div } from './styles.js'

const Weather = () => {

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
        
        if (!location) {
            return (
                <>
          Habilite sua localização no browser 📍
        </>
      )
    } else if (!weather) {
        return (
            <>
          Carregando o clima...
        </>
      )
    } else {
        return (
            <>
          <Div>  
          <H3>Condições climáticas em sua localização ({weather['weather'][0]['description']})</H3>
          <H3>Cidade: {weather['name']}</H3>
          <ul>
            <Li>Temperatura atual: {weather['main']['temp']}°</Li>
            <Li>Sensação térmica: {weather['main']['feels_like']}°</Li>
            <Li>Temperatura máxima: {weather['main']['temp_max']}°</Li>
            <Li>Temperatura minima: {weather['main']['temp_min']}°</Li>
            <Li>Umidade: {weather['main']['humidity']}%</Li>
          </ul>
          </Div>
        </>   
      );
    } 

}

export default Weather;