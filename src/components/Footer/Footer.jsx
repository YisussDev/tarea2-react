import React from 'react'
import './Footer.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <a href='https://github.com/YisussDev' target='_BLANK' rel="noreferrer" ><FaGithub /></a>
      <a href='https://www.linkedin.com/in/jesuspaguayn/' target='_BLANK' rel="noreferrer"><FaLinkedin /></a>
    </div>
  )
}

export default Footer