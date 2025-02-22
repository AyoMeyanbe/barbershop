import React from 'react'
import './Hero.css'
import location_icon from '../../barber-assets/hero-location.png'
import arrow from '../../barber-assets/explore-arrow.png'

const Hero = () => {
  return (
    <div className='hero'>
      <h3>Peterborough Barbershop</h3>
      <h1>"Always a Cut above the Rest"</h1>
      <div className="location">
        <img src={location_icon} alt="" />
        <h4>456 Lakeshore Drive, Peterborough, ON K9J 2Y4, Canada</h4>
      </div>
      <button className='explore-btn'>Explore more <img src={arrow} alt="" className='explore-img' /></button>
    </div>
  )
}

export default Hero
