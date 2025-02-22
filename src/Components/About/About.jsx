import React from "react";
import "./About.css";
import about_img from "../../barber-assets/about-image.jpg";

const About = () => {
  return (
    <div className="about">
      <img src={about_img} alt="" className="about-img" />
      <div className="about-text">
        <h3>About us</h3>
        <h1>Shaping Styles, One Cut at a Time</h1>
        <hr />
        <p>
          Welcome to Peterborough Barbershop, where tradition meets modern
          style. Our skilled barbers are dedicated to delivering precision cuts,
          classic shaves, and personalized grooming services that keep you
          looking sharp and feeling confident. Whether you're after a timeless
          look or a bold new style, we blend craftsmanship with a relaxed
          atmosphere to create the ultimate grooming experience. Sit back, enjoy
          the conversation, and let us take care of the details—because at
          Peterborough Barbershop, every cut tells a story.
        </p>
      </div>
    </div>
  );
};

export default About;
