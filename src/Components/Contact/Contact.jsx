import React from 'react'
import './Contact.css';
import Title from '../Title/Title';

const Contact = () => {
  return (
    <div className='container '>
      <Title title="Contact Us" subTitle='Get in Touch' />
      <div className='contact'>
      <div className="left-col">
        left
      </div>
      <div className="right-col">
        right
      </div>
    </div>
    </div>
  )
}

export default Contact
