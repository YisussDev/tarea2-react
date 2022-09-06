import React from 'react'
import './BoxWeather.css'
import { FaTemperatureLow } from "react-icons/fa";
import { FaTemperatureHigh } from "react-icons/fa";
import Spinner from '../Spinner/Spinner';


const backgrounds = {
  Rain: 'https://images8.alphacoders.com/714/714894.jpg',
  Clear: 'https://www.necochea.gov.ar/wp-content/uploads/2021/09/FOTO-clima-4-1.jpg',
  Sunny: 'https://www.necochea.gov.ar/wp-content/uploads/2021/09/FOTO-clima-4-1.jpg',
  Clouds: 'https://c4.wallpaperflare.com/wallpaper/639/794/471/azul-blanca-cielo-naturaleza-wallpaper-preview.jpg',
  Fog: 'https://c0.wallpaperflare.com/preview/1001/190/526/niebla-blanco.jpg'
}

const BoxWeather = (props) => {
  

  return (<>
  {
    props.load ? (<Spinner/>):(
    <div className="box-weather">
    <img src={backgrounds[`${props.weather}`]} alt="" />
    <div className='box'>
    <div className='info_position'>
        <h1>{props.name}</h1>
        <h2>País: {props.country}</h2>
      </div>
      <div className='info_weather'>
        <div className='info_weather_temp'>
          <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="" /><h1>{!props.convert?(parseInt(props.temp - 273.15)+"°C"):(parseInt((props.temp - 273.15)*9/5 + 32)+"°F")}</h1>
        </div>
        <div className='max-min'>
          <h4>
            <FaTemperatureLow />
            <p><strong>{!props.convert?("Min: " + parseInt(props.min - 273.15)+"°C"):("Min: " +parseInt((props.min - 273.15)*9/5 + 32)+"°F")}</strong></p> 
          </h4>
          <h4>
            <FaTemperatureHigh />
            <p><strong>
            {!props.convert?("Max: " + parseInt(props.max - 273.15)+"°C"):("Max: " +parseInt((props.max - 273.15)*9/5 + 32)+"°F")}</strong></p> 
          </h4>
        </div>
        <p>Humedad: {props.humidity}%</p>
        <p>Viento: a {Math.round(props.windspeed*3.6)} km/h</p>
        <button onClick={props.convertUnits}>Convert to {props.convert?('°C'):('°F')}</button>
      </div>
    </div>
  </div>)
  }
  
  </>
    
  )
}

export default BoxWeather