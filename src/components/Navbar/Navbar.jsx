import React from "react";
import "./Navbar.css";
import logo from "../../assets/alesoft.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#hero">
          <img src={logo} alt="Alex Logo" />
        </a>
      </div>
      <ul className="navbar-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Web Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
