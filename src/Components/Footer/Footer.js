import React from 'react'
import { Instagram,Facebook,Twitter } from 'react-bootstrap-icons'
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className='iconContainer'>
        <a href="https://www.instagram.com/"><Instagram className='contactIcon instaIcon'/></a>
        <a href="https://www.facebook.com/"><Facebook className='contactIcon fbIcon'/></a>
        <a href="https://twitter.com/?lang=en"><Twitter className='contactIcon twitterIcon'/></a>
      </div>
    </div>
  )
}