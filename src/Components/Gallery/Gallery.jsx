import React from 'react'
import './Gallery.css'
import Title from '../Title/Title'
import gallery_1 from '../../barber-assets/gallery-1 fake.jpg'
import gallery_2 from '../../barber-assets/gallery-2 fake.jpg'
import gallery_3 from '../../barber-assets/gallery-3 fake.jpg'
import gallery_4 from '../../barber-assets/gallery-4.jpg'
import gallery_5 from '../../barber-assets/gallery-5.jpg'
import gallery_6 from '../../barber-assets/gallery-6.jpg'

const Gallery = () => {
  return (
    <div>
      <Title title="Gallery" subTitle="Some of our Work" />
      <div className="container gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
        <img src={gallery_5} alt="" />
        <img src={gallery_6} alt="" />
      </div>
    </div>
  )
}

export default Gallery
