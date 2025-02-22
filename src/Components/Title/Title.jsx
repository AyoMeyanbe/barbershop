import React from 'react'
import './Title.css'

const Title = ({title, subTitle}) => {
  return (
    <div className='title'>
      <h2>{title}</h2>
      <h1>{subTitle}</h1>
    </div>
  )
}

export default Title
