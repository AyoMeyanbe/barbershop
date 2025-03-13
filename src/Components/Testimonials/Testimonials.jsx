import React, { useEffect, useRef, useState } from "react";
import "./Testimonials.css";
import Title from "../Title/Title";
import pfp_1 from "../../barber-assets/pfp-1.jpg";
import pfp_2 from "../../barber-assets/pfp-2.jpg";
import pfp_3 from "../../barber-assets/pfp-3.jpg";
import pfp_4 from "../../barber-assets/pfp-4.jpg";
import pfp_5 from "../../barber-assets/pfp-5.jpg";
import pfp_6 from "../../barber-assets/pfp-6.jpg";
import next_btn from "../../barber-assets/next-icon.png";
import back_btn from "../../barber-assets/back-icon.png";

const Testimonials = () => {
  const slider = useRef();
  const [tx, setTx] = useState(0);
  // let tx = 0;
  useEffect(() => {
    if (slider.current) {
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  }, [tx]);

  const increaseTx = () => {
    if (tx > -60) {
      setTx((prevTx) => prevTx - 20);
      // tx-=20;
    }
    // slider.current.style.transform = `translateX(${tx}%)`
  };
  const decreaseTx = () => {
    if (tx < 0) {
      setTx((prevTx) => prevTx + 20);
      // tx+=20;
    }
    // slider.current.style.transform = `translateX(${tx}%)`
  };

  const testimonies = [
    {
      name: "Jenna O.",
      image: pfp_1,
      text: "\"Best cut I've ever had! The attention to detail and friendly vibe make every visit a great experience. I wouldn't go anywhere else!\""                
    },
    {
      name: "James W.",
      image: pfp_2,
      text: "\"This place is top-notch! The attention to detail is incredible, and the barbers really take their time to make sure you leave looking your best. I won’t go anywhere else!\""                
    },
    {
      name: "Marcus T.",
      image: pfp_3,
      text: "\"From the moment I walked in, I felt welcomed. The atmosphere is relaxed, and the barbers are true professionals. Best fade I’ve ever had!\""                
    },
    {
      name: "Ryan D.",
      image: pfp_4,
      text: "\"I was nervous about trying a new place, but these guys nailed it! My cut was sharp, and the hot towel treatment was a game-changer. Highly recommend!\""                
    },
    {
      name: "Luis M.",
      image: pfp_5,
      text: "\"A hidden gem! The barbers here have serious skills, and the customer service is outstanding. They listen to what you want and deliver every time.\""                
    }
  ]

  return (
    <div className="testimonial">
      <Title title="Testimonials" subTitle="Voices of Satisfaction" />
      <div className="container slider">
        
        <div ref={slider} className="testimonies">
          {testimonies.map((testimony, index) => (
            <div key={index} className="slide-container">
            <div className="slide">
              <div className="user-info">
                <img src={testimony.image} alt="" />
                {/* <img src={`https://i.pravatar.cc/150?img=${index}`} alt="" /> */}
                <h3>{testimony.name}</h3>
              </div>
              <p>
                {testimony.text}
              </p>
            </div>
          </div>
          ))}
        </div>
        <img src={next_btn} alt="" className="next-btn" onClick={increaseTx} />
        <img src={back_btn} alt="" className="back-btn" onClick={decreaseTx} />
      </div>
      
    </div>
  );
};

export default Testimonials;
