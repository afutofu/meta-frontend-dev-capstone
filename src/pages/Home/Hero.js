import React from "react";
import mediterraneanRestaurant from "../../assets/mediterranean-resto.jpg";

const Hero = () => {
  return (
    <section id="hero">
      <div id="hero-content" className="container">
        <div id="hero-info">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </div>
        <img
          id="hero-image"
          src={mediterraneanRestaurant}
          alt="Mediterranean Restaurant"
        />
      </div>
    </section>
  );
};

export default Hero;
