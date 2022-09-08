import React from "react";
import Navbar from "../navbar/Navbar";
import "./home.css";
import Hospital from "../../Assets/images/hospital.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <img src={Hospital} alt="hospital environment" className="hospitalImage" />
      {/* <img src={Hospital} alt="Avatar" className="image"> */}
        <div className="overlay">
          <div>
              <div class="text">
                <h2>Surgicare Consult Hospital</h2>
                <h4>....God Heals, We Care</h4>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
