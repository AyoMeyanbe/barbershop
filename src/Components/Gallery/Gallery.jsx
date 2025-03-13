import React from 'react'
import './Gallery.css'
import Title from '../Title/Title'
import gallery_1 from '../../barber-assets/gallery-1 fake.jpg'
import gallery_2 from '../../barber-assets/gallery-2 fake.jpg'
import gallery_3 from '../../barber-assets/gallery-3 fake.jpg'
import gallery_4 from '../../barber-assets/gallery-4.jpg'
import gallery_5 from '../../barber-assets/gallery-5.jpg'
import gallery_6 from '../../barber-assets/gallery-6.jpg'

const Gallery = ({setCarousel, setImgId}) => {
  return (
    <div className='galleryComp'>
      <Title title="Gallery" subTitle="Some of our Work" />
      <div className="container gallery">
        <img src={gallery_1} alt="" onClick={() => {setCarousel(true); setImgId(0)}}/>
        <img src={gallery_2} alt="" onClick={() => {setCarousel(true); setImgId(1)}}/>
        <img src={gallery_3} alt="" onClick={() => {setCarousel(true); setImgId(2)}}/>
        <img src={gallery_4} alt="" onClick={() => {setCarousel(true); setImgId(3)}}/>
        <img src={gallery_5} alt="" onClick={() => {setCarousel(true); setImgId(4)}}/>
        <img src={gallery_6} alt="" onClick={() => {setCarousel(true); setImgId(5)}}/>
      </div>
    </div>
  )
}

export default Gallery
