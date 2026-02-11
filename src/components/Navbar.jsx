import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      {/* Ikon Hamburger - Hanya muncul di mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={isMenuOpen ? "bar open" : "bar"}></div>
        <div className={isMenuOpen ? "bar open" : "bar"}></div>
        <div className={isMenuOpen ? "bar open" : "bar"}></div>
      </div>

      <ul className={isMenuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a onClick={() => scrollToSection("home")}>Home</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("experience")}>Experience</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("skills")}>Skills</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("project")}>Projects</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("contact")}>Contact</a>
        </li>
      </ul>

      <a
        href="/assets/Faithza Mandolang-CV.pdf"
        download="CV_Faithza_Mandolang.pdf"
        className="btn-resume"
      >
        Download PDF Resume
      </a>
    </nav>
  );
};

export default Navbar;
