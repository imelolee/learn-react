import React from "react";
import react_logo_small from "../images/react-icon-small.png";

export default function Navbar() {
  return (
    <nav>
      <img src={react_logo_small} className="nav--icon" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}
