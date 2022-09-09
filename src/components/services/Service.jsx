import React from "react";
import "./service.css";
import ServiceItems from "./ServiceItems";
import Pill from "../../Assets/svgs/drugPills.svg";
import Medicine from "../../Assets/svgs/pharmacymedicine.svg";
import Ambulance from "../../Assets/svgs/ambulance.svg";
import Microscope from "../../Assets/svgs/laboratoryIcon.svg";
import Personnel from "../../Assets/svgs/medicalPersonnel.svg";
import Surgeon from "../../Assets/svgs/surgeon.svg";
import Advice from "../../Assets/svgs/medical-advice.svg";
import Care from "../../Assets/svgs/medicalCare.svg";

const Service = () => {
  return (
    <section className="section3">
      <main>
        <h3>Our Services</h3>

        <div className="service_container">
          <ServiceItems src={Pill} text="Provision of general medicine" />
          <ServiceItems src={Medicine} text="Pharmaceutical care" />
          <ServiceItems src={Ambulance} text="Ambulance availability" /> 
          <ServiceItems src={Microscope} text="Laboratory" />
          <ServiceItems src={Personnel} text="General treatment" />
          <ServiceItems src={Surgeon} text="Surgeries in all fields" />
          <ServiceItems src={Advice} text="Medical advice and consultation" />
          <ServiceItems src={Care} text="Reproductive medical care" />
        </div>
      </main>
    </section>
  );
};

export default Service;
