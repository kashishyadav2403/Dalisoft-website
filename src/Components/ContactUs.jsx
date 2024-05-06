import React, { useState } from "react";
import "../ComponentsCSS/ContactUs.css";
import Facebook from "../Images/FB_logo.png";
import Instagram from "../Images/Insta_logo.png";
import Twitter from "../Images/Twitter_logo.png";
import LinkedIn from "../Images/Linkedin_logo.png";
import { IoMdCall } from "react-icons/io";
import { MdEmail, MdLocationPin } from "react-icons/md";

export default function AboutPageContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    console.log("formSubmitted");
  };
  return (
    <div className="aboutPage-contactUs">
      <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "75px", color: "var(--main-heading)", paddingBottom: "25px" }}>Get In Touch !!</span>
      <div className="aboutPage-contactUs-container">
        <div className="aboutPage-contactUs-container-left">
          <div className="aboutPage-contactUs-container-left-text">
            <div className="aboutPage-contactUs-container-left-text-content">
              <MdLocationPin size="65" style={{ color: "var(--btn-bg-color1)", marginRight: "15px" }} />
              <span style={{ fontWeight: "200", fontSize: "18px", lineHeight: "30px", color: "var(--para-color)" }}>
              #1118, 11th Floor Bldg. B4, Spaze I Tech Park, Sector: 49, Sohna Road Gurugram: 122018
              </span>
            </div>
            <div className="aboutPage-contactUs-container-left-text-content">
              <IoMdCall size="35" style={{ color: "var(--btn-bg-color1)", marginRight: "15px" }} />
              <span style={{ fontWeight: "200", fontSize: "18px", lineHeight: "30px", color: "var(--para-color)" }}>+91 9711307076</span>
            </div>
            <div className="aboutPage-contactUs-container-left-text-content">
              <MdEmail size="35" style={{ color: "var(--btn-bg-color1)", marginRight: "15px" }} />
              <span style={{ fontWeight: "200", fontSize: "18px", lineHeight: "30px", color: "var(--para-color)" }}>corporate@dalisoft.in</span>
            </div>
          </div>
          <div className="aboutPage-contactUs-container-left-socials">
            <a href="https://www.linkedin.com/company/dalisoft-technologies-pvt-ltd/mycompany/" target="_blank" rel="noreferrer">
                 <img style={{ width: "80px", height: "80px" }} src={LinkedIn} alt="" />
            </a>
            <a href="https://www.linkedin.com/company/dalisoft-technologies-pvt-ltd/mycompany/" target="_blank" rel="noreferrer">
                 <img style={{ width: "80px", height: "80px" }} src={Twitter} alt="" />
            </a>
            <a href="https://www.linkedin.com/company/dalisoft-technologies-pvt-ltd/mycompany/" target="_blank" rel="noreferrer">
                 <img style={{ width: "80px", height: "80px" }} src={Facebook} alt="" />
            </a>
            <a href="https://www.linkedin.com/company/dalisoft-technologies-pvt-ltd/mycompany/" target="_blank" rel="noreferrer">
                 <img style={{ width: "80px", height: "80px" }} src={Instagram} alt="" />
            </a>

          </div>
        </div>
        <div className="aboutPage-contactUs-container-right">
          <form className="contactForm">
            <div className="aboutPage-contactUs-input">
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.value)}></input>
            </div>
            <div className="aboutPage-contactUs-input">
              <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.value)}></input>
            </div>
            <div className="aboutPage-contactUs-input">
              <input type="number" placeholder="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.value)}></input>
            </div>
            <div className="aboutPage-contactUs-textArea">
              <textarea type="text" placeholder="Message....." value={message} rows="5" onChange={(e) => setMessage(e.value)}></textarea>
            </div>
            <div className="aboutPage-contactUs-exploreButton">
              <span onClick={handleSubmit}>Submit</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}