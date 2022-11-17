import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import heroImage from "../../../images/Hero-Img.png"
import heroImageAll from "../../../images/Hero-Img-All-2.png";
import arrowRight from "../../../images/arrow-right.svg";
import {
  HeroWrapper,
  Hero1,
  Hero2,
  HeroContent,
  HeroImage,
  ContentHeader,
  ContentDescription,
  ContentButton,
  Impact,
  Financial,
  Issues,
  Transactions,
  Sub1,
  Sub2,
  Sub3,
  Imp1,
  Imp2,
  Imp3,
} from "./heroStyle";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <HeroWrapper>
      <Hero1>
        <HeroContent
          data-aos="fade-right"
          //   data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          //   data-aos-anchor-placement="top-center"
        >
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
          <img
            src={heroImageAll}
            alt="realImage"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            // data-aos-anchor-placement="top-center"
          />
        </HeroImage>
      </Hero1>
      <Hero2>
        <Impact>
          <Imp1>our impact</Imp1>
          <Imp2>Over the years</Imp2>
          <Imp3>
            <p>
              learn more{" "}
              <span>
                <img src={arrowRight} alt="rightArrow" />
              </span>
            </p>
          </Imp3>
        </Impact>
        <Financial>
          <Sub1>500m+</Sub1>
          <Sub2>Financial Verifications annually</Sub2>
          <Sub3>Across over 3000 bank branches Nationwide</Sub3>
        </Financial>
        <Issues>
          <Sub1>9m+</Sub1>
          <Sub2>Issued Financial Cards</Sub2>
          <Sub3>Through instant issuance solution for commercial banks</Sub3>
        </Issues>
        <Transactions>
          <Sub1>9m+</Sub1>
          <Sub2>Issued Financial Cards</Sub2>
          <Sub3>Through instant issuance solution for commercial banks</Sub3>
        </Transactions>
      </Hero2>
    </HeroWrapper>
  );
};

export default Hero;
