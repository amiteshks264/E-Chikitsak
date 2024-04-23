import React from "react";
import img from "./../Assets/profile-1.png"
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  const handleRecords = () => {
    navigate("/records");
  }



  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          
          <h2 className="text-title">
            Find your Doctor and make an Appointment !!
          </h2>
          <p className="text-descritpion">
            <li>Talk to online doctors</li> 
            <li>Get medical advice and online prescriptions</li>
          </p>

          
          <div className="btn">
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            Book Appointment
          </button>
          

          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleRecords}
          >
           Medical Records
          </button>
          </div>
         
        </div>
        <div className="hero-image-section">
          <img className="hero-image1" src= {img} alt="Doctor" />
        </div>
      </div>

    </div>
  );
}

export default Hero;
