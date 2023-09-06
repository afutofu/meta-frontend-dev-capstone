import React from "react";
import mediterraneanFood from "../../assets/mediterranean-food.jpg";

const About = () => {
  return (
    <section id="about" className="container">
      <div id="about-info">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <img
        src={mediterraneanFood}
        alt="Little Lemon Restaurant"
        id="about-image"
      />
    </section>
  );
};

export default About;
