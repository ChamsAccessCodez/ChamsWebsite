import React from "react";
import heroImage from "../../../images/Hero-Img.png"
import {
  HeroWrapper,
  Hero1,
  Hero2,
  HeroContent,
  HeroImage,
  ContentHeader,
  ContentDescription,
  ContentButton,
} from "./heroStyle";

const Hero = () => {
  return (
    <HeroWrapper>
      <Hero1>
        <HeroContent>
          <ContentHeader>
            Ready for <span>possibilities</span>
          </ContentHeader>
          <ContentDescription>
            We empower organizations and industries with custom solutions to
            some of the most complex financial, digital, security, and
            technology problems.
          </ContentDescription>
          <ContentButton>Request a callback</ContentButton>
        </HeroContent>
        <HeroImage>
            <img src={heroImage} alt="realImage"/>
        </HeroImage>
      </Hero1>
      <Hero2>another</Hero2>
    </HeroWrapper>
  );
};

export default Hero;
