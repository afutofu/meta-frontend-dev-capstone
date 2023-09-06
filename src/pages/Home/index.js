import React from "react";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";

const Home = () => {
  return (
    <article>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </article>
  );
};

export default Home;
