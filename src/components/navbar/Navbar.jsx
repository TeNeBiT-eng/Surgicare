import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../Assets/svgs/surgicareLogo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <nav className="navBar">
        <div className="logoContainer">
          <img src={Logo} alt="surgicare-logo" />
        </div>
        <div className={`navItems ${isOpen && "open"}`}>
          <a href="#home">Home</a>
          <a href="#aboutus">About us</a>
          <a href="#departments">Department</a>
          <a href="#services">Services</a>
          <a href="#consultation" className="btn-consult"><button>See the Doctor</button></a>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bars"></div>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
