import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import heroImage from "../../../images/Hero-Img.png"
import heroImageAll from "../../../images/Hero-Img-All-2.png";
import arrowRight from "../../../images/arrow-right.svg";
import camera from "../../../images/camera.svg";
import shieldTick from "../../../images/shield-tick.svg";
import fingerPrint from "../../../images/fingerprint-03.svg";
import signal from "../../../images/signal-03.svg";
import coinStack from "../../../images/coins-stacked-01.svg";
import creditCard from "../../../images/credit-card-up.svg";
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
  WhiteSpace,
  AnimatedIcons,
  HeroIconConSec1,
  HeroIconConSec2,
  HeroIconConSec3,
  HeroIconConPri1,
  HeroIconConPri2,
  HeroIconConPri3,
} from "./HeroStyle";

const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.init({ disable: "mobile" });
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
          data-aos-once="true"
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
            data-aos-once="true"
            // data-aos-anchor-placement="top-center"
          />
          <AnimatedIcons>
            <HeroIconConSec1 id="camera">
            <img src={camera} alt="hero-icon" />
            </HeroIconConSec1>
            <HeroIconConPri1 id="shield-tick">
            <img src={shieldTick} alt="hero-icon" />
            </HeroIconConPri1>
            <HeroIconConSec2 id="finger-print">
            <img src={fingerPrint} alt="hero-icon" />
            </HeroIconConSec2>
            <HeroIconConPri2 id="signal">
            <img src={signal} alt="hero-icon" />
            </HeroIconConPri2>
            <HeroIconConSec3 id="coinStack">
            <img src={coinStack} alt="hero-icon" />
            </HeroIconConSec3>
            <HeroIconConPri3 id="creditCard">
            <img src={creditCard} alt="hero-icon" />
            </HeroIconConPri3>
          </AnimatedIcons>
        </HeroImage>
      </Hero1>
      <WhiteSpace></WhiteSpace>
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
          <Sub1>
            <span
              style={{
                fontFamily: "Roboto",
                fontSize: "30px",
              }}
            >
              $
            </span>
            6m+
          </Sub1>
          <Sub2>Transactions processed</Sub2>
          <Sub3>Pensions remittances routed through our gateway</Sub3>
        </Transactions>
      </Hero2>
    </HeroWrapper>
  );
};

export default Hero;
