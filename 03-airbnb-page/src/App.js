import React from "react";
import Navbar from "./components/Navbar";
import "./style.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  // <Hero />
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
