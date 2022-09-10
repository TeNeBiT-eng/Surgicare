import React from "react";
import "./about.css";
import aboutImage from "../../Assets/images/maskedHospital.png";

const About = () => {
  return (
    <section className="section1" id="aboutus">
      <main>
        <h3>About Us</h3>

        <div className="about_container">
          <div className="about_text">
            <p>
              Welcome to Surgicare Consult Hospital, one of the leading medical
              centers in the city. Since our establishment in the month of June
              2011, Founded by Dr. Kanumuagi Muchibayi Viya. we have been
              providing world-class medical services to all our patients and
              have been recognized for providing exceptional medical care. We
              have 3 Able Doctors, 7 Dominant nurses, and 8 part-time Nurses. At
              Surgicare consult, we provide a range of high-quality medical
              services. From treating common infections to more serious and
              chronic diseases.{" "}
            </p>
          </div>

          <div className="container_about-image">
            <img src={aboutImage} alt="about" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
