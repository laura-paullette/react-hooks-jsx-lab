import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h1>About Me</h1>
    <p>I love travelling </p>
    <img src={image} alt="Imade this"/>
  </div>
  );
}

export default About;
