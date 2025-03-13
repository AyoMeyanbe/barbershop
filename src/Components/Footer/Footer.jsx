import React from 'react'
import './Footer.css'
import instagram from '../../barber-assets/instagram-icon.png'
import facebook from '../../barber-assets/tiktok-icon.png'
import twitter from '../../barber-assets/twitter-icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="text">
        <p>© 2025 Peterborough Barbershop. All rights reserved.</p>
      </div>
      <div className="links">
    <img src={instagram} alt="" />
    <img src={facebook} alt="" />
    <img src={twitter} alt="" />
      </div>
    </div>
  )
}

export default Footer
