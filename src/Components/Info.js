import React from "react";
import InformationCard from "./InformationCard";

import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Services</span>
        </h3>

      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Emergency Care"
          description="Our Emergency Care service is crafted to serve as your dependable assistance during critical moments. Whether faced with a sudden illness, injury, or any urgent medical issue, our committed team of healthcare professionals is accessible round the clock, ensuring swift and effective care."
          
        />

        <InformationCard
          title="Heart Disease"
          description="Utilizing cutting-edge technology, our team of seasoned cardiologists and medical specialists assess your cardiovascular health and create customized treatment strategies. From thorough screenings to advanced interventions, our dedication is to assist you in preserving a healthy heart and enjoying a fulfilling life."
        
        />

        <InformationCard
          title="Dental Care"
          description="Smile with confidence as our Dental Care services cater to all your
            oral health needs. Our skilled dentists provide a wide range of
            treatments, from routine check-ups and cleanings to cosmetic
            procedures and restorative treatments."
          
        />
      </div>
    </div>
  );
}

export default Info;
