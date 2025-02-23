import React from 'react'
import './Title.css'

const Title = ({title, subTitle, type='basic'}) => {
  let sum = 5;
  let value = "5";
  console.log(sum == value, sum === value)
  return (
    <div className='title'>
      <h2 className={
        type==='basic'? 'title-basic' : 
        'title-primary'
      }
        >{title}</h2>
      <h1 className={
        type==='basic'? 'subtitle-basic' : 
        type==='primary'? 'subtitle-primary' :
        'subtitle-secondary'
      }
      >{subTitle}</h1>
    </div>
  )
}

export default Title
