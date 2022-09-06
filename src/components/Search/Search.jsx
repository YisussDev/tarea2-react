import React from 'react'
import './Search.css'
import BoxWeather from '../BoxWeather/BoxWeather'
import '../Functions/useFetching.jsx'
import { BiSearch } from "react-icons/bi";
import { FaSearchLocation } from "react-icons/fa";
import useFetching from '../Functions/useFetching.jsx'
import Spinner2 from '../Spinner/Spinner2';

const Search = () => {

  const {load, data, convert,sendName,convertUnits} = useFetching();
  return (
    <>
      <div className='search'>
        {load?(<Spinner2 />):(<h2><FaSearchLocation /> {data.name}</h2>)}
        <div>
          <form onSubmit={sendName}>
            <input type="text" name='name' autoComplete='off' placeholder='Ingrese una ciudad...'/>
            <button type='submit'><BiSearch /></button>
          </form>
        </div>
      </div>
      <section className='box_weather'>
        {data?<BoxWeather
        load={load}
        name={data.name}
        icon={data.weather?.[0].icon}
        weather={data.weather?.[0].main}
        country={data.sys?.country}
        convert={convert}
        temp={data.main?.temp}
        min={data.main?.temp_min}
        max={data.main?.temp_max}
        humidity={data.main?.humidity}
        windspeed={data.wind?.speed}
        convertUnits={convertUnits}
        />:null}
      </section>
    </>
  )
}

export default Search