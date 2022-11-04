import React from "react";
import {
  AboutWrapper,
  AboutButton,
  Why,
  AboutDesc,
  AboutImages,
} from "./AboutStyle";

const About = () => {
  return (
    <AboutWrapper>
      <AboutButton>About us</AboutButton>
      <Why>Why we are different</Why>
      <AboutDesc>
        Asides a proven track record of excellence in service and project
        delivery, here are some of what makes us different.
      </AboutDesc>
      <AboutImages>
        <div>djlsjdfksj</div>
        <div>djlsjdfksj</div>
        <div>djlsjdfksj</div>
        <div>djlsjdfksj</div>
        <div>djlsjdfksj</div>
      </AboutImages>
    </AboutWrapper>
  );
};

export default About;
