import React, { useState } from "react";
import "../ComponentsCSS/ContactUs.css";
import Box from '@mui/material/Box';
import Facebook from "../Images/FB_logo.png";
import Instagram from "../Images/Insta_logo.png";
import Twitter from "../Images/Twitter_logo.png";
import LinkedIn from "../Images/Linkedin_logo.png";
import { IoMdCall } from "react-icons/io";
import { MdEmail, MdLocationPin } from "react-icons/md";
import Button from '@mui/material/Button';
import { useTheme } from '@mui/system';


export default function Pricing() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [message, setMessage] = useState("");
  const theme = useTheme();
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          contactNumber: contactNumber,
          message: message
        }),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('Form submitted successfully');
      // Optionally, you can clear the form fields after submission
      setName('');
      setEmail('');
      setContactNumber('');
      setMessage('');
    } catch (error) {
      console.error('There was an error submitting the form:', error);
    }
  };
  return (
    <Box id="contactus">
      <div className="aboutPage-contactUs" >
      <span style={{ fontFamily: "Aeonic", fontWeight: "800", fontSize: "55px", color: "var(--main-heading)", paddingBottom: "25px", marginRight:"5%"}}>Get In Touch !!</span>
     <div className="form">
     <form className="contactForm">
            <div className="aboutPage-contactUs-input" style={{width:'70%'}}>
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.value)}></input>
            </div>
            <div className="aboutPage-contactUs-input" style={{width:'70%'}}>
              <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.value)}></input>
            </div>
            <div className="aboutPage-contactUs-input" style={{width:'70%'}}>
              <input type="number" placeholder="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.value)}></input>
            </div>
            <div className="aboutPage-contactUs-textArea" style={{width:'70%'}}>
              <textarea type="text" placeholder="Message....." value={message} rows="5" onChange={(e) => setMessage(e.value)}></textarea>
            </div>
            <div className="aboutPage-contactUs-exploreButton">
              {/* <span onClick={handleSubmit}>Submit</span> */}
              <Button variant="contained" color="primary"  onClick={handleSubmit}>
              Submit
            </Button>
            </div>
          </form>
     </div>
    </div>
    </Box>
  );
}
