import React, { useRef } from "react";
import "./Carousel.css";
import gallery_1 from "../../barber-assets/gallery-1 fake.jpg";
import gallery_2 from "../../barber-assets/gallery-2 fake.jpg";
import gallery_3 from "../../barber-assets/gallery-3 fake.jpg";
import gallery_4 from "../../barber-assets/gallery-4.jpg";
import gallery_5 from "../../barber-assets/gallery-5.jpg";
import gallery_6 from "../../barber-assets/gallery-6.jpg";
import next_btn from "../../barber-assets/next-icon.png";
import back_btn from "../../barber-assets/back-icon.png";

const Carousel = ({ carousel, setCarousel, imgId, setImgId }) => {
  const popUp = useRef(null);
  const images = [
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
    gallery_5,
    gallery_6,
  ];
  const close = (e) => {
    if (e.target === popUp.current) {
      setCarousel(false);
    }
  };
  const nextImg = () => {
    if (imgId < 5) {
      setImgId((prevImgId) => prevImgId + 1);
    } else {
        setImgId(0)
    }
  };
  const prevImg = () => {
    if (imgId > 0) {
      setImgId((prevImgId) => prevImgId - 1);
    } else {
        setImgId(5)
    }
  };
  return (
    <div
      className={`pop-up ${carousel ? "" : "hide"}`}
      ref={popUp}
      onClick={close}
    >
      <div className="carousel">
        <img src={images[imgId]} alt="" className="carouselImg" />
        <img src={next_btn} alt="" className="next" onClick={nextImg} />
        <img src={back_btn} alt="" className="back" onClick={prevImg} />
      </div>
    </div>
  );
};

export default Carousel;
