import React from 'react'
import './Prices.css'
import Title from '../Title/Title'

const Prices = () => {
  return (
    <div className='prices'>
      <Title title="Prices And Services" subTitle="Fresh Cuts & Fair Prices" type='primary'/>
      <div className="container prices-display">
        <ul>
          <li>
            <p>Senior Haircut</p>
            <p>$25</p>
          </li>
          <li>
            <p>Junior Haircut</p>
            <p>$25</p>
          </li>
          <li>
            <p>Haircut & Wash</p>
            <p>$30</p>
          </li>
          <li>
            <p>Beard Trim</p>
            <p>$25</p>
          </li>
          <li>
            <p>Line-up Beard</p>
            <p>$15</p>
          </li>
          <li>
            <p>Haircut & Beard Trim</p>
            <p>$15</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Prices
