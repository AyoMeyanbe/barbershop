import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../barber-assets/barbershop-home-icon.png'
import { Link } from 'react-scroll';

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
        <li><Link to='hero' smooth offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth offset={-100} duration={500}>About</Link></li>
        <li><Link to='prices' smooth offset={-30} duration={500}>Prices</Link></li>
        <li><Link to='galleryComp' smooth offset={-35} duration={500}>Gallery</Link></li>
        <li><Link to='team' smooth offset={-35} duration={500}>Team</Link></li>
        <li><Link to='testimonial' smooth offset={-35} duration={500}>Testimonials</Link></li>
        <li><button className='orange-btn'><Link to='contacts' smooth offset={-35} duration={500}>Contact Us</Link></button></li>
      </ul>
    </nav>
  )
}

export default Navbar
