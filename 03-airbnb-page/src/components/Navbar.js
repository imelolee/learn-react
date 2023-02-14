import React from "react";
import nav_logo from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img src={nav_logo} className="nav--logo" />
    </nav>
  );
}
