import React, { useState } from "react";
import "./Navbar.css";
import lvaLogo from "../../assets/img/lva-icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">
        <img className="img-logo" src={lvaLogo} alt="LVA Indices" />
        LVA
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/#">Inicio</a>
        <a href="/#">Fondos</a>
        <a href="/#">FAQ</a>
        <a href="/#">Contacto</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
