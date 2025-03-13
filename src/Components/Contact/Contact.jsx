import React from "react";
import "./Contact.css";
import Title from "../Title/Title";
import envelope from '../../barber-assets/msg-icon.png'
import email_img from '../../barber-assets/envelope-icon.png'
import phone_img from '../../barber-assets/phone-icon.png'
import location_img from '../../barber-assets/location-fill-icon.png'
import arrow from '../../barber-assets/explore-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0cd3213b-2123-4a5e-a026-99a26428bec2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="container contacts">
      <Title title="Contact Us" subTitle="Get in Touch" />
      <div className="contact">
        <div className="left-col">
          <h3>Send us a Message <img src={envelope} alt="" /></h3>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            shaving community.
          </p>
          <ul>
            <li><img src={email_img} alt="" />peterboroughbarbershop@gmail.com</li>
            <li><img src={phone_img} alt="" />+112 345 6789</li>
            <li><img src={location_img} alt="" />456 Lakeshore Drive, Peterborough, Canada</li>
          </ul>
        </div>
        <div className="right-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name="name" placeholder="Enter your name" required />
                <label>Your Phone number</label>
                <input type="tel" name="phone" placeholder="Enter your phone number" required />
                <label>Your Message</label>
                <textarea name="message" placeholder="Write your messages here" id="" rows="6"></textarea>
                <button type="submit" className="orange-btn submit">Submit <img src={arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
