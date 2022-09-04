import React from 'react'
import './BoxWeather.css'
import { FaTemperatureLow } from "react-icons/fa";
import { FaTemperatureHigh } from "react-icons/fa";


const backgrounds = {
  Rain: 'https://images8.alphacoders.com/714/714894.jpg',
  Clear: 'https://www.necochea.gov.ar/wp-content/uploads/2021/09/FOTO-clima-4-1.jpg',
  Sunny: 'https://www.necochea.gov.ar/wp-content/uploads/2021/09/FOTO-clima-4-1.jpg',
  Clouds: 'https://c4.wallpaperflare.com/wallpaper/639/794/471/azul-blanca-cielo-naturaleza-wallpaper-preview.jpg'
}

const BoxWeather = (props) => {
  return (
    <div className="box-weather">
      <img src={backgrounds[`${props.weather}`]} alt="" />
      <div className='box'>
        <h1>{props.name} <div></div> {props.country}</h1>
        <div className='temp'>
          <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="" />
          <h2>{props.convert?(`${((props.temp - 275.15)*9/5 + 32).toFixed(1)}°F`):(`${(props.temp - 275.15).toFixed(1)}°C`)}</h2>
        </div>
          <div className='max-min'>
            <div>
              <h2>Max</h2>
              <h3><FaTemperatureHigh />23°C</h3>
            </div>
            <div>
              <h2>Min</h2>
              <h3><FaTemperatureLow/>20°C</h3>
            </div>
          </div>
        <button onClick={props.convertUnits}>Convert to {props.convert?'Celsius':'Farenheit'}</button>
      </div>
    </div>
  )
}

export default BoxWeather