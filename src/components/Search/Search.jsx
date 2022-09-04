import React from 'react'
import axios from 'axios'
import './Search.css'
import BoxWeather from '../BoxWeather/BoxWeather'
import { useState, useEffect } from 'react'
import { BiSearch } from "react-icons/bi";
import { FaSearchLocation } from "react-icons/fa";

const Search = () => {
  const [pos, setPos] = useState([]);
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [convert, setConvert] = useState(false)
  
  useEffect(()=>{
      navigator.geolocation.getCurrentPosition(res => setPos([res.coords.latitude, res.coords.longitude]), error=>console.log(error),{ enableHighAccuracy: true,
      maximumAge: 0, timeout: 10 })
  },[])
  useEffect(()=>{
    name && axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=21db05b26e68f89c309cf2c2fa958e4f`)
    .then(res => setData(res.data))
    .catch(err => null)
  },[name])
  useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${pos[0]}&lon=${pos[1]}&appid=21db05b26e68f89c309cf2c2fa958e4f`)
    .then(res => setData(res.data))
    .catch(error => null)
  },[pos])

  const sendName= (event) => {
    event.preventDefault();
    let searchName = event.target.name.value.trim()
    setName(searchName)
  }
  const convertUnits = () => {
    setConvert(!convert)
  }
  console.log(data);
  return (
    <>
      <div className='search'>
        <h2><FaSearchLocation /> {data.name}</h2>
        <div>
          <form onSubmit={sendName}>
            <input type="text" name='name' placeholder='Ingrese una ciudad...'/>
            <button type='submit'><BiSearch /></button>
          </form>
        </div>
      </div>
      <section className='box_weather'>
        {data?<BoxWeather
        name={data.name}
        icon={data.weather?.[0].icon}
        weather={data.weather?.[0].main}
        country={data.sys?.country}
        convert={convert}
        temp={data.main?.temp}
        convertUnits={convertUnits}
        />:null}
      </section>
    </>
  )
}

export default Search