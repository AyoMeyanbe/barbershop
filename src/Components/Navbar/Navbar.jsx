import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../barber-assets/barbershop-home-icon.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(()=> {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[]) 
  return (
    <nav className={`navbar ${sticky? 'dark': ''}`}>
      <img src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Prices</li>
        <li>Gallery</li>
        <li>Team</li>
        <li>Testimonials</li>
        <li><button className='orange-btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
