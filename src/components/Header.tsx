import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__name">Claire Chen</div>
      <nav className="header__nav">
        <a href="#fun-stuff" className="header__link">Fun Stuff</a>
        <a href="https://www.linkedin.com/in/clairechen" target="_blank" rel="noopener noreferrer" className="header__link">LinkedIn</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="header__link">Resume</a>
      </nav>
    </header>
  );
}
