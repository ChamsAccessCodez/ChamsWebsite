import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  CyberContainer,
  Hero1,
  HeroContent,
  HeroImage,
  ContentHeader,
  ContentDescription,
  ContentButton,
  AdvanceThreats,
  A1,
  A2,
  CyberSolution,
  S1,
  S2,
  CyberWrapper,
  IndustriesWeServe,
  Gradient,
  ServeContent,
  ServeLeft,
  ServeRight,
  L1,
  L2,
  R1,
  R2,
  R3,
  R4,
  R5,
  TextDiv,
  Ready,
  RequestButton,
} from "./CyberSecurityStyle";
import Header from "../landingPage/header/Header";
import Footer from "../landingPage/footer/Footer";
import cyberHeroImage from "../../images/CyberImage1.svg";
import management from "../../images/CyberManagement.png";
import dataProtect from "../../images/DataProtectImage.png";
import digitalRisk from "../../images/CyberDigitalRisk.png";
import emailSecurity from "../../images/EmailSecurity.png";
import researchIntelligence from "../../images/ResearchIntelligence.png";
import bg from "../../images/CyberIndustryWeServeBg.png";
import cyberThreat from "../../images/CyberImage2.png";
import AboutCard from "../landingPage/about/AboutCard";

const CyberSecurity = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  return (
    <CyberContainer>
      <Header />
      <Hero1>
        <HeroContent>
          <ContentHeader>
            Efficiently Eliminate <span>Cybersecurity Risks</span> and{" "}
            <span>Reduce Costs</span>
          </ContentHeader>
          <ContentDescription>
            From endpoint protection to 24/7 monitoring of your most critical
            technology assets
          </ContentDescription>
          <Link to="/callback" style={{ textDecoration: "none" }}>
            <ContentButton>Request a callback</ContentButton>
          </Link>
        </HeroContent>
        <HeroImage>
          <img
            src={cyberHeroImage}
            alt="realImage"
            // data-aos="fade-left"
            // data-aos-offset="50"
            // data-aos-delay="50"
            // data-aos-duration="2000"
            // data-aos-easing="ease-in-out"
            // data-aos-mirror="true"
            // data-aos-once="false"
            // data-aos-anchor-placement="top-center"
          />
        </HeroImage>
      </Hero1>
      <AdvanceThreats>
        <A1>
          Advanced threats and ransomware are bringing businesses and
          governments to a halt.
        </A1>
        <A2>
          Reduce risk faster with a blended approach to security testing,
          combining automation and manual testing for more holistic visibility
          of security flaws.
        </A2>
        <img src={cyberThreat} alt="cyber2" />
      </AdvanceThreats>
      <CyberSolution>
        <S1>Our Cybersecurity Solutions</S1>
        <S2>
          Reduce risk faster with a blended approach to security testing,
          combining automation and manual testing for more holistic visibility
          of security flaws.
        </S2>
        <CyberWrapper>
          <AboutCard
            cardImage={management}
            heading="Vulnerability Management"
            description="Identity and Quantify the security flaws and vulnerabilities in your systems, so you can make improvement that reduces risk."
          />
          <AboutCard
            cardImage={dataProtect}
            heading="Data Protection"
            description="Safeguard valuable information from malicious and unintentional compromise or loss with proper access control."
          />
          <AboutCard
            cardImage={digitalRisk}
            heading="Digital Risk Protection"
            description="Safeguard critical digital assets through expert-curated threat intelligence and complete mitigation."
          />
          <AboutCard
            cardImage={emailSecurity}
            heading="Email Security and Anti Phishing"
            description="Keep emails, brands and data safe from sophisticated phishing attacks, insider threats and accidental data loss."
          />
          <AboutCard
            cardImage={researchIntelligence}
            heading="Threat Research and Intelligence"
            description="Stay ahead of organized cybercrime with products and services fueled by a World-class Threat intelligence team."
          />
        </CyberWrapper>
      </CyberSolution>
      <IndustriesWeServe>
        <Gradient />
        <ServeContent>
          <ServeLeft>
            <L1>Industries We Serve</L1>
            <L2>
              We encourage both on site and remote work for employees, breeding
              higher work-life satisfaction
            </L2>
          </ServeLeft>
          <ServeRight>
            <R1>Retail</R1>
            <R2>Finance</R2>
            <R3>Education</R3>
            <R4>Government</R4>
            <R5>Manufacturing</R5>
          </ServeRight>
        </ServeContent>
      </IndustriesWeServe>
      <TextDiv>
        <Ready>Ready to eliminate cybersecurity risk?</Ready>
        <p>
          Rely on our experience securing innovative hardware and software
          solutions for the world's largest global corporations.
        </p>
        <NavLink to="/career-form" style={{ textDecoration: "none" }}>
          <RequestButton>Request a callback</RequestButton>
        </NavLink>
      </TextDiv>
      <Footer />
    </CyberContainer>
  );
};

export default CyberSecurity;
