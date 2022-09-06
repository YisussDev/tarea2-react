import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

const useFetching = () => {
    const [pos, setPos] = useState([]);
    const [data, setData] = useState('')
    const [name, setName] = useState('')
    const [convert, setConvert] = useState(false)
    const [load, setLoad] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
        setLoad(false);
      }, 2000);
      navigator.geolocation.getCurrentPosition(res => setPos([res.coords.latitude, res.coords.longitude]), error=>console.log(error),{ enableHighAccuracy: true,
      maximumAge: 0, timeout: 1000 })
  },[])
  useEffect(()=>{
    name && axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=21db05b26e68f89c309cf2c2fa958e4f`)
    .then(res => setData(res.data))
    .catch(err => Swal.fire({
        title: 'Error!',
        text: 'No encontramos tu ciudad',
        icon: 'error',
        confirmButtonText: 'Cool'
      }))
  },[name])
  useEffect(()=>{
    if(pos[0]!== undefined){
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${pos[0]}&lon=${pos[1]}&appid=21db05b26e68f89c309cf2c2fa958e4f`)
    .then(res => setData(res.data))
    .catch(error => null)
    }
  },[pos])
  const sendName= (event) => {
    setLoad(true)
    event.preventDefault();
    let searchName = event.target.name.value.trim()
    setName(searchName)
    event.target.name.value = '';
    console.log(data)
    setTimeout(()=>{
        setLoad(false);
      }, 2000);
  }
  const convertUnits = () => {
    setConvert(!convert)
  }


  return {load, pos, data, convert,sendName,convertUnits}
}

export default useFetching