import React from "react";
import AboutCard from "./AboutCard";
import integrity from "../../../images/Integrity.png";
import nationwide from "../../../images/Nationwide.png";
import relationship from "../../../images/Relationship.png";
import partnership from "../../../images/Partnerships.png";
import support from "../../../images/Support.png";
import engineers from "../../../images/Engineers.png";
import { Link } from "react-router-dom";
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
      <Link to="/about" style={{ textDecoration: "none" }}>
        <AboutButton>About us</AboutButton>
      </Link>
      <Why>Why we are different</Why>
      <AboutDesc>
        Asides a proven track record of excellence in service and project
        delivery, here are some of what makes us different.
      </AboutDesc>
      <AboutImages>
        <AboutCard
          cardImage={integrity}
          heading="Business Integrity and Legacy"
          description="Our ethics are built on trust, value creation, quality service, corporate governance and accountability."
        />
        <AboutCard
          cardImage={nationwide}
          heading="Nationwide and International Footprint"
          description="Technology solutions are cross-boundary, so is our reach. We serve and support businesses across the African continent."
        />
        <AboutCard
          cardImage={relationship}
          heading="Strong relationship with OEMs"
          description="Cohesive relationship with OEMs enables us deepen and extend offerings on warranty, replacement and loyalty programs."
        />
        <AboutCard
          cardImage={partnership}
          heading="International and Local Partnerships"
          description="We are partners with more than 50 Original Equipment Manufacturers and Supply Chain Experts globally."
        />
        <AboutCard
          cardImage={support}
          heading="Priority Post-Sales Support"
          description="Our round-the-clock, on-call and remote support is delivered against best industry standards."
        />
        <AboutCard
          cardImage={engineers}
          heading="Specialist Installation Engineers"
          description="Our technical experts are grounded and experienced to handle the most complex installations."
        />
      </AboutImages>
    </AboutWrapper>
  );
};

export default About;
